import { Request, Response} from 'express'

const routes = require('express').Router();

// Landing page for guests
routes.get('/', ( req: Request,  res: Response) => {
	res.render('index', {
		title: 'Welcome to Jewelry Cataloger',
		//   isAuthenticated: req.oidc.isAuthenticated(),
	});
});

export default routes;
