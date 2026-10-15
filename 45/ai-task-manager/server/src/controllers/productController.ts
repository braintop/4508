import { Response, Request } from 'express'

import { sql } from '../db'

export async function createProduct(
  req: Request,
  res: Response
) {
  const { product_name, product_price } = req.body 

    if (!product_name || !product_price) {
      return res.status(400).json({ error: 'Product name and price are required' })
    }

    try {
      const product = await sql`
        INSERT INTO products (product_name, product_price)
        VALUES (${product_name}, ${product_price})
        RETURNING *
      `
    

     res.status(201).json(product)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create product' })
  }
}

export async function getAllProducts(
  req: Request,
  res: Response
) {
  try {
    const products = await sql`
      SELECT * FROM products
    `

    return res.json(products)

  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to get products' })
  }
}

export async function getProductById(
  req: Request,
  res: Response
) {
  const { id } = req.params

  try {
    const product = await sql`
      SELECT * FROM products WHERE id = ${id}
    `
    return res.json(product)

  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to get product' })
  }
}
