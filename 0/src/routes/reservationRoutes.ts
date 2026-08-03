import { Router } from 'express';
import { createReservation,getReservationById,getReservations } from '../conrollers/reservationController';

const router = Router();

router.post('/', createReservation);
router.get('/', getReservations);
router.get('/:id', getReservationById);
export default router;