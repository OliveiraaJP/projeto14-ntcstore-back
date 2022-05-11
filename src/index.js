import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

//Routes
import authRouter from "./routes/authRouter.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(json())

app.use(authRouter)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))