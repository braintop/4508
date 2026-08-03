import { Router } from 'express';
import { createCustomer } from '../conrollers/customerController';

const router = Router();

router.post('/', createCustomer);

export default router;