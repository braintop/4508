import {Request, Response} from 'express'
import sql from '../db'


export const getCities = async (req: Request, res: Response) => {
    try {
        const cities = await sql`SELECT * FROM cities`
        res.json(cities)
    } catch (error) {
        res.status(500).json({ error: 'Failed to get cities' })
    }
}

export const getCityById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const city = await sql`SELECT * FROM cities WHERE city_id = ${id}`
        res.json(city)
    } catch (error) {
        res.status(500).json({ error: 'Failed to get city' })
    }
}

export async function addCity(req: Request, res: Response) {
    try {
      const { city_name } = req.body
  
      const city = await sql`
        INSERT INTO cities (city_name)
        VALUES (${city_name})
        RETURNING *
      `
  
      res.status(201).json(city)
    } catch (error) {
      console.error(error)
  
      res.status(500).json({
        error: 'Failed to create city'
      })
    }
  }

  export async function updateCity(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { city_name } = req.body
      const city = await sql`UPDATE cities SET city_name = ${city_name} WHERE city_id = ${id} RETURNING *`
      res.json(city)
    } catch (error) {
      res.status(500).json({ error: 'Failed to update city' })
    }
  }
  export async function deleteCity(req: Request, res: Response) {
    try {
      const { id } = req.params
  
      const city = await sql`
        DELETE FROM cities
        WHERE city_id = ${id}
        RETURNING *
      `
  
      res.json(city)
    } catch (error) {
      console.error(error)
  
      res.status(500).json({
        error: 'Failed to delete city'
      })
    }
  }
  