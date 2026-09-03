// ============================================
// Bonus 2: documentService עם company_id
//
// להעתיק במקום src/services/documentService.ts
//
// הרעיון: הסינון לפי חברה קורה ב-SQL,
// לפני החיפוש הסמנטי.
// אסור לסמוך על ה-LLM שיסנן בעצמו.
// ============================================

import { sql } from '../db'

import {
  createEmbedding,
  toVectorString
} from './embeddingService'

export type DocumentRow = {
  document_id: number
  company_id: number
  title: string
  content: string
}

export type SearchResult =
  DocumentRow & {
    distance: number
  }

export async function addDocument(
  companyId: number,
  title: string,
  content: string
): Promise<DocumentRow> {

  const embedding =
    await createEmbedding(content)

  const vector =
    toVectorString(embedding)

  const result = await sql`
    INSERT INTO documents (
      company_id,
      title,
      content,
      embedding
    )
    VALUES (
      ${companyId},
      ${title},
      ${content},
      ${vector}::vector
    )
    RETURNING
      document_id,
      company_id,
      title,
      content
  `

  return result[0] as DocumentRow
}


export async function searchDocuments(
  companyId: number,
  question: string,
  limit: number = 3,
  threshold: number = 0.7
): Promise<SearchResult[]> {

  const embedding =
    await createEmbedding(question)

  const vector =
    toVectorString(embedding)

  const documents = await sql`
    SELECT
      document_id,
      company_id,
      title,
      content,
      embedding <=> ${vector}::vector
        AS distance

    FROM documents

    WHERE
      company_id = ${companyId}

      AND embedding <=> ${vector}::vector
        < ${threshold}

    ORDER BY
      embedding <=> ${vector}::vector

    LIMIT ${limit}
  `

  return documents as SearchResult[]
}
