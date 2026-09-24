-- ============================================================
--  Gym Studio Classes  |  PostgreSQL (Neon)
--  schema.sql - יצירת מסד הנתונים
--  להרצה: Neon Console -> SQL Editor -> Paste -> Run
-- ============================================================

-- מוחק את הטבלאות אם הן כבר קיימות (סדר הפוך בגלל מפתח זר)
DROP TABLE IF EXISTS studio_classes;
DROP TABLE IF EXISTS branches;

-- ------------------------------------------------------------
-- א. טבלת סניפי חדר הכושר
-- ------------------------------------------------------------
CREATE TABLE branches (
    branch_code  SERIAL       PRIMARY KEY,          -- קוד סניף (מפתח ראשי)
    branch_name  VARCHAR(100) NOT NULL UNIQUE       -- שם הסניף
);

-- ------------------------------------------------------------
-- ב. טבלת שיעורי הסטודיו
-- ------------------------------------------------------------
CREATE TABLE studio_classes (
    class_code        SERIAL       PRIMARY KEY,     -- קוד שיעור (מפתח ראשי)
    branch_code       INTEGER      NOT NULL,        -- קוד סניף (מפתח זר)
    class_name        VARCHAR(100) NOT NULL,        -- שם השיעור
    start_time        TIMESTAMP    NOT NULL,        -- תאריך ושעת התחלה
    end_time          TIMESTAMP    NOT NULL,        -- תאריך ושעת סיום
    instructor_name   VARCHAR(100) NOT NULL,        -- שם המדריך
    max_participants  INTEGER      NOT NULL,        -- מספר משתתפים מקסימלי

    CONSTRAINT fk_class_branch
        FOREIGN KEY (branch_code)
        REFERENCES branches (branch_code)
        ON DELETE CASCADE,

    CONSTRAINT chk_max_participants CHECK (max_participants > 0),
    CONSTRAINT chk_time_order       CHECK (end_time > start_time)
);

-- אינדקס לשליפה מהירה של כל השיעורים של סניף
CREATE INDEX idx_studio_classes_branch ON studio_classes (branch_code);
CREATE INDEX idx_studio_classes_start  ON studio_classes (start_time);
