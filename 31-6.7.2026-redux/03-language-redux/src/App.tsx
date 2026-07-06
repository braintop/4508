
import { Routes } from 'react-router-dom'
import './App.css'
import { LanguagePage } from './Components/LanguagePage'
import { Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LanguagePage />} />
      </Routes>
    </>
  )
}

export default App
