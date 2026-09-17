# Server — צד שרת

Node.js + Express + TypeScript + PostgreSQL (Neon)

## הרצה

```bash
cd server
npm install
npm run dev
```

לפני ההרצה — לפתוח את הקובץ `.env` ולהדביק את הכתובת של מסד הנתונים מ-Neon:

```
DATABASE_URL=postgresql://USER:PASSWORD@ep-xxxxx.neon.tech/neondb?sslmode=require
PORT=3000
```

את הכתובת מעתיקים מ-Neon: **Connection Details → Connection string**.

השרת עולה על `http://localhost:3000`.

## מבנה הקבצים

```
server/src/
├── index.ts                          הקובץ הראשי — מפעיל את השרת
├── db.ts                             החיבור למסד הנתונים ב-Neon
├── routes/
│   ├── branches.routes.ts            הכתובות של הסניפים
│   └── classes.routes.ts             הכתובות של השיעורים
└── controllers/
    ├── branches.controller.ts        הפונקציות של הסניפים
    └── classes.controller.ts         הפונקציות של השיעורים
```

**Route** = הכתובת. **Controller** = הפונקציה שרצה כשמגיעים לכתובת הזו.
כל שאילתת SQL כתובה בתוך הפונקציה שמשתמשת בה.

## Routes

| Method | Route | תיאור |
|--------|-------|--------|
| GET | `/api/branches` | כל סניפי חדר הכושר |
| GET | `/api/branches/:branchCode/classes` | כל השיעורים של סניף |
| GET | `/api/classes/:classCode` | פרטי שיעור אחד |
| POST | `/api/classes` | הוספת שיעור חדש |
| PUT | `/api/classes/:classCode` | עדכון שיעור קיים |
| DELETE | `/api/classes/:classCode` | מחיקת שיעור |

### גוף הבקשה ב-POST ו-PUT

```json
{
  "branch_code": 1,
  "class_name": "Yoga",
  "start_time": "2027-01-15T08:00",
  "end_time": "2027-01-15T09:00",
  "instructor_name": "Dana Levi",
  "max_participants": 20
}
```

## בדיקות

הפונקציה `checkClass` בקובץ `controllers/classes.controller.ts` בודקת:

| בדיקה | הוספה | עדכון |
|--------|-------|--------|
| כל השדות מלאים | כן | כן |
| מספר משתתפים גדול מ-0 | כן | כן |
| זמן התחלה לפני זמן סיום | כן | כן |
| זמן ההתחלה לא בעבר | כן | לא (מותר לעדכן שיעור שהתקיים) |

אם יש בעיה — השרת מחזיר `400` עם הודעה בעברית.

## Postman

בתיקייה `postman/` יש Collection מוכן לייבוא, עם כל ששת ה-Routes ובדיקות שגיאה.
