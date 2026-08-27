import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'


export interface AuthRequest extends Request {
    user?: {
      user_id: number
      email: string
      role: string
    }
  }
  
export function authMiddleware(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) {
    const authorization = req.headers.authorization
  
    if (!authorization) {
      return res.status(401).json({
        error: 'Token is missing'
      })
    }
  
    const token = authorization.split(' ')[1]//['Bearer', 'token']
  
    if (!token) {
      return res.status(401).json({
        error: 'Token is missing'
      })
    }
  
    const secret = process.env.JWT_SECRET
  
    if (!secret) {
      throw new Error('JWT_SECRET is not set')
    }
   
    try {
      const user_hidden_data = jwt.verify(token, secret) as {
        user_id: number
        email: string
        role: string
      }
  
      req.user = user_hidden_data // {user_id: 1, email: 'test@test.com', role: 'admin'}
  
      next()
  
    } catch (error) {
      return res.status(401).json({
        error: 'Invalid token'
      })
    }
  }


  export function isAdmin(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) {
    const user = req.user as any
    if(user.role !== 'admin') {
      res.status(403).json({ error: 'Unauthorized' })
      return
    }
    next()
  }
