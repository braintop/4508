-- ============================================================
--  seed.sql - נתוני דמו
--  להריץ אחרי schema.sql
-- ============================================================

-- ---------- סניפים ----------
INSERT INTO branches (branch_name) VALUES
    ('Tel Aviv'),
    ('Haifa'),
    ('Jerusalem'),
    ('Beer Sheva');

-- ---------- שיעורים ----------
-- חלק מהשיעורים בעבר (יוצגו באפור) וחלק בעתיד (יוצגו בכחול)
INSERT INTO studio_classes
    (branch_code, class_name, start_time, end_time, instructor_name, max_participants)
VALUES
    -- Tel Aviv
    (1, 'Yoga',      NOW() + INTERVAL '1 day'  + INTERVAL '8 hour',  NOW() + INTERVAL '1 day'  + INTERVAL '9 hour',  'Dana Levi',     20),
    (1, 'Spinning',  NOW() + INTERVAL '2 day'  + INTERVAL '18 hour', NOW() + INTERVAL '2 day'  + INTERVAL '19 hour', 'Omer Cohen',    25),
    (1, 'Pilates',   NOW() - INTERVAL '3 day',                       NOW() - INTERVAL '3 day'  + INTERVAL '50 min',  'Noa Bar',       15),

    -- Haifa
    (2, 'Zumba',     NOW() + INTERVAL '3 day'  + INTERVAL '19 hour', NOW() + INTERVAL '3 day'  + INTERVAL '20 hour', 'Maya Shaul',    30),
    (2, 'Yoga',      NOW() - INTERVAL '1 day',                       NOW() - INTERVAL '1 day'  + INTERVAL '1 hour',  'Dana Levi',     18),

    -- Jerusalem
    (3, 'CrossFit',  NOW() + INTERVAL '5 hour',                      NOW() + INTERVAL '6 hour',                      'Yossi Amar',    12),
    (3, 'Pilates',   NOW() + INTERVAL '4 day'  + INTERVAL '7 hour',  NOW() + INTERVAL '4 day'  + INTERVAL '8 hour',  'Shira Peleg',   16),
    (3, 'Spinning',  NOW() - INTERVAL '10 day',                      NOW() - INTERVAL '10 day' + INTERVAL '45 min',  'Omer Cohen',    22),

    -- Beer Sheva
    (4, 'Body Pump', NOW() + INTERVAL '6 day'  + INTERVAL '17 hour', NOW() + INTERVAL '6 day'  + INTERVAL '18 hour', 'Eitan Raz',     24);
