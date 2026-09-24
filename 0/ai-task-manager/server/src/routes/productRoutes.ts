import { Router } from 'express'

import { createProduct, getAllProducts, getProductById } from '../controllers/productController'

const router = Router()

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProductById)

export default router