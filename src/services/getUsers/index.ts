import { GetUsersController } from './controller'
import { GetUsersCase } from './execute'
import { MongoRepository } from '@database/implementations/mongo'

const mongo = new MongoRepository()
const getUsersCase = new GetUsersCase(mongo)

const getUsersController = new GetUsersController(getUsersCase)

export default getUsersController
