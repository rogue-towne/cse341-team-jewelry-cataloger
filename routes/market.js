const routes = require('express').Router();
const marketController = require('../controllers/market_data');

routes.get('/', marketController.getAll);

routes.get('/:id', marketController.getSingle);

routes.post('/', marketController.postNewMarket);

routes.put('/:id', marketController.putUpdateMarket);

routes.delete('/:id', marketController.deleteMarket);

module.exports = routes;

