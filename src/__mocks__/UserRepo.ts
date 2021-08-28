import { User } from '../database/entities/User'
import { IUserRepository } from '../database/repositories/IUserRepository'

const mockedDatabase = [
  {
    id: '',
    name: '',
    email: '',
    password: '',
    username: '',
  },
]

export class MockedUserRepo implements IUserRepository {
  async findByEmail(email: string): Promise<User> {
    const hasUser = mockedDatabase.find((user) => user.email === email)

    if (hasUser) {
      return hasUser
    }
    return {} as User
  }

  async save(user: User): Promise<void> {
    const hasUser = mockedDatabase.find((email) => email.email === user.email)

    if (!hasUser) {
      throw new Error('User already exists')
    }

    mockedDatabase.push(user)
  }

  async checkUserData(): Promise<User> {
    return mockedDatabase[0]
  }
}
