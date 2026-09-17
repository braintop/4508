import { Router } from 'express';
import { getAllBranches, getClassesByBranch } from '../controllers/branches.controller';

const router = Router();

// GET /api/branches                      -> כל הסניפים
router.get('/', getAllBranches);

// GET /api/branches/:branchCode/classes  -> כל השיעורים של סניף
router.get('/:branchCode/classes', getClassesByBranch);

export default router;
