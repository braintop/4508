# בונוסים

הפתרון הבסיסי בתיקיית `server` עונה על שלבים 1–9 של התרגיל המסכם.
כאן נמצאים שלושת הבונוסים.

---

## Bonus 1 — Chunking

**כבר ממומש בפתרון הבסיסי.**

- הקוד: `server/src/services/chunkService.ts`
- דוגמה להרצה: `server/src/seedLongDocument.ts`

```bash
npm run seed:long
```

הפונקציה חותכת מסמך ארוך לחתיכות של 800 תווים עם חפיפה של 100 תווים,
וכל חתיכה מקבלת Embedding משלה ונשמרת כשורה נפרדת.

**שאלה טובה לכיתה:** אחרי `seed:long`, שאלו
`How many vacation days do I get?`
וראו איזה `part` חזר ב-sources.

---

## Bonus 2 — company_id

כל חברה מחפשת רק במסמכים שלה.

**קבצים:**

| קובץ | לאן |
|---|---|
| `2-multi-company/schema.sql` | להריץ ב-Neon במקום `server/sql/schema.sql` |
| `2-multi-company/documentService.ts` | מחליף את `server/src/services/documentService.ts` |

**שינויים נוספים שצריך לעשות בעצמכם (בכוונה — זה חלק מהתרגיל):**

1. ב-`ragService.ts` — להעביר `companyId` ל-`searchDocuments`.
2. ב-`ragController.ts` — לקחת את ה-`companyId`.

**הנקודה החשובה ביותר:** הסינון קורה ב-`WHERE company_id = ...`, כלומר ב-SQL,
לפני שהמידע מגיע ל-Gemini. אסור לבקש מה-LLM "אל תשתמש במסמכים של חברה אחרת" —
זו לא אבטחה, זו בקשה.

---

## Bonus 3 — JWT

**קובץ:** `3-jwt/authMiddleware.ts` → לשמור בתור `server/src/middleware/authMiddleware.ts`

```bash
npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```

ב-`.env`:

```
JWT_SECRET=some_long_random_secret
```

ב-`ragRoutes.ts`:

```ts
router.post('/ask', authMiddleware, ask)
```

וב-`ragController.ts`, במקום לקבל `companyId` מה-Body:

```ts
const companyId = req.user!.company_id
```

**זה הצירוף של בונוס 2 ו-3:** ה-`company_id` מגיע מה-Token החתום ולא מהלקוח.
אם הוא מגיע מה-Body, כל אחד יכול לשלוח `company_id: 2` ולקרוא את המסמכים של חברה אחרת.
