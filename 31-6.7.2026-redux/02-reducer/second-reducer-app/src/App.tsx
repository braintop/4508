import { Navbar } from "./Components/Navbar"
import {Routes, Route} from "react-router-dom"
import { Profile } from "./Components/Profile"
import { About } from "./Components/About"
function App() {

  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>

    </>
  )
}

export default App
