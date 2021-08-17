import app from './server'
import { config } from 'dotenv'

config()

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
