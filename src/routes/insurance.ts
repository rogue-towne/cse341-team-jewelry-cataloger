import { requiresAuth } from 'express-openid-connect';
import { deleteInsuranceHandler, getAllHandler, getSingleHandler, postNewInsuranceHandler, putUpdateInsuranceHandler } from '../controllers/insurance_controller';
import validate from '../helper/validate';
import { deleteInsuranceSchema, getSingleSchema, postNewInsuranceSchema, putUpdateInsuranceSchema } from '../schema/insurance_schema';
import express from 'express'
const router = express.Router();

router.post('/',  requiresAuth(), validate(postNewInsuranceSchema), postNewInsuranceHandler);
router.delete('/:insuranceId', requiresAuth(), validate(deleteInsuranceSchema), deleteInsuranceHandler);
router.get('/:insuranceId', requiresAuth(), validate(getSingleSchema), getSingleHandler);
router.get('/', requiresAuth(), getAllHandler);
router.put('/:insuranceId', requiresAuth(), validate(putUpdateInsuranceSchema), putUpdateInsuranceHandler);

export default router;