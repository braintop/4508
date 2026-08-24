import { getCourses } from '../services/courseService'
import type { Course } from '../types/Course'
import {useEffect} from 'react'
import { useState } from 'react'
export default function Courses() {
    
    const [courses, setCourses] = useState<Course[]>([])
    async function getAllCourses() {
        let data = await getCourses()
        setCourses(data)
    }
    useEffect(() => {
        getAllCourses()
    }, [])
    return (

    <div>
        <h2>Courses</h2>
        <ul>
            {courses.map((course) => (
                <li key={course.course_id}>{course.course_name}</li>
            ))}
        </ul>
    </div>
    )
}