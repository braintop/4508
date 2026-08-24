import CourseForm from './components/CourseForm'
import Courses from './components/Courses'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Courses />} />
      <Route path="/add-course" element={<CourseForm />} />
    </Routes>
    </>
  )
}

export default App
