import { Router, Request, Response } from 'express'
import createUserController from './services/createUsers'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ msg: 'Functional' })
})

router.get('/api/users', (req: Request, res: Response) =>
  createUserController.handle(req, res)
)

// router.get('/api/users/:id')

export default router
