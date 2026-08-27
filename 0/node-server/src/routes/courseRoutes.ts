import { Router } from 'express'
import { getCourses, getCourseById, addCourse, updateCourse, deleteCourse } from '../controllers/courseController'
import { authMiddleware } from '../middleware/authMiddleware'
const router = Router() 
router.get('/',authMiddleware, getCourses)
router.get('/:id', getCourseById)
router.post('/',authMiddleware, addCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)
export default router