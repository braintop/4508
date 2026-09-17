-- ============================================================
--  queries.sql
--  כל השאילתות שבהן משתמש השרת, מרוכזות במקום אחד.
--  $1, $2 ... הם הפרמטרים שמועברים מ-node (pg parameterized queries)
--  ניתן להריץ כל שאילתה ידנית ב-Neon SQL Editor (עם ערכים במקום $1)
-- ============================================================


-- ============================================================
--  BRANCHES  (סניפים)
-- ============================================================

-- [Q1] GET /api/branches
--      החזרת כל סניפי חדר הכושר
SELECT branch_code, branch_name
FROM branches
ORDER BY branch_name;


-- [Q2] בדיקת קיום סניף (משמש לפני הוספה/עדכון שיעור)
SELECT branch_code
FROM branches
WHERE branch_code = $1;


-- ============================================================
--  STUDIO CLASSES  (שיעורי סטודיו)
-- ============================================================

-- [Q3] GET /api/branches/:branchCode/classes
--      החזרת כל שיעורי הסטודיו של סניף ספציפי לפי קוד סניף
SELECT c.class_code,
       c.branch_code,
       b.branch_name,
       c.class_name,
       c.start_time,
       c.end_time,
       c.instructor_name,
       c.max_participants,
       ROUND(EXTRACT(EPOCH FROM (c.end_time - c.start_time)) / 60)::int AS duration_minutes
FROM studio_classes c
JOIN branches b ON b.branch_code = c.branch_code
WHERE c.branch_code = $1
ORDER BY c.start_time;


-- [Q4] GET /api/classes/:classCode
--      החזרת פרטי שיעור אחד לפי קוד שיעור
SELECT c.class_code,
       c.branch_code,
       b.branch_name,
       c.class_name,
       c.start_time,
       c.end_time,
       c.instructor_name,
       c.max_participants,
       ROUND(EXTRACT(EPOCH FROM (c.end_time - c.start_time)) / 60)::int AS duration_minutes
FROM studio_classes c
JOIN branches b ON b.branch_code = c.branch_code
WHERE c.class_code = $1;


-- [Q5] POST /api/classes
--      הוספת שיעור חדש
INSERT INTO studio_classes
    (branch_code, class_name, start_time, end_time, instructor_name, max_participants)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING class_code,
          branch_code,
          class_name,
          start_time,
          end_time,
          instructor_name,
          max_participants,
          ROUND(EXTRACT(EPOCH FROM (end_time - start_time)) / 60)::int AS duration_minutes;


-- [Q6] PUT /api/classes/:classCode
--      עדכון שיעור קיים
UPDATE studio_classes
SET branch_code      = $1,
    class_name       = $2,
    start_time       = $3,
    end_time         = $4,
    instructor_name  = $5,
    max_participants = $6
WHERE class_code = $7
RETURNING class_code,
          branch_code,
          class_name,
          start_time,
          end_time,
          instructor_name,
          max_participants,
          ROUND(EXTRACT(EPOCH FROM (end_time - start_time)) / 60)::int AS duration_minutes;


-- [Q7] DELETE /api/classes/:classCode
--      מחיקת שיעור קיים
DELETE FROM studio_classes
WHERE class_code = $1
RETURNING class_code;


-- ============================================================
--  שאילתות עזר לבדיקה ידנית (לא בשימוש השרת)
-- ============================================================

-- כל השיעורים בכל הסניפים
SELECT b.branch_name, c.*
FROM studio_classes c
JOIN branches b ON b.branch_code = c.branch_code
ORDER BY b.branch_name, c.start_time;

-- שיעורים עתידיים בלבד
SELECT * FROM studio_classes WHERE start_time > NOW() ORDER BY start_time;

-- ספירת שיעורים לפי סניף
SELECT b.branch_name, COUNT(c.class_code) AS classes_count
FROM branches b
LEFT JOIN studio_classes c ON c.branch_code = b.branch_code
GROUP BY b.branch_name
ORDER BY classes_count DESC;
