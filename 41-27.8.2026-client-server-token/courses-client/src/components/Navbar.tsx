import {
    Link,
    useNavigate
  } from 'react-router-dom'
  
  export default function Navbar() {
  
    const navigate = useNavigate()
  
    const token = localStorage.getItem('token') ?? false
      
  
    function logout() {
  
      localStorage.removeItem('token')
  
      localStorage.removeItem('user')
  
      navigate('/login')
    }
  
    return (
      <nav>
        <Link to="/courses">
          courses
        </Link>
  
        {' | '}
  
        {!token && (
          <>
            <Link to="/login">
              Login
            </Link>
  
            {' | '}
  
            <Link to="/register">
              Register
            </Link>
          </>
        )}
  
        {token && (
          <button onClick={logout}>
            Logout
          </button>
        )}
  
      </nav>
    )
  }
  
  
  