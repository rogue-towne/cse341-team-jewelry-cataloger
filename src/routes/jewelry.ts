import express from 'express'
const router = express.Router();
import { deleteJewelryHandler, getAllHandler, getSingleHandler, postNewJewelryHandler, putUpdateJewelryHandler } from '../controllers/jewelry_controller';
import validate from '../helper/validate';
import { deleteJewelrySchema, getSingleSchema, postNewJewelrySchema, putUpdateJewelrySchema } from '../schema/jewelry_schema';

router.post('/', validate(postNewJewelrySchema), postNewJewelryHandler);
router.delete('/:jewelryId', validate(deleteJewelrySchema), deleteJewelryHandler);
router.get('/:jewelryId', validate(getSingleSchema), getSingleHandler);
router.get('/', getAllHandler);
router.put('/:jewelryId', validate(putUpdateJewelrySchema), putUpdateJewelryHandler);

export default router;