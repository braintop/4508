import { Router } from 'express'
import { getCities, getCityById, addCity, updateCity, deleteCity } from '../controllers/cityController'
import { authMiddleware, isAdmin } from '../middleware/authMiddleware'
const router = Router()
router.get('/', authMiddleware, isAdmin, getCities)
router.get('/:id', getCityById)
router.post('/', addCity)
router.put('/:id', updateCity)
router.delete('/:id', deleteCity)
export default router

// add login and register 
// add midddle ware auth to get cities and add city