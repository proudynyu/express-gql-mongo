import { User } from '../../database/entities/User'
import { IUserRepository } from '../../database/repositories/IUserRepository'
import { CreateUserDTO } from './DTO'
import bcrypt from 'bcrypt'
import { config } from 'dotenv'

config()

export class CreateUserCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: CreateUserDTO) {
    const hashJump = Number(process.env.SECRET)
    const hashPassword = await bcrypt.hash(userData.password, hashJump)

    const { id } = await this.userRepository.findByEmail(userData.email)

    if (id) throw new Error('User already exists')

    const user = new User({ ...userData, password: hashPassword })

    await this.userRepository.save(user)
  }
}
