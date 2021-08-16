import { CreateUserDTO } from '../../services/createUsers/DTO'
import { User } from '../implementations/entities/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<void>
  checkUserData(data: CreateUserDTO): Promise<User>
}
