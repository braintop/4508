import { useState, type FormEvent, type ChangeEvent } from 'react'
import { model } from '../lib/gemini'

export default function SimpleChat() {
  const [input, setInput] = useState<string>('')
  const [response, setResponse] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    const result = await model.generateContent(input)
    setResponse(result.response.text())
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button type="submit">Send</button>
      </form>
      <div>{response}</div>
    </div>
  )
}