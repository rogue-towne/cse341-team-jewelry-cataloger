import express, { Request, Response} from 'express'
import userRouter from './user'
import insuranceRouter from './insurance'
import jewelryRouter from './jewelry'
import marketRouter from './market'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerJSON from '../swagger.json'

const routes = express.Router();

const swaggerDefinition = swaggerJSON;

const options = {
    
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.ts'],
    swaggerDefinition
  };

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))
routes.use('/user', userRouter);
routes.use('/insurance', insuranceRouter);
routes.use('/jewelry', jewelryRouter);
routes.use('/market', marketRouter)


//Landing page for guests
routes.get('/', ( req: Request,  res: Response) => {
	res.render('index', {
		title: 'Welcome to Jewelry Cataloger',
	});
});

export default routes;
