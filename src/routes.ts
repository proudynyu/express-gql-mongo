import { Router, Request, Response } from 'express'
import createUserController from '@services/createUsers'
import getUsersController from '@services/getUsers'

import { graphqlHTTP } from 'express-graphql'
import { schema } from './graphql'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ msg: 'Functional' })
})

router.post('/api/users', async (req: Request, res: Response) => {
  const data = req.body
  try {
    const user = await createUserController.handle(data)
    return res.status(200).json({ msg: 'User created with success!', user })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
})

router.get('/api/users', () => getUsersController.getUsers())

router.get('/api/users/:id', (req: Request, res: Response) => {
  getUsersController.getUser(req, res)
})

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

export default router
