import type { Course } from '../types/Course'
const API_URL = 'http://127.0.0.1:3002/courses'

export const getCourses = async (): Promise<Course[]> => {
  const response = await fetch(API_URL,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token') ?? ''}`
    },
    method: 'GET'
  })
  return response.json() as Promise<Course[]>
}

export const addCourse = async (courseName: string) => {
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token') ?? ''}`
    },
    method: 'POST',
    body: JSON.stringify({ course_name: courseName }),
  })
  return response.json() as Promise<Course>
}