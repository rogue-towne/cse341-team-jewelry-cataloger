const routes = require('express').Router();
import userController from '../controllers/user_data';

routes.get('/', userController.getAll);

export default routes;