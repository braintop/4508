// ============================================
// תרגיל 1
// להדביק בסוף src/tools/toolDefinitions.ts
// ============================================

export const completeTaskTool = {

  name: 'complete_task',

  description:
    'Mark a task of the current user as ' +
    'done. ' +
    'Provide task_id when the user gives a ' +
    'number, or title when the user ' +
    'describes the task in words.',

  parameters: {

    type: Type.OBJECT,

    properties: {

      task_id: {
        type: Type.NUMBER,

        description:
          'The id of the task, if known'
      },

      title: {
        type: Type.STRING,

        description:
          'Part of the task title, ' +
          'for example: milk'
      }
    },

    // אף אחד מהם אינו חובה בנפרד,
    // אבל צריך לפחות אחד.
    // את זה נאכוף בקוד שלנו, לא כאן.
    required: []
  }
}


// ולהחליף את הרשימה הקיימת בזו:
export const allToolsWithComplete = [
  searchDocumentsTool,
  createTaskTool,
  listTasksTool,
  completeTaskTool
]
