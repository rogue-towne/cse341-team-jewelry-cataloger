const routes = require('express').Router();
const jewelryController = require('../controllers/jewelry_data');

routes.get('/', jewelryController.getAll);

routes.get('/:id', jewelryController.getSingle);

routes.post('/', jewelryController.postNewJewelry);

routes.put('/:id', jewelryController.putUpdateJewelry);

routes.delete('/:id', jewelryController.deleteJewelry);

module.exports = routes;

