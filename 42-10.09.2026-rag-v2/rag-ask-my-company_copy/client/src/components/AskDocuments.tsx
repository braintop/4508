import { useState } from 'react'

// ============================================
// AskDocuments
//
// שלב 9 של התרגיל:
// להציג למשתמש Answer + Sources.
// ============================================

const API_URL =
  'http://localhost:3000/api/rag/ask'

type RagResponse = {
  answer: string
  sources: string[]
}

function AskDocuments() {

  const [question, setQuestion] =
    useState('')

  const [answer, setAnswer] =
    useState('')

  const [sources, setSources] =
    useState<string[]>([])

  const [loading, setLoading] =
    useState(false)

  async function askQuestion() {

    if (!question.trim()) {
      return
    }

    try {

      setLoading(true)

      setAnswer('')
      setSources([])

      const response =
        await fetch(API_URL, {

          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({
            question
          })
        })

      if (!response.ok) {
        throw new Error('Server error')
      }

      const data: RagResponse =
        await response.json()

      setAnswer(data.answer)

      setSources(data.sources ?? [])

    } catch (error) {

      console.error(error)

      setAnswer('Something went wrong')

    } finally {

      setLoading(false)
    }
  }

  return (
    <div className="page">

      <h1>Ask My Company</h1>

      <p className="hint">
        שאלו על מדיניות החזרות, משלוחים,
        אחריות, שעות תמיכה ותשלומים
      </p>

      <textarea
        value={question}
        onChange={
          event =>
            setQuestion(event.target.value)
        }
        placeholder="Ask a question..."
        rows={4}
      />

      <button
        onClick={askQuestion}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Ask'}
      </button>

      {answer && (
        <div className="answer">

          <h2>Answer</h2>

          <p>{answer}</p>

          {sources.length > 0 && (
            <>
              <h3>Sources</h3>

              <ul>
                {sources.map(source => (
                  <li key={source}>
                    {source}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default AskDocuments
