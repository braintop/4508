// קומפוננטה שמציגה את כל ה-todos מ-Firestore ומאפשרת לסמן אותם כהושלמו

import { todosCollection } from '../collections' // הפניה לאוסף todos עם converter (כולל id)
import { doc, getDocs, updateDoc } from 'firebase/firestore' // פונקציות Firestore: קריאה ועדכון מסמכים
import { useState, useEffect } from 'react' // hooks לניהול state ולטעינה בכניסה לקומפוננטה
import { db } from '../firebase' // חיבור למסד הנתונים של Firebase
import type { Todo } from '../types/firebase' // טיפוס TypeScript של מסמך todo

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

    if (loading) return <p>Loading...</p> // מציג "טוען..." עד שהנתונים מגיעים

    return (
        <div>
            <h1>All Todos</h1>
            {error && <p>Error: {error}</p>} {/* מציג שגיאה אם יש, בלי להסתיר את הרשימה */}
            {todos.map((todo) => (
                <div key={todo.id}> {/* key חובה ב-React לכל פריט ברשימה */}
                    {todo.text} - {todo.completed ? 'Completed' : 'Not Completed'} {/* טקסט + סטטוס */}
                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button> {/* לחיצה מחליפה completed */}
                </div>
            ))}
        </div>
    )
}
