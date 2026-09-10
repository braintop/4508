// ============================================
// תרגיל 1
// להוסיף כ-case נוסף ב-src/tools/executeTool.ts
//
// ולעדכן את ה-import למעלה:
//
// import {
//   createTask,
//   listTasks,
//   completeTask,
//   completeTaskByTitle,
//   PRIORITIES
// } from '../services/taskService'
// ============================================

    case 'complete_task': {

      const taskId = args?.task_id

      const title = args?.title

      // המודל יכול לשלוח אחד מהם, שניהם, או כלום.
      // הוולידציה היא שלנו, לא שלו.
      if (
        typeof taskId !== 'number' &&
        typeof title !== 'string'
      ) {
        return {
          ok: false,
          error: 'Provide task_id or title'
        }
      }

      const task =
        typeof taskId === 'number'
          ? await completeTask(userId, taskId)
          : await completeTaskByTitle(
              userId,
              String(title).trim()
            )

      // לא נמצאה משימה מתאימה.
      // מחזירים שגיאה מסודרת, לא קורסים,
      // והמודל יסביר זאת למשתמש.
      if (!task) {
        return {
          ok: false,
          error: 'No matching open task found'
        }
      }

      return { ok: true, data: task }
    }
