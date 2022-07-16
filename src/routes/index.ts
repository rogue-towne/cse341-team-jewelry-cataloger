import express from 'express'
import userRouter from './user'
import insuranceRouter from './insurance'
import jewelryRouter from './jewelry'
import marketRouter from './market'

const routes = express.Router();

routes.use('/user', userRouter)
routes.use('/insurance', insuranceRouter)
routes.use('/jewelry', jewelryRouter)
routes.use('/market', marketRouter)

export default routes;
