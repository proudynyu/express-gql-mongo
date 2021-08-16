import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  create_at: {
    type: Date,
    default: Date.now(),
  },
  update_at: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model('Users', UserSchema)
