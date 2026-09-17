# Tools + Function Calling — פרויקט השיעור

הפרויקט המלא של **מפגש 1: Tools / Function Calling** (שקפים 1–53),
ופתרונות שלושת התרגילים (שקפים 54–56).

המערכת: המשתמש כותב משפט אחד, והמודל בוחר בעצמו איזו פונקציה להפעיל.
שלושה כלים על המערכת שכבר נבנתה בשיעורים 1–3.

---

## מבנה

```
llm-4-tools-agent
│
├── server/                   המערכת של השיעור, רצה
│   ├── sql/schema.sql        users + documents + tasks
│   ├── requests.http         כל הבדיקות של השיעור
│   └── src/
│       ├── tools/            ← הלב של המפגש
│       │   ├── toolDefinitions.ts    3 הכלים
│       │   └── executeTool.ts        מי מריץ, ולמי מותר
│       ├── services/
│       │   ├── agentService.ts       שתי הקריאות ל-Gemini
│       │   ├── taskService.ts        קוד רגיל, בלי AI
│       │   ├── ragService.ts         משיעור 3
│       │   ├── documentService.ts    משיעור 3
│       │   └── embeddingService.ts   משיעור 3
│       ├── controllers/ routes/ middleware/
│       └── seedDocuments.ts, checkSetup.ts
│
├── client/                   צ'אט קטן: answer + toolsUsed
│
├── exercises/                פתרונות תרגילים 1-3
│   ├── 1-complete-task/      קוד אמיתי
│   ├── 2-bad-description/    ניסוי
│   └── 3-tool-logging/       מדידה
│
└── final-project/            התרגיל המסכם (שקפים 57-59)
```

---

## הרצה

```bash
cd server
npm install
cp .env.example .env
```

ממלאים ב-`.env`: `GEMINI_API_KEY`, `DATABASE_URL` מ-Neon, ו-`JWT_SECRET`
(כל מחרוזת ארוכה).

מריצים את `sql/schema.sql` ב-SQL Editor של Neon, ואז:

```bash
npm run check
```

הסקריפט בודק משתני סביבה, חיבור למסד, `pgvector`, קיום הטבלאות, ומודל
ה-Embedding. אם משהו חסר הוא אומר בדיוק מה.

```bash
npm run seed:all
npm run dev
```

`seed:all` מכין את כל מסד הנתונים בפקודה אחת: משתמש דמו, 17 מסמכים
ו-10 משימות, ובסוף מדפיס **Token מוכן להדבקה** ב-`requests.http`.

| פקודה | מה עושה | כמה זמן |
|---|---|---|
| `npm run seed:all` | משתמש + מסמכים + משימות | ~30 שניות |
| `npm run seed:tasks` | משימות בלבד, מדלג על Embeddings | שנייה |
| `npm run seed` | מסמכים בלבד | ~30 שניות |

בין הדגמות בכיתה, `seed:tasks` מאפס את המשימות מיד.

ובטרמינל שני:

```bash
cd client && npm install && npm run dev
```

---

## שלוש הבדיקות של השיעור

פותחים את `server/requests.http`, נרשמים (בקשה 1), מדביקים את ה-token,
ואז מריצים את בקשות 3, 4, 5:

| ההודעה | הכלי שנבחר | למה זה מרשים |
|---|---|---|
| `What is the refund policy?` | `search_documents` | |
| `Add a task to buy milk` | `create_task` | |
| `What do I need to do today?` | `list_tasks` | **המילה task לא מופיעה בשאלה** |

ואז השאלה לכיתה: *"תפתחו את הקוד ותמצאו לי את ה-`if` שבחר בין שלושתם."*
אין כזה.

---

## הקבצים שכדאי לפתוח בכיתה, לפי הסדר

1. **`tools/toolDefinitions.ts`** — כאן מתחילים. שלושה כלים, ובכל אחד
   שלושה שדות. תעצור על ה-`description`: זה מה שהמודל באמת קורא.

2. **`services/agentService.ts`** — שתי הקריאות. השורה
   `const calls = first.functionCalls` היא הרגע שבו מודל מפסיק להחזיר
   טקסט ומתחיל להחזיר החלטה.

3. **`tools/executeTool.ts`** — נקודת האבטחה. `switch` מפורש, ולידציה על
   כל ארגומנט, ו-`userId` שמגיע מהשרת. שים לב שהוא **לא** נמצא ב-`args`.

---

## הערה על `search_documents`

הכלי קורא ל-`askDocuments`, שהיא עצמה קוראת ל-Gemini. כלומר בשאלה על
מסמכים יש **ארבע** קריאות למודל: שתיים בסוכן ושתיים ב-RAG.

זה תואם את מה שכתוב בשקפים, אבל שווה לשאול את הכיתה:
*האם הכלי היה צריך להחזיר תשובה מנוסחת, או פשוט את המסמכים שנמצאו?*

התשובה המקצועית היא האפשרות השנייה — הכלי מחזיר `documents`, והמודל
החיצוני מנסח. זה חוסך שתי קריאות. שינוי של שורה אחת ב-`executeTool.ts`,
ותרגיל מצוין למי שסיים מוקדם.

---

## מה המערכת הזאת עדיין לא יודעת

```json
{ "message": "Check the refund policy and add a task to update our FAQ" }
```

שתי פעולות בהודעה אחת. `runAgent` מריץ **כלי אחד ועוצר**, ולכן רק אחת
מהן תתבצע. אין גם זיכרון שיחה: כל בקשה בונה `contents` מאפס.

שתי המגבלות האלה הן בדיוק מפגש 2.
