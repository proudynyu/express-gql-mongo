import { IUserRepository } from '@database/repositories/IUserRepository'

export class GetUsersCase {
  constructor(private userRepositority: IUserRepository) {}

  async execute() {}
}
