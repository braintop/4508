import { useState } from 'react'
import { addCourse } from '../services/courseService'
import type { Course } from '../types/Course'

export default function CourseForm() {
    
  const [course, setCourse] = useState<Course>({ course_id: 0, course_name: '' })
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addCourse(course.course_name)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCourse({ ...course, course_name: e.target.value })
  }
  return (
    <div>
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={handleChange} />
            <button type="submit">Add Course</button>
        </form>
    </div>
  )
}