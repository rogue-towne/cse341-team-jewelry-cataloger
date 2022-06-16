const routes = require('express').Router();
const insuranceController = require('../controllers/insurance_data');

routes.get('/', insuranceController.getAll);

routes.get('/:id', insuranceController.getSingle);

routes.post('/', insuranceController.postNewInsurance);

routes.put('/:id', insuranceController.putUpdateInsurance);

routes.delete('/:id', insuranceController.deleteInsurance);

module.exports = routes;

