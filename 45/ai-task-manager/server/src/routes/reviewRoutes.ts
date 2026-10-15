import express from 'express'

import {
    addReview,
    getAllReviews,
    getReviewsByProduct
} from '../controllers/reviewController'

const router = express.Router()


router.post('/', addReview)

router.get('/', getAllReviews)

router.get(
    '/product/:productId',
    getReviewsByProduct
)


export default router