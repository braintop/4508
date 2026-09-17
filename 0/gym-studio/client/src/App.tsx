import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import AddClass from './pages/AddClass';
import EditClass from './pages/EditClass';

export default function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/new" element={<AddClass />} />
          <Route path="/classes/:classCode/edit" element={<EditClass />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>FitStudio — מערכת ניהול שיעורי סטודיו</p>
      </footer>
    </>
  );
}
