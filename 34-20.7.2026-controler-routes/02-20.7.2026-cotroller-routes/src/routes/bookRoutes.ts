import { Router } from 'express';
import { createBook, getBooks, deleteBook, getBookById, updateBook ,getBooksByCategory} from '../controllers/bookController';

const router = Router();

router.post('/', createBook);
router.get('/', getBooks);
router.delete('/:id', deleteBook);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.get('/category/:category', getBooksByCategory);
export default router;


