# תרגיל 1: הכלי הרביעי — `complete_task`

## מה מוסיפים

שלושה קבצים, בסדר הזה:

1. `taskService.add.ts` ← להדביק בסוף `src/services/taskService.ts`
2. `toolDefinitions.add.ts` ← להדביק בסוף `src/tools/toolDefinitions.ts`,
   **ולא לשכוח** להוסיף את הכלי ל-`allTools`
3. `executeTool.case.ts` ← להוסיף כ-`case` נוסף ב-`src/tools/executeTool.ts`

## הבדיקה

```json
{ "message": "Mark the milk task as done" }
```

## מה יקרה בפועל

המודל יקרא ל-`complete_task` עם `title: "milk"` וזה יעבוד, כי חיפשנו
לפי כותרת ולא לפי מזהה.

גם זה יעבוד, כי המשתמש נתן את המספר בעצמו:

```json
{ "message": "Complete task 3" }
```

## הניסוי האמיתי

```json
{ "message": "What do I need to do?" }
{ "message": "Mark the first one as done" }
```

ההודעה השנייה תיכשל. שתי סיבות, ושתיהן חשובות:

1. `runAgent` מריץ **כלי אחד ועוצר**. אין לו דרך לקרוא קודם ל-`list_tasks`
   ואז ל-`complete_task`.
2. אין **זיכרון שיחה**. כל בקשה בונה `contents` מאפס, ולכן המודל לא יודע
   מה היה "הראשון".

זה בדיוק התוכן של מפגש 2. **אל תתקן את זה כאן** — התסכול הוא הפואנטה.

## השאלה שבשקף

> איך המודל יודע מהו ה-`task_id`?

התשובה: הוא לא. הוא חייב קודם לראות את המשימות. לכן עקפנו עם חיפוש
לפי כותרת, וזו בדיוק הסיבה שסוכן אמיתי צריך לולאה ולא קריאה בודדת.
