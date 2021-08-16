import { Request, Response } from 'express'
import { CreateUserCase } from './execute'

export class CreateUserController {
  constructor(private createUser: CreateUserCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      // TODO: validar informação
      const response = await this.createUser.execute(data)

      return res.status(200).json(response)
    } catch (err) {
      return res.status(400).json({ error: err })
    }
  }
}
