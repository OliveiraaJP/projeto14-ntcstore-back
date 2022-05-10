import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(json())
dotenv.config()

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))