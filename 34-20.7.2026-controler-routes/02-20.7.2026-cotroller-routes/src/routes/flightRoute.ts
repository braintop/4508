import { Router } from 'express';
import { createFlight, getFlights, deleteFlight, updateFlight } from '../controllers/flightController';

const router = Router();

router.post('/', createFlight);
router.get('/', getFlights);
router.delete('/:id', deleteFlight);
router.put('/:id', updateFlight);

export default router;