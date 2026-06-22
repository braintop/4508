// קומפוננטה פשוטה: שדה טקסט + כפתור → שומרת todo חדש ב-Firestore

import { useState, type FormEvent } from 'react'
import { addDoc } from 'firebase/firestore'
import { todosCollection } from '../collections'
import type { NewTodo } from '../types/firebase'

export default function AddTodo() {
  // state מקומי — הטקסט שהמשתמש מקליד
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // נקרא כשלוחצים "הוסף"
  async function handleSubmit(e: FormEvent) {
    e.preventDefault() // מונע רענון של הדף

    if (!text.trim()) return // לא שומרים todo ריק

    setLoading(true)
    setMessage('')

    // אובייקט חדש בלי id — Firestore ייצור id בעצמו
    const newTodo: NewTodo = {
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
      userId: 'demo-user', // בשיעור הבא: נחליף במשתמש מחובר (auth)
    }

    try {
      // addDoc = הוספת מסמך חדש לאוסף
      const docRef = await addDoc(todosCollection, newTodo)
      setMessage(`נוסף בהצלחה! id: ${docRef.id}`)
      setText('') // מנקים את השדה אחרי הצלחה
    } catch (error) {
      console.error(error)
      setMessage('שגיאה בשמירה — בדקו את הקונסול')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>הוספת Todo</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="מה צריך לעשות?"
        disabled={loading}
      />

      <button type="submit" disabled={loading || !text.trim()}>
        {loading ? 'שומר...' : 'הוסף'}
      </button>

      {message && <p className="todo-message">{message}</p>}
    </form>
  )
}
