# FitStudio — מערכת ניהול שיעורי סטודיו

משימה שלישית · TypeScript | Node.js | React | PostgreSQL (Neon)

אתר לניהול שיעורי הסטודיו ברשת חדרי כושר: צפייה בשיעורים לפי סניף, הוספה, עדכון ומחיקה.

```
gym-studio/
├── Database/     סכמה, נתוני דמו, כל השאילתות ו-Export להגשה
├── server/       צד שרת — Node.js + Express + TypeScript  (= "Backend")
└── client/       צד לקוח — React + TypeScript + Vite       (= "Frontend")
```

---

## הפעלה מהירה (3 שלבים)

### 1. מסד הנתונים — Neon

1. יוצרים פרויקט חדש ב-[console.neon.tech](https://console.neon.tech) (חינמי).
2. **SQL Editor** → מדביקים את `Database/schema.sql` → Run.
3. **SQL Editor** → מדביקים את `Database/seed.sql` → Run (נתוני דמו).
4. **Connection Details** → מעתיקים את ה-Connection string.

פירוט מלא: `Database/README.md`

### 2. השרת

```bash
cd server
npm install
cp .env.example .env
# עורכים את .env ומדביקים את ה-Connection string ב-DATABASE_URL
npm run dev
```

→ `http://localhost:3000`

### 3. הלקוח

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

→ `http://localhost:5173`

---

## מה מיושם

### מסד הנתונים

- `branches` — קוד סניף (PK), שם סניף
- `studio_classes` — קוד שיעור (PK), קוד סניף (FK), שם שיעור, זמן התחלה, זמן סיום, שם מדריך, מספר משתתפים מקסימלי
- מפתח זר עם `ON DELETE CASCADE`, אינדקסים, ו-CHECK constraints (`max_participants > 0`, `end_time > start_time`)

### השרת — 6 Routes

| # | Method | Route | תיאור |
|---|--------|-------|--------|
| 1 | GET | `/api/branches` | כל סניפי חדר הכושר |
| 2 | GET | `/api/branches/:branchCode/classes` | כל שיעורי הסטודיו של סניף |
| 3 | GET | `/api/classes/:classCode` | פרטי שיעור אחד |
| 4 | POST | `/api/classes` | הוספת שיעור חדש |
| 5 | PUT | `/api/classes/:classCode` | עדכון שיעור קיים |
| 6 | DELETE | `/api/classes/:classCode` | מחיקת שיעור |

מבנה: `index.ts` מפעיל את השרת, `db.ts` מתחבר ל-Neon, `routes/` מגדיר את הכתובות
ו-`controllers/` מכיל את הפונקציות עם שאילתות ה-SQL.

### הלקוח — 5 דפים

- **בית** — פסקה ותמונה הקשורות למערכת
- **אודות** — תיאור המערכת, הארכיטקטורה והמתכנת/ת
- **שיעורי סטודיו** — Select של סניפים; בבחירת סניף מוצגים שיעוריו בלבד, בכרטיסיות, עם משך השיעור בדקות, סימון **כחול** לשיעור עתידי ו**אפור** לשיעור שהתקיים, וכפתור מחיקה
- **הוספת שיעור** — טופס עם כל הוולידציות
- **עדכון שיעור** — טופס עם כל הוולידציות (מותר לעדכן שיעור שכבר התקיים)

### ולידציה

| כלל | הוספה | עדכון |
|------|-------|--------|
| כל השדות חובה | ✅ | ✅ |
| אסור זמן התחלה בעבר | ✅ | ❌ (מותר) |
| זמן התחלה לפני זמן סיום | ✅ | ✅ |
| משתתפים מקסימלי > 0 | ✅ | ✅ |

הוולידציה מתבצעת **פעמיים** — בלקוח (חוויית משתמש) ובשרת (אמינות), ובנוסף נאכפת ברמת המסד.

---

## Postman

`server/postman/GymStudio.postman_collection.json` — כל ששת ה-Routes + תיקיית "בדיקות ולידציה"
עם מקרי קצה (התחלה בעבר, סדר זמנים שגוי, 0 משתתפים, שדות חסרים, 404).
המשתנה `baseUrl` מוגדר ל-`http://localhost:3000/api`.

---

## הגשה

התיקיות `server` ו-`client` הן צד השרת וצד הלקוח בהתאמה (בטופס ההגשה: Backend ו-Frontend).
תיקיות `node_modules` אינן כלולות ב-ZIP — יש להריץ `npm install` בכל אחת מהן.
ה-Export של מסד הנתונים נמצא ב-`Database/export.sql`.
