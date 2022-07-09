import express, { Request, Response} from 'express'
import userController from '../controllers/user_data'
const routes = express.Router();

//routes.use('/', require('./home'));
routes.use('/user', require('./user'));


//Landing page for guests
routes.get('/', ( req: Request,  res: Response) => {
	res.render('index', {
		title: 'Welcome to Jewelry Cataloger',
		//   isAuthenticated: req.oidc.isAuthenticated(),
	});
});

export default routes;
