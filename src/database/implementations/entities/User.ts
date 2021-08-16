export class User {
  public readonly id: string

  public name: string
  public username: string
  public email: string
  public password: string

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props)
  }
}
