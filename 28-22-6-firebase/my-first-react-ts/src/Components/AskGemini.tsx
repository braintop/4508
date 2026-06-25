import { model } from '../lib/gemini'
import type { GenerateContentResult } from '@google/generative-ai'
import { useState } from 'react'

export default function AskGemini() {
  const [answer, setAnswer] = useState<string>('')

  async function handleAsk(): Promise<void> {
    const result: GenerateContentResult = await model.generateContent('1 +1 ?')
    const response = result.response
    const text: string = response.text()
    setAnswer(text)
  }

  return (
    <div>
      <button onClick={handleAsk}>Ask Gemini</button>
      <p>{answer}</p>
    </div>
  )
}