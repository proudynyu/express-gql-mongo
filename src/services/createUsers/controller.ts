import { Request, Response } from 'express'
import {
  validateEmail,
  validateName,
  validateUsername,
  validatePassword,
} from '@utils/index'
import { CreateUserDTO } from './DTO'
import { CreateUserCase } from './execute'
import { User } from '@database/entities/User'

function validateData(data: CreateUserDTO) {
  const { email, name, username, password } = data

  const isValidEmail = validateEmail(email)
  if (!isValidEmail) throw new Error('Email have invalid format')

  const isValidName = validateName(name)
  if (!isValidName) throw new Error('Name have invalid format')

  const isValidUsername = validateUsername(username)
  if (!isValidUsername) throw new Error('Username have invalid format')

  const isValidaPassword = validatePassword(password)
  if (!isValidaPassword) throw new Error('Password have invalid format')
}

export class CreateUserController {
  constructor(private createUser: CreateUserCase) {}

  async handle(data: CreateUserDTO): Promise<User> {
    validateData(data)

    const user = await this.createUser.execute(data)

    return user
  }
}
