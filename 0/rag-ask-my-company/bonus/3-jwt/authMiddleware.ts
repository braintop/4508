// ============================================
// Bonus 3: JWT
//
// לשמור בתור src/middleware/authMiddleware.ts
//
// דורש:
// npm install jsonwebtoken
// npm install -D @types/jsonwebtoken
//
// וב-.env:
// JWT_SECRET=some_long_random_secret
// ============================================

import {
  Request,
  Response,
  NextFunction
} from 'express'

import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
  user?: {
    user_id: number
    email: string
    company_id: number
  }
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const authorization =
    req.headers.authorization

  if (!authorization) {
    return res.status(401).json({
      error: 'Token is missing'
    })
  }

  const token =
    authorization.split(' ')[1]

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

    const decoded =
      jwt.verify(token, secret) as {
        user_id: number
        email: string
        company_id: number
      }

    req.user = decoded

    next()

  } catch (error) {

    return res.status(401).json({
      error: 'Invalid token'
    })
  }
}
