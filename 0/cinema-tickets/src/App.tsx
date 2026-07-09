import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TicketPage from './pages/TicketPage'
import RecomondationPage from './pages/RecomondationPage'
import AboutPage from './pages/AboutPage'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/recomondation" element={<RecomondationPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </>
  )
}

export default App
