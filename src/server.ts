import express, { Request, Response } from 'express'
import './database/connection'

const app = express()

app.use(express.json())

app.get('/api', (req: Request, res: Response) => {
  return res.status(200).json({ msg: 'Functional' })
})

export default app
