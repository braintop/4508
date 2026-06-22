import { UserProvider } from "./Context/UserContext";
import Home from './Pages/Home'
import About from './Pages/about'
import NavBar from './Pages/NavBar'

function App() {

  
  return (
    <>
        <UserProvider>
            <NavBar />
            <Home />
            <About />
        </UserProvider>
    </>
  )
}

export default App
