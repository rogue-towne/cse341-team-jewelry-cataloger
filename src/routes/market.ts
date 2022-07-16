import { requiresAuth } from 'express-openid-connect';
import { deleteMarketHandler, getAllHandler, getSingleHandler, postNewMarketHandler, putUpdateMarketHandler } from '../controllers/market_controller';
import validate from '../helper/validate';
import { deleteMarketSchema, getSingleSchema, postNewMarketSchema, putUpdateMarketSchema } from '../schema/market_schema';
import express from 'express'
const router = express.Router();

router.post('/', requiresAuth(), validate(postNewMarketSchema), postNewMarketHandler);
router.delete('/:marketId', requiresAuth(), validate(deleteMarketSchema), deleteMarketHandler);
router.get('/:marketId', requiresAuth(), validate(getSingleSchema), getSingleHandler);
router.get('/', requiresAuth(), getAllHandler);
router.put('/:marketId', requiresAuth(), validate(putUpdateMarketSchema), putUpdateMarketHandler);

export default router;