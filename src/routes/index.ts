import express, { Request, Response} from 'express'
import userRouter from './user'
import insuranceRouter from './insurance'
import jewelryRouter from './jewelry'
import marketRouter from './market'
import { requiresAuth } from 'express-openid-connect'


const routes = express.Router();

routes.use('/user', requiresAuth, userRouter)
routes.use('/insurance',  requiresAuth, insuranceRouter)
routes.use('/jewelry',  requiresAuth, jewelryRouter)
routes.use('/market',  requiresAuth, marketRouter)


export default routes;
