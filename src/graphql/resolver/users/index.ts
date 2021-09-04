import { CreateUserDTO } from '@services/createUsers/DTO'
import getUsersController from '@services/getUsers'
import createUserController from '@services/createUsers'

export const queries = {
  getUsers: async () => {
    const users = await getUsersController.getUsers()
    return users
  },
}

export const mutations = {
  createUser: async (_, {input}) => {
    const user = await createUserController.handle(input)
    return user
  }
}