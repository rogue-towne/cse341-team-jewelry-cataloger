import express, { Request, Response} from 'express'
import userRouter from './user'
import insuranceRouter from './insurance'
import jewelryRouter from './jewelry'
import marketRouter from './market'
import authRouter from './auth'
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const routes = express.Router();

routes.use('/user', ensureAuth, userRouter)
routes.use('/insurance', ensureAuth, insuranceRouter)
routes.use('/jewelry', ensureAuth, jewelryRouter)
routes.use('/market', ensureAuth, marketRouter)
routes.use('/auth', ensureAuth, authRouter)


//Landing page for guests
routes.get('/', ensureGuest, ( req: Request,  res: Response) => {
	res.render('index', {
		title: 'Welcome to Jewelry Cataloger',
	});
});

export default routes;
