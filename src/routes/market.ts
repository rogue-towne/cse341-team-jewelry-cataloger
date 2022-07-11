import express from 'express'
const router = express.Router();
import { deleteMarketHandler, getAllHandler, getSingleHandler, postNewMarketHandler, putUpdateMarketHandler } from '../controllers/market_controller';
import validate from '../helper/validate';
import { deleteMarketSchema, getSingleSchema, postNewMarketSchema, putUpdateMarketSchema } from '../schema/market_schema';

router.post('/', validate(postNewMarketSchema), postNewMarketHandler);
router.delete('/:marketId', validate(deleteMarketSchema), deleteMarketHandler);
router.get('/:marketId', validate(getSingleSchema), getSingleHandler);
router.get('/', getAllHandler);
router.put('/:marketId', validate(putUpdateMarketSchema), putUpdateMarketHandler);

export default router;