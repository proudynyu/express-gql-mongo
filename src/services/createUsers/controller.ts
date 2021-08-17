import { Request, Response } from 'express'
import { validateEmail, validateName, validateUsername } from '../../utils'
import { CreateUserDTO } from './DTO'
import { CreateUserCase } from './execute'

async function validateData(data: CreateUserDTO) {
  const { email, name, username } = data

  const isValidEmail = validateEmail(email)
  if (!isValidEmail) throw new Error('Email have invalid format')

  const isValidName = validateName(name)
  if (!isValidName) throw new Error('Name have invalid format')

  const isValidUsername = validateUsername(username)
  if (!isValidUsername) throw new Error('Username have invalid format')
}

export class CreateUserController {
  constructor(private createUser: CreateUserCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      await validateData(data)

      const response = await this.createUser.execute(data)

      return res.status(200).json(response)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}
