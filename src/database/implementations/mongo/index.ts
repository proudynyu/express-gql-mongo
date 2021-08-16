import { CreateUserDTO } from '../../../services/createUsers/DTO'
import { IUserRepository } from '../../repositories/IUserRepository'
import { User } from '../entities/User'
import mongoose from 'mongoose'

export class MongoRepository implements IUserRepository {
  constructor() {}

  async findByEmail(email: string): Promise<User> {
    return {} as User
  }

  async save(user: User): Promise<void> {}

  async checkUserData(data: CreateUserDTO): Promise<User> {
    return {} as User
  }
}
