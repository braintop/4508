import {Request, Response} from 'express'
import sql from '../db'

import { AuthRequest } from '../middleware/authMiddleware'
export const getCourses = async (req: AuthRequest, res: Response) => {
    try {
        //let user = req.user as any
        const courses = await sql`SELECT * FROM courses`
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: 'Failed to get courses' })
    }
}

export const getCourseById = async (req: Request, res: Response) => {       
    try {
        const {id} = req.params
        const course = await sql`SELECT * FROM courses WHERE course_id = ${id}`
        res.json(course)
    } catch (error) {
        res.status(500).json({ error: 'Failed to get course' })
    }
}

export async function addCourse(req: Request, res: Response) {
    try {
        const {name, description, price} = req.body
        const course = await sql`INSERT INTO courses (name, description, price) VALUES (${name}, ${description}, ${price})`
        res.json(course)
    } catch (error) {
        res.status(500).json({ error: 'Failed to add course' })
    }
}

export async function updateCourse(req: Request, res: Response) {
    try {
        const {id} = req.params
        const {name, description, price} = req.body
        const course = await sql`UPDATE courses SET name = ${name}, description = ${description}, price = ${price} WHERE course_id = ${id}`
        res.json(course)
    } catch (error) {
        res.status(500).json({ error: 'Failed to update course' })
    }
}

export async function deleteCourse(req: Request, res: Response) {
    try {
        const {id} = req.params
        const course = await sql`DELETE FROM courses WHERE course_id = ${id}`
        res.json(course)
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete course' })
    }
}