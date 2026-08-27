import { getCourses } from '../services/courseService'
import type { Course } from '../types/Course'
import {useEffect} from 'react'
import { useState } from 'react'
export default function Courses() {
    
    const [courses, setCourses] = useState<Course[]>([])
    const [message, setMessage] = useState('')
    async function getAllCourses() {
        let data = await getCourses()
        if('error' in data) {
            setMessage(data.error as string)
            setCourses([] as Course[])
            return
        }
        setCourses(data)
        setMessage('')
        console.log(courses)
    }
    useEffect(() => {
        getAllCourses()
    }, [])
    return (

    <div>
        <h2>Courses</h2>
        <ul>
            {courses?.map((course) => (
                <li key={course.course_id}>{course.course_name}</li>
            ))}
            {message.length > 0 && <li style={{color: 'red'}}>{message}</li>}
        </ul>
    </div>
    )
}