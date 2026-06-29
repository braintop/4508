// קומפוננטה שמציגה את כל ה-todos מ-Firestore ומאפשרת לסמן אותם כהושלמו
import { todosCollection } from '../collections' // הפניה לאוסף todos עם converter (כולל id)
import { doc, getDocs, updateDoc } from 'firebase/firestore' // פונקציות Firestore: קריאה ועדכון מסמכים
import { useState, useEffect } from 'react' // hooks לניהול state ולטעינה בכניסה לקומפוננטה
import { db } from '../firebase' // חיבור למסד הנתונים של Firebase
import type { Todo } from '../types/firebase' // טיפוס TypeScript של מסמך todo

const styles = `
  .todos-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
  }

  .todos-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .todos-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--social-bg);
  }

  .todos-text {
    flex: 1;
    color: var(--text-h);
  }

  .todos-completed {
    text-decoration: line-through;
    opacity: 0.6;
  }

  .todos-status {
    font-size: 0.85rem;
    color: var(--text);
  }

  .todos-button {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text-h);
    cursor: pointer;
  }

  .todos-button:hover {
    border-color: var(--accent-border);
  }

  .todos-error {
    color: #e53935;
    margin: 0;
  }

  .todos-loading {
    color: var(--text);
  }
`

export default function GetAllTodos() {
    const [todos, setTodos] = useState<Todo[]>([]) // רשימת כל ה-todos מהשרת
    const [loading, setLoading] = useState<boolean>(true) // true בזמן טעינה ראשונית
    const [error, setError] = useState<string | null>(null) // הודעת שגיאה אם משהו נכשל

    // רץ פעם אחת כשהקומפוננטה נטענת — מביא את כל ה-todos
    useEffect(() => {
        const getTodos = async () => {
            try {
                const querySnapshot = await getDocs(todosCollection) // שולף את כל המסמכים מהאוסף
                setTodos(querySnapshot.docs.map((doc) => doc.data())) // הופך כל מסמך לאובייקט Todo (עם id)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load todos') // שומר הודעת שגיאה קריאה
            } finally {
                setLoading(false) // סיום טעינה — בין אם הצליח או נכשל
            }
        }
        getTodos() // מפעיל את הפונקציה האסינכרונית
    }, []) // מערך ריק = רץ רק בהרכבה הראשונה

    // מחליף את מצב completed של todo לפי id
    async function toggleTodo(id: string) {
        const todo = todos.find((t) => t.id === id) // מוצא את ה-todo ברשימה המקומית
        if (!todo) return // אם לא נמצא — יוצא בלי לעשות כלום

        const previousTodos = todos // שומר עותק לגיבוי במקרה של שגיאה
        const newCompleted = !todo.completed // הופך true↔false

        setTodos(todos.map((t) => (t.id === id ? { ...t, completed: newCompleted } : t))) // עדכון מיידי ב-UI (אופטימי)
        setError(null) // מנקה שגיאה קודמת

        try {
            await updateDoc(doc(db, 'todos', id), { completed: newCompleted }) // שומר את השינוי ב-Firestore
        } catch (err) {
            setTodos(previousTodos) // מחזיר את הרשימה הישנה אם העדכון נכשל
            setError(err instanceof Error ? err.message : 'Failed to update todo')
        }
    }

    if (loading) {
        return (
            <>
                <style>{styles}</style>
                <p className="todos-loading">Loading...</p>
            </>
        )
    }

    return (
        <>
            <style>{styles}</style>
            <div className="todos-container">
                <h1>All Todos</h1>
                {error && <p className="todos-error">Error: {error}</p>}
                <ul className="todos-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todos-item">
                            <span className={`todos-text ${todo.completed ? 'todos-completed' : ''}`}>
                                {todo.text}
                            </span>
                            <span className="todos-status">
                                {todo.completed ? 'Completed' : 'Not Completed'}
                            </span>
                            <button className="todos-button" onClick={() => toggleTodo(todo.id)}>
                                Toggle
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
