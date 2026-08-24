import express from 'express'
import cors  from 'cors'
import cityRoutes from './routes/cityRoutes'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/cities', cityRoutes)

const server = app.listen(3002, () => {
  console.log(`http://localhost:${3002}`)
})