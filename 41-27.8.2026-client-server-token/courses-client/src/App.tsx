import CourseForm from './components/CourseForm'
import Courses from './components/Courses'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Courses />} />

      <Route path="/courses" element={<Courses />} />
      <Route path="/add-course" element={<CourseForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
