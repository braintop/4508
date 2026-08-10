import { Router } from 'express';
import { seedDatabase } from '../conrollers/tempController';

const router = Router();

router.get('/seed', seedDatabase);

export default router;