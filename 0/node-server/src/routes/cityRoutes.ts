import { Router } from 'express'
import { getCities, getCityById, addCity, updateCity, deleteCity } from '../controllers/cityController'
const router = Router()
router.get('/', getCities)
router.get('/:id', getCityById)
router.post('/', addCity)
router.put('/:id', updateCity)
router.delete('/:id', deleteCity)
export default router