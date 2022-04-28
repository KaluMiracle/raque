import { Router } from 'express'
const appRouter = Router()

appRouter.get('/', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    res.json('hello world')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default appRouter