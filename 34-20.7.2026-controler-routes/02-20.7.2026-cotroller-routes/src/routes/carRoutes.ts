import { Router } from 'express';
import { createCar, getCars, deleteCar, updateCar } from '../controllers/carController';

const router = Router();

router.post('/', createCar);
router.get('/', getCars);
router.delete('/:id', deleteCar);
router.put('/:id', updateCar);

export default router;