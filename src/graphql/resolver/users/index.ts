import getUsersController from '@services/getUsers'
// import createUserController from '@services/createUsers'

export const queries = {
  getUsers: async () => {
    const users = getUsersController.getUsers()
    return users
  },
}

export const mutations = {
  createUsers: async () => {
    // const user = createUserController.handle()
  }
}