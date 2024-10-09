import { Express, Router } from 'express'
import userRouter from '../express/routers/user-router'
import authRouter from '../express/routers/auth-router'
import foodRouter from '../express/routers/food-routers'
export const setupRouter = (app:Express)=>{
  const router = Router()
  app.use('/api', router)
  userRouter(router)
  authRouter(router)
  foodRouter(router)
}