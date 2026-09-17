import { Router } from 'express';
import {
  getClassByCode,
  addClass,
  updateClass,
  deleteClass,
} from '../controllers/classes.controller';

const router = Router();

// GET    /api/classes/:classCode  -> שיעור אחד
router.get('/:classCode', getClassByCode);

// POST   /api/classes             -> הוספת שיעור
router.post('/', addClass);

// PUT    /api/classes/:classCode  -> עדכון שיעור
router.put('/:classCode', updateClass);

// DELETE /api/classes/:classCode  -> מחיקת שיעור
router.delete('/:classCode', deleteClass);

export default router;
