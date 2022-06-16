const routes = require('express').Router();
const userController = require('../controllers/user_data');

routes.get('/', userController.getAll);

routes.get('/:id', userController.getSingle);

routes.post('/', userController.postNewUser);

routes.put('/:id', userController.putUpdateUser);

routes.delete('/:id', userController.deleteUser);

module.exports = routes;

