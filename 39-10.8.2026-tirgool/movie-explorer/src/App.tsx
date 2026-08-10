import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import About from "./pages/About";
function App() {

  return (
    <>
        <h1>Hello World</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />

        </Routes>
    </>
  )
}

export default App
