import { Router } from 'express';
import { isAdmin } from '../middlewares/userlib';
import { checkToken } from '../middlewares/authMiddleware';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrdersAbovePrice,
  updateOrderStatus,
} from '../conrollers/orederController';

import { validateOrder } from '../middlewares/validateOrder';

const router = Router();

router.post('/',isAdmin, validateOrder, createOrder);

router.get('/',checkToken, getOrders);

router.get('/price/:price', getOrdersAbovePrice);

router.patch('/:id/status', updateOrderStatus);

router.get('/:id', getOrderById);

router.put('/:id', validateOrder, updateOrder);


export default router;