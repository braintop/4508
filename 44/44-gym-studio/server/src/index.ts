import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db';
import branchesRoutes from './routes/branches.routes';
import classesRoutes from './routes/classes.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// חיבור ה-Routes
app.use('/api/branches', branchesRoutes);
app.use('/api/classes', classesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`השרת רץ על http://localhost:${PORT}`);

  // בדיקה שהחיבור למסד הנתונים עובד ושהטבלאות קיימות
  try {
    await pool.query('SELECT 1 FROM branches LIMIT 1');
    console.log('החיבור למסד הנתונים תקין');
  } catch (error) {
    console.log('');
    console.log('!!! בעיה במסד הנתונים !!!');
    console.log('1. בדקו את DATABASE_URL בקובץ .env  (Neon -> Connection Details)');
    console.log('2. ודאו שהרצתם ב-Neon את Database/schema.sql ואחריו Database/seed.sql');
    console.log('');
    console.log(error);
  }
});
