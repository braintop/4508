import { useState } from 'react'

// ============================================
// ממשק צ'אט קטן.
//
// שני דברים מוצגים למשתמש:
//   answer     - התשובה
//   toolsUsed  - באיזה כלי המערכת השתמשה
//
// הצגת הכלי אינה קישוט. כשמשהו יוצא לא נכון,
// רואים מיד איזה כלי נבחר בטעות.
// ============================================

const API = 'http://localhost:3000/api'

type Message = {
  role: 'user' | 'assistant'
  text: string
  tools?: string[]
}

function Assistant() {

  const [token, setToken] = useState('')
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('123456')

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  async function login() {

    try {

      const response = await fetch(
        `${API}/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()

      setToken(data.token)

    } catch (error) {
      console.error(error)
      alert('ההתחברות נכשלה')
    }
  }

  async function send() {

    if (!input.trim() || !token) {
      return
    }

    const question = input.trim()

    setMessages(prev => [
      ...prev,
      { role: 'user', text: question }
    ])

    setInput('')
    setLoading(true)

    try {

      const response = await fetch(
        `${API}/agent/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            message: question
          })
        }
      )

      if (!response.ok) {
        throw new Error('Server error')
      }

      const data = await response.json()

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: data.answer,
          tools: data.toolsUsed
        }
      ])

    } catch (error) {

      console.error(error)

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: 'משהו השתבש'
        }
      ])

    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="page">

        <h1>Company Assistant</h1>

        <p className="hint">
          התחברו כדי לקבל Token
        </p>

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />

        <button onClick={login}>
          התחבר
        </button>
      </div>
    )
  }

  return (
    <div className="page">

      <h1>Company Assistant</h1>

      <p className="hint">
        נסו: מה מדיניות ההחזרות · תוסיף משימה
        לקנות חלב · מה אני צריך לעשות היום
      </p>

      <div className="chat">

        {messages.map((m, i) => (
          <div
            key={i}
            className={`msg ${m.role}`}
          >

            <p>{m.text}</p>

            {m.tools && m.tools.length > 0 && (
              <span className="tools">
                השתמשתי ב: {m.tools.join(', ')}
              </span>
            )}
          </div>
        ))}

        {loading && (
          <div className="msg assistant">
            <p>חושב...</p>
          </div>
        )}
      </div>

      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="כתבו הודעה..."
        rows={3}
      />

      <button
        onClick={send}
        disabled={loading}
      >
        {loading ? 'שולח...' : 'שלח'}
      </button>
    </div>
  )
}

export default Assistant
