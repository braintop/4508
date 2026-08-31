import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {

    e.preventDefault()

    try {

      const response = await fetch(
        'http://localhost:3002/users/login',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {

        setMessage(
          data.error || 'Login failed'
        )

        return
      }

      localStorage.setItem(
        'token',
        data.token
      )

      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      )

      alert('Login successful')

      navigate('/courses')

    } catch (error) {

      console.error(error)

      setMessage('Server error')
    }
  }

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

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
          Login
        </button>

      </form>

      <p>{message}</p>

    </div>
  )
}

