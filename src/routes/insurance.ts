import express from 'express'
import { requiresAuth } from 'express-openid-connect';
const router = express.Router();
import { deleteInsuranceHandler, getAllHandler, getSingleHandler, postNewInsuranceHandler, putUpdateInsuranceHandler } from '../controllers/insurance_controller';
import validate from '../helper/validate';
import { deleteInsuranceSchema, getSingleSchema, postNewInsuranceSchema, putUpdateInsuranceSchema } from '../schema/insurance_schema';

router.post('/',  requiresAuth(), validate(postNewInsuranceSchema), postNewInsuranceHandler);
router.delete('/:insuranceId', validate(deleteInsuranceSchema), deleteInsuranceHandler);
router.get('/:insuranceId', validate(getSingleSchema), getSingleHandler);
router.get('/', getAllHandler);
router.put('/:insuranceId', validate(putUpdateInsuranceSchema), putUpdateInsuranceHandler);

export default router;