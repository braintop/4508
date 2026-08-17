import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { neon } from '@neondatabase/serverless'

type City = {
  city_id: number,
  city_name: string
}
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set')
}
const sql = neon(databaseUrl)
const app = express()
app.use(express.json())
app.get('/', (_req, res) => {
  res.send('Hello Node')
})


app.get('/cities', async (_req, res) => {
  try {
    const cities = await sql`SELECT * FROM cities`
    res.json(cities)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get cities' })
  }
})


app.get('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params
    const city = await sql`SELECT * FROM cities WHERE city_id = ${id}`
    res.json(city)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get city' })
  }
})


app.post('/cities', async (req, res) => {
  try {
    const { city_name } = req.body
    const city = await sql`INSERT INTO cities (city_name) VALUES (${city_name})`
    res.json(city)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create city' })
  }
})



app.put('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { city_name } = req.body
    const city = await sql`UPDATE cities SET city_name = ${city_name} WHERE city_id = ${id}`
    res.json(city)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update city' })
  }
})


app.delete('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params
    const city = await sql`DELETE FROM cities WHERE city_id = ${id}`
    res.json(city)
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete city' })
  }
})

const server = app.listen(3002, () => {
  console.log(`http://localhost:${3002}`)
})