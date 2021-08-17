import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

export default new Promise((resolve, reject) => {
  const uri = process.env.MONGOURI || ''

  mongoose
    .connect(`${uri}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      if (error.message) {
        console.log(error.message)
        reject(error)
      }
    })

  const db = mongoose.connection

  db.on('error', (err) => console.log(err))

  return resolve(db)
})
