import { Router } from 'express';
import { registerUser, getUsers, deleteUser, getUserById, updateUser } from '../conrollers/userControllrt';
import { loginUser } from '../conrollers/userControllrt';
import { hashPassword } from '../middlewares/userlib';
import { isAdmin } from '../middlewares/userlib';
import { checkToken } from '../middlewares/authMiddleware';
const router = Router();

router.post('/register', hashPassword, registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
router.get('/:id', getUserById);
router.put('/:id',isAdmin, updateUser);

export default router;