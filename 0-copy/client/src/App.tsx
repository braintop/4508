import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Task = {
  _id: string
  title: string
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('/api/tasks').then((res) => res.json()).then(setTasks)
  }, [])

  async function addTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    const task: Task = await res.json()
    setTasks((current) => [...current, task])
    setTitle('')
  }

  return (
    <main>
      <h1>My Tasks</h1>
      <form onSubmit={addTask}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t._id}>{t.title}</li>
        ))}
      </ul>
    </main>
  )
}
