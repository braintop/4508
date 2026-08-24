import { Router } from 'express'
import { getCourses, getCourseById, addCourse, updateCourse, deleteCourse } from '../controllers/courseController'
const router = Router()
router.get('/', getCourses)
router.get('/:id', getCourseById)
router.post('/', addCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)
export default router