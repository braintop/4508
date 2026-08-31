import express from 'express'
import cors  from 'cors'
import cityRoutes from './routes/cityRoutes'
import courseRoutes from './routes/courseRoutes'
import userRoutes from './routes/userRoutes'
const app = express()
app.use(cors())
app.use(express.json())

app.use('/cities', cityRoutes)
app.use('/courses', courseRoutes)
app.use('/users', userRoutes)
const server = app.listen(3002, () => {
  console.log(`http://localhost:${3002}`)
})