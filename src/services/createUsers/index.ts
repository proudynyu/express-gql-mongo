import { CreateUserController } from './controller'
import { CreateUserCase } from './execute'
import { MongoRepository } from '../../database/implementations/mongo'

const database = new MongoRepository()

const createUserCase = new CreateUserCase(database)
const createUserController = new CreateUserController(createUserCase)

export default createUserController
