import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>)
   {

    e.preventDefault()

    try {

      const response = await fetch(
        'http://localhost:3002/users/register',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            user_name: userName,
            email: email,
            password: password
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {

        setMessage(
          data.error || 'Register failed'
        )

        return
      }

      alert('Register successful')

      navigate('/login')

    } catch (error) {

      console.error(error)

      setMessage('Server error')
    }
  }

  return (
    <div>

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <div>

          <label>User Name</label>

          <input
            type="text"
            value={userName}
            onChange={(e) =>
              setUserName(e.target.value)
            }
          />

        </div>

        <div>

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        <div>

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        <button type="submit">
          Register
        </button>

      </form>

      <p>{message}</p>

    </div>
  )
}

