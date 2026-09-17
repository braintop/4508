import { Request, Response } from 'express';
import { pool } from '../db';

// בודק שהנתונים של השיעור תקינים.
// מחזיר הודעת שגיאה, או null אם הכל בסדר.
function checkClass(body: any, allowPast: boolean) {
  const { branch_code, class_name, start_time, end_time, instructor_name, max_participants } = body;

  // כל השדות הם שדות חובה
  if (!branch_code || !class_name || !start_time || !end_time || !instructor_name) {
    return 'כל השדות הם שדות חובה';
  }

  // מספר המשתתפים המקסימלי חייב להיות גדול מ-0
  if (!max_participants || Number(max_participants) <= 0) {
    return 'מספר המשתתפים המקסימלי חייב להיות גדול מ-0';
  }

  // אין לאפשר זמן התחלה המאוחר מזמן הסיום
  if (start_time >= end_time) {
    return 'זמן ההתחלה חייב להיות לפני זמן הסיום';
  }

  // אין לאפשר הוספת שיעור שזמן ההתחלה שלו בעבר (בעדכון כן מותר)
  if (!allowPast && new Date(start_time) < new Date()) {
    return 'לא ניתן להוסיף שיעור שזמן ההתחלה שלו בעבר';
  }

  return null;
}

// GET /api/classes/:classCode
// מחזיר את הפרטים של שיעור אחד
export async function getClassByCode(req: Request, res: Response) {
  try {
    const classCode = req.params.classCode;

    const result = await pool.query(
      `SELECT class_code, branch_code, class_name, start_time, end_time,
              instructor_name, max_participants,
              ROUND(EXTRACT(EPOCH FROM (end_time - start_time)) / 60)::int AS duration_minutes
       FROM studio_classes
       WHERE class_code = $1`,
      [classCode]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'השיעור לא נמצא' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'שגיאה בשליפת השיעור' });
  }
}

// POST /api/classes
// מוסיף שיעור חדש
export async function addClass(req: Request, res: Response) {
  try {
    const { branch_code, class_name, start_time, end_time, instructor_name, max_participants } =
      req.body;

    const errorMessage = checkClass(req.body, false);
    if (errorMessage) {
      return res.status(400).json({ error: errorMessage });
    }

    const result = await pool.query(
      `INSERT INTO studio_classes
         (branch_code, class_name, start_time, end_time, instructor_name, max_participants)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [branch_code, class_name, start_time, end_time, instructor_name, max_participants]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'שגיאה בהוספת השיעור' });
  }
}

// PUT /api/classes/:classCode
// מעדכן שיעור קיים (מותר לעדכן גם שיעור שכבר התקיים)
export async function updateClass(req: Request, res: Response) {
  try {
    const classCode = req.params.classCode;
    const { branch_code, class_name, start_time, end_time, instructor_name, max_participants } =
      req.body;

    const errorMessage = checkClass(req.body, true);
    if (errorMessage) {
      return res.status(400).json({ error: errorMessage });
    }

    const result = await pool.query(
      `UPDATE studio_classes
       SET branch_code = $1,
           class_name = $2,
           start_time = $3,
           end_time = $4,
           instructor_name = $5,
           max_participants = $6
       WHERE class_code = $7
       RETURNING *`,
      [branch_code, class_name, start_time, end_time, instructor_name, max_participants, classCode]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'השיעור לא נמצא' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'שגיאה בעדכון השיעור' });
  }
}

// DELETE /api/classes/:classCode
// מוחק שיעור קיים
export async function deleteClass(req: Request, res: Response) {
  try {
    const classCode = req.params.classCode;

    const result = await pool.query('DELETE FROM studio_classes WHERE class_code = $1 RETURNING *', [
      classCode,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'השיעור לא נמצא' });
    }

    res.json({ message: 'השיעור נמחק בהצלחה' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'שגיאה במחיקת השיעור' });
  }
}
