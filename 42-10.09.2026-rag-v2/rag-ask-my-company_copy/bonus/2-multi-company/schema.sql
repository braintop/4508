-- ============================================
-- Bonus 2: Multi Company
--
-- כל חברה רואה רק את המסמכים שלה.
-- ============================================

CREATE EXTENSION IF NOT EXISTS vector;

DROP TABLE IF EXISTS documents;

CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(150) NOT NULL
);

CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,

    company_id INTEGER
        NOT NULL,

    title VARCHAR(200)
        NOT NULL,

    content TEXT
        NOT NULL,

    embedding vector(768)
        NOT NULL,

    created_at TIMESTAMP
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (company_id)
        REFERENCES companies(company_id)
        ON DELETE CASCADE
);

-- Index משולב: קודם מסננים לפי חברה, אחר כך מחפשים.
CREATE INDEX documents_company_idx
    ON documents (company_id);

CREATE INDEX documents_embedding_idx
    ON documents
    USING hnsw (embedding vector_cosine_ops);


INSERT INTO companies (company_name)
VALUES
    ('BrainTop Electronics'),
    ('Blue Ocean Travel');
