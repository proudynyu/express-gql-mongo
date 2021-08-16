import { User } from '../../database/implementations/entities/User'
import { IUserRepository } from '../../database/repositories/IUserRepository'
import { CreateUserDTO } from './DTO'

export class CreateUserCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: CreateUserDTO) {
    const userIsValid = await this.userRepository.checkUserData(userData)
    if (!userIsValid) throw new Error('User information was invalid')

    const userAlreadyExists = await this.userRepository.findByEmail(
      userData.email
    )
    if (userAlreadyExists) throw new Error('User already exists')

    const user = new User(userData)

    await this.userRepository.save(user)

    return {
      id: user.id,
      name: user.name,
    }
  }
}
