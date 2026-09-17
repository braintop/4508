# Database — Neon PostgreSQL

## הקמת מסד הנתונים ב-Neon (3 דקות)

1. נכנסים ל-https://console.neon.tech ויוצרים פרויקט חדש (Free tier).
2. בתפריט הצדדי בוחרים **SQL Editor**.
3. מדביקים את התוכן של `schema.sql` ולוחצים **Run** — נוצרות הטבלאות.
4. מדביקים את התוכן של `seed.sql` ולוחצים **Run** — נטענים נתוני דמו.
5. בתפריט בוחרים **Connection Details** → מעתיקים את ה-**Connection string**
   (נראה כך: `postgresql://user:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`)
6. מדביקים אותו בקובץ `server/.env` בשדה `DATABASE_URL`.

## הקבצים בתיקייה

| קובץ | תיאור |
|------|--------|
| `schema.sql`  | יצירת הטבלאות `branches` ו-`studio_classes` עם מפתחות וקונסטריינטים |
| `seed.sql`    | נתוני דמו — 4 סניפים ו-9 שיעורים (חלקם בעבר, חלקם בעתיד) |
| `queries.sql` | כל השאילתות שבהן משתמש השרת, ממוספרות לפי ה-Route |
| `export.sql`  | Export מלא של מסד הנתונים (schema + data) — להגשה |

## מבנה הטבלאות

### branches
| עמודה | סוג | הערות |
|--------|-----|--------|
| branch_code | SERIAL | מפתח ראשי |
| branch_name | VARCHAR(100) | NOT NULL, UNIQUE |

### studio_classes
| עמודה | סוג | הערות |
|--------|-----|--------|
| class_code | SERIAL | מפתח ראשי |
| branch_code | INTEGER | מפתח זר → branches.branch_code, ON DELETE CASCADE |
| class_name | VARCHAR(100) | NOT NULL |
| start_time | TIMESTAMP | NOT NULL |
| end_time | TIMESTAMP | NOT NULL |
| instructor_name | VARCHAR(100) | NOT NULL |
| max_participants | INTEGER | NOT NULL, CHECK > 0 |

קונסטריינטים נוספים: `end_time > start_time`.
