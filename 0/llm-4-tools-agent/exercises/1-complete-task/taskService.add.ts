// ============================================
// תרגיל 1
// להדביק בסוף src/services/taskService.ts
// ============================================

// גרסה לפי מזהה.
// שימו לב ל-user_id ב-WHERE.
// בלעדיו כל משתמש יוכל לסגור משימות של אחרים.
export async function completeTask(
  userId: number,
  taskId: number
): Promise<Task | null> {

  const rows = await sql`
    UPDATE tasks
    SET completed = TRUE
    WHERE
      task_id = ${taskId}
      AND user_id = ${userId}
    RETURNING
      task_id,
      title,
      priority,
      completed
  `

  return (rows[0] as Task) ?? null
}


// גרסה לפי כותרת.
// זו הגרסה שעובדת יפה בכיתה, כי המשתמש אומר
// "המשימה של החלב" ולא "משימה מספר 3".
export async function completeTaskByTitle(
  userId: number,
  title: string
): Promise<Task | null> {

  const rows = await sql`
    UPDATE tasks
    SET completed = TRUE
    WHERE task_id = (

      SELECT task_id
      FROM tasks
      WHERE
        user_id = ${userId}
        AND completed = FALSE
        AND title ILIKE ${'%' + title + '%'}
      ORDER BY task_id DESC
      LIMIT 1
    )
    RETURNING
      task_id,
      title,
      priority,
      completed
  `

  return (rows[0] as Task) ?? null
}
