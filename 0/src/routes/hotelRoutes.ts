import { Router } from 'express';
import { addRoomToHotel, createHotel, getHotels, updateRoom } from '../conrollers/hotelController';

const router = Router();

router.post('/', createHotel);
router.get('/', getHotels);
router.post('/:hotelId/rooms', addRoomToHotel);
router.put('/:hotelId/rooms/:roomId', updateRoom);
export default router;