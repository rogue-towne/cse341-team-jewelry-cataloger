import { requiresAuth } from 'express-openid-connect';
import { deleteJewelryHandler, getAllHandler, getSingleHandler, postNewJewelryHandler, putUpdateJewelryHandler } from '../controllers/jewelry_controller';
import validate from '../helper/validate';
import { deleteJewelrySchema, getSingleSchema, postNewJewelrySchema, putUpdateJewelrySchema } from '../schema/jewelry_schema';
import express from 'express'
const router = express.Router();

router.post('/', requiresAuth(), validate(postNewJewelrySchema), postNewJewelryHandler);
router.delete('/:jewelryId', requiresAuth(), validate(deleteJewelrySchema), deleteJewelryHandler);
router.get('/:jewelryId', requiresAuth(), validate(getSingleSchema), getSingleHandler);
router.get('/', requiresAuth(), getAllHandler);
router.put('/:jewelryId', requiresAuth(), validate(putUpdateJewelrySchema), putUpdateJewelryHandler);

export default router;