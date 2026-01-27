// External modules
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/mongoDB.config.js';
import userRoutes from './routes/user.routes.js';

const app = express();

dotenv.config()
const PORT = process.env.PORT || 3002
connectDB({
  path: './.env'
});

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials:true
}))

app.use('/api/user', userRoutes)


app.get('/', (req, res) => {
  res.send('Server will be start')
})

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})