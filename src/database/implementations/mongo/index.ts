import { CreateUserDTO } from '../../../services/createUsers/DTO'
import { IUserRepository } from '../../repositories/IUserRepository'
import { User } from '../../entities/User'
import UserModel from './models/UserSchema'

export class MongoRepository implements IUserRepository {
  constructor(private connection = UserModel) {}

  async findByEmail(email: string): Promise<User> {
    const hasUser = this.connection.findOne({ email })
    return {} as User
  }

  async save(user: User): Promise<void> {}

  async checkUserData(data: CreateUserDTO): Promise<User> {
    return {} as User
  }
}
