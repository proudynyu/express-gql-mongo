import { CreateUserController } from './controller'
import { CreateUserCase } from './execute'
import { CreateUserDTO } from './DTO'
import { MockedUserRepo } from '../../__mocks__/UserRepo'

const mockedUser = {
  name: 'string',
  username: 'string',
  email: 'string',
  password: 'string',
}

const mockedDatabase = new MockedUserRepo()

// describe('Testing CreateUserCase', () => {
//   test('Should return a User', async () => {
//     const createUserCase = new CreateUserCase(mockedDatabase)
//     const response = await createUserCase.execute(mockedUser)
//   })
// })
