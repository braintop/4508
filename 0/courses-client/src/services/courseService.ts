import type { Course } from '../types/Course'
const API_URL = 'http://127.0.0.1:3002/courses'

export const getCourses = async (): Promise<Course[]> => {
  const response = await fetch(API_URL)
  return response.json()
}
export async function addCourse(courseName: string) {
    await fetch(API_URL, {
      method: 'POST',
  
      headers: {
        'Content-Type': 'application/json'
      },
  
      body: JSON.stringify({
        course_name: courseName
      })
    })
  }