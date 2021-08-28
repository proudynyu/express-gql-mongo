import { Request, Response } from 'express'
import { GetUsersCase } from './execute'

export class GetUsersController {
  constructor(private getUsersCase: GetUsersCase) {}

  async getUsers() {}

  async getUser(req: Request, res: Response) {}
}
