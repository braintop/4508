# Client — צד לקוח

React + TypeScript + Vite

## הרצה

```bash
cd client
npm install
npm run dev
```

הדפדפן נפתח בכתובת `http://localhost:5173`.
**חשוב:** השרת חייב לרוץ במקביל על `http://localhost:3000`.

הכתובת של השרת נמצאת בשורה הראשונה של הקובץ `src/api.ts`:

```ts
const API_URL = 'http://localhost:3000/api';
```

## מבנה הקבצים

```
client/src/
├── main.tsx                     הקובץ הראשי
├── App.tsx                      רשימת הדפים (Routes)
├── api.ts                       כל הפניות לשרת (fetch)
├── types.ts                     הטיפוסים Branch ו-StudioClass
├── styles.css                   כל העיצוב
├── components/Navbar.tsx        תפריט הניווט
└── pages/
    ├── Home.tsx                 דף הבית
    ├── About.tsx                דף אודות
    ├── Classes.tsx              רשימת השיעורים לפי סניף
    ├── AddClass.tsx             טופס הוספת שיעור
    └── EditClass.tsx            טופס עדכון שיעור
```

## הדפים

| כתובת | דף |
|--------|-----|
| `/` | בית — פסקה ותמונה |
| `/about` | אודות — תיאור המערכת והמתכנת/ת |
| `/classes` | שיעורי סטודיו — Select של סניפים, כרטיסיות שיעורים, מחיקה |
| `/classes/new` | הוספת שיעור |
| `/classes/:classCode/edit` | עדכון שיעור |

## צבע לפי זמן השיעור

בקובץ `Classes.tsx` יש פונקציה קטנה בשם `isPast`:

```ts
function isPast(value: string) {
  return new Date(value.replace(' ', 'T')) < new Date();
}
```

לפיה כל כרטיס מקבל class:

- `class-card--future` → **כחול** (השיעור עוד לא התחיל)
- `class-card--past` → **אפור** (השיעור כבר התקיים)

הצבעים עצמם מוגדרים ב-`styles.css` במשתנים `--future` ו-`--past`.

## הבדיקות בטפסים

בכל אחד מהטפסים יש פונקציה בשם `checkForm` שמחזירה הודעת שגיאה,
או מחרוזת ריקה אם הכל תקין:

| בדיקה | הוספה | עדכון |
|--------|-------|--------|
| כל השדות מלאים | כן | כן |
| מספר משתתפים גדול מ-0 | כן | כן |
| זמן התחלה לפני זמן סיום | כן | כן |
| זמן ההתחלה לא בעבר | כן | לא (מותר לעדכן שיעור שהתקיים) |

גם השרת בודק את אותם דברים, ואם הוא מחזיר שגיאה היא מוצגת באותה תיבה אדומה.
