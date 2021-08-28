import { CreateUserDTO } from '../../../services/createUsers/DTO'
import { IUserRepository } from '../../repositories/IUserRepository'
import { User } from '../../entities/User'
import UserModel from './models/UserSchema'

export class MongoRepository implements IUserRepository {
  constructor(private connection = UserModel) {}

  async findByEmail(email: string): Promise<User> {
    const hasUser = await this.connection.findOne({ email })

    if (hasUser) {
      const parser = hasUser.toObject()
      const user = new User(parser)
      return user
    }
    return {} as User
  }

  async save(user: User): Promise<void> {
    const userExists = await this.connection.findOne({ email: user.email })

    if (userExists) {
      throw new Error('User already exists')
    }

    await this.connection.create(user)
  }

  async checkUserData(data: CreateUserDTO): Promise<User> {
    console.log({ data })
    return {} as User
  }
}
