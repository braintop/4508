import { Router } from 'express';
import { createUser, getUsers, deleteUser, getUserById, updateUser } from '../controllers/userControllrt';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);

export default router;