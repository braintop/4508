import { Request, Response } from 'express';
import { pool } from '../db';

// GET /api/branches
// מחזיר את כל סניפי חדר הכושר
export async function getAllBranches(req: Request, res: Response) {
  try {
    const result = await pool.query(
      'SELECT branch_code, branch_name FROM branches ORDER BY branch_name'
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'שגיאה בשליפת הסניפים' });
  }
}

// GET /api/branches/:branchCode/classes
// מחזיר את כל שיעורי הסטודיו של סניף מסוים
export async function getClassesByBranch(req: Request, res: Response) {
  try {
    const branchCode = req.params.branchCode;

    const result = await pool.query(
      `SELECT class_code, branch_code, class_name, start_time, end_time,
              instructor_name, max_participants,
              ROUND(EXTRACT(EPOCH FROM (end_time - start_time)) / 60)::int AS duration_minutes
       FROM studio_classes
       WHERE branch_code = $1
       ORDER BY start_time`,
      [branchCode]
    );

    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'שגיאה בשליפת השיעורים' });
  }
}
