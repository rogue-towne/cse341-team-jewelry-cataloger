import express, { Request, Response} from 'express'
import userRouter from './user'
import insuranceRouter from './insurance'
const routes = express.Router();

//routes.use('/', require('./home'));
routes.use('/user', userRouter);
routes.use('/insurance', insuranceRouter);


//Landing page for guests
routes.get('/', ( req: Request,  res: Response) => {
	res.render('index', {
		title: 'Welcome to Jewelry Cataloger',
		//   isAuthenticated: req.oidc.isAuthenticated(),
	});
});

export default routes;
