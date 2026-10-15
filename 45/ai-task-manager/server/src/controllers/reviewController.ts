import { Request, Response } from 'express'

import { sql } from '../db'

import {
    analyzeReview
} from '../services/reviewAIService'


// ADD REVIEW
export async function addReview(
    req: Request,
    res: Response
) {
    try {

        const {
            product_id,
            review_text
        } = req.body


        if (!product_id || !review_text) {

            return res.status(400).json({
                error:
                    'product_id and review_text are required'
            })
        }


        // Send the review to Gemini

        const analysis =
            await analyzeReview(review_text)


        // Save everything in PostgreSQL

        const review = await sql`

            INSERT INTO reviews
            (
                product_id,
                review_text,
                sentiment,
                rating,
                summary
            )

            VALUES
            (
                ${product_id},
                ${review_text},
                ${analysis.sentiment},
                ${analysis.rating},
                ${analysis.summary}
            )

            RETURNING *

        `


        res.status(201).json(review)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Failed to create review'
        })
    }
}


// GET ALL REVIEWS
export async function getAllReviews(
    req: Request,
    res: Response
) {
    try {

        const reviews = await sql`

            SELECT
                reviews.*,
                products.product_name

            FROM reviews

            JOIN products
            ON reviews.product_id =
               products.product_id

            ORDER BY review_id

        `

        res.json(reviews)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Failed to get reviews'
        })
    }
}


// GET REVIEWS BY PRODUCT
export async function getReviewsByProduct(
    req: Request,
    res: Response
) {
    try {

        const { productId } = req.params

        const reviews = await sql`

            SELECT
                reviews.*,
                products.product_name

            FROM reviews

            JOIN products
            ON reviews.product_id =
               products.product_id

            WHERE reviews.product_id =
                  ${productId}

            ORDER BY review_id

        `

        res.json(reviews)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error:
                'Failed to get product reviews'
        })
    }
}