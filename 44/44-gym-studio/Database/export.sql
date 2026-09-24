-- ============================================================
--  export.sql
--  Export מלא של מסד הנתונים (Schema + Data) — קובץ ההגשה
--  PostgreSQL / Neon
--  הרצה: להדביק ב-Neon SQL Editor וללחוץ Run
-- ============================================================

DROP TABLE IF EXISTS studio_classes;
DROP TABLE IF EXISTS branches;

CREATE TABLE branches (
    branch_code  SERIAL       PRIMARY KEY,
    branch_name  VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE studio_classes (
    class_code        SERIAL       PRIMARY KEY,
    branch_code       INTEGER      NOT NULL,
    class_name        VARCHAR(100) NOT NULL,
    start_time        TIMESTAMP    NOT NULL,
    end_time          TIMESTAMP    NOT NULL,
    instructor_name   VARCHAR(100) NOT NULL,
    max_participants  INTEGER      NOT NULL,
    CONSTRAINT fk_class_branch FOREIGN KEY (branch_code)
        REFERENCES branches (branch_code) ON DELETE CASCADE,
    CONSTRAINT chk_max_participants CHECK (max_participants > 0),
    CONSTRAINT chk_time_order       CHECK (end_time > start_time)
);

CREATE INDEX idx_studio_classes_branch ON studio_classes (branch_code);
CREATE INDEX idx_studio_classes_start  ON studio_classes (start_time);

-- ------------------------------------------------------------
--  DATA: branches
-- ------------------------------------------------------------
INSERT INTO branches (branch_code, branch_name) VALUES
    (1, 'Tel Aviv'),
    (2, 'Haifa'),
    (3, 'Jerusalem'),
    (4, 'Beer Sheva');

SELECT setval('branches_branch_code_seq', (SELECT MAX(branch_code) FROM branches));

-- ------------------------------------------------------------
--  DATA: studio_classes
-- ------------------------------------------------------------
INSERT INTO studio_classes
    (class_code, branch_code, class_name, start_time, end_time, instructor_name, max_participants)
VALUES
    (1, 1, 'Yoga',      '2026-12-01 08:00:00', '2026-12-01 09:00:00', 'Dana Levi',   20),
    (2, 1, 'Spinning',  '2026-12-02 18:00:00', '2026-12-02 19:00:00', 'Omer Cohen',  25),
    (3, 1, 'Pilates',   '2026-09-01 07:30:00', '2026-09-01 08:20:00', 'Noa Bar',     15),
    (4, 2, 'Zumba',     '2026-12-03 19:00:00', '2026-12-03 20:00:00', 'Maya Shaul',  30),
    (5, 2, 'Yoga',      '2026-09-05 09:00:00', '2026-09-05 10:00:00', 'Dana Levi',   18),
    (6, 3, 'CrossFit',  '2026-12-04 06:00:00', '2026-12-04 07:00:00', 'Yossi Amar',  12),
    (7, 3, 'Pilates',   '2026-12-05 07:00:00', '2026-12-05 08:00:00', 'Shira Peleg', 16),
    (8, 3, 'Spinning',  '2026-08-20 20:00:00', '2026-08-20 20:45:00', 'Omer Cohen',  22),
    (9, 4, 'Body Pump', '2026-12-06 17:00:00', '2026-12-06 18:00:00', 'Eitan Raz',   24);

SELECT setval('studio_classes_class_code_seq', (SELECT MAX(class_code) FROM studio_classes));
