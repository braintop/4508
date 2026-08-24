import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import  sql from '../db'
export async function register(req: Request, res: Response) {
    try {
      const { user_name, email, password } = req.body
  
      if (!user_name || !email || !password) {
        return res.status(400).json({
          error: 'All fields are required'
        })
      }
  
      const existingUsers = await sql`
        SELECT *
        FROM users
        WHERE email = ${email}
      `
  
      if (existingUsers.length > 0) {
        return res.status(400).json({
          error: 'Email already exists'
        })
      }
  
      const hashedPassword = await bcrypt.hash(password, 10)
  
      const users = await sql`
        INSERT INTO users (
          user_name,
          email,
          password
        )
        VALUES (
          ${user_name},
          ${email},
          ${hashedPassword}
        )
        RETURNING user_id, user_name, email, role
      `
  
      res.status(201).json(users[0])
  
    } catch (error) {
      console.error(error)
  
      res.status(500).json({
        error: 'Failed to register'
      })
    }
  }
  

