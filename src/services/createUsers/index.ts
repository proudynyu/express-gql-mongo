import { CreateUserController } from './controller'
import { CreateUserCase } from './execute'
import { MongoRepository } from '@database/implementations/mongo'

const mongo = new MongoRepository()

const createUserCase = new CreateUserCase(mongo)

const createUserController = new CreateUserController(createUserCase)

export default createUserController
