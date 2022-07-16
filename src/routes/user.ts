import { requiresAuth } from 'express-openid-connect';
import { deleteUserHandler, getAllHandler, getSingleHandler, postNewUserHandler, putUpdateUserHandler } from '../controllers/user_controller';
import validate from '../helper/validate';
import { deleteUserSchema, getSingleSchema, postNewUserSchema, putUpdateUserSchema } from '../schema/user_schema';
import express from 'express'
const router = express.Router();

router.post('/', requiresAuth(), validate(postNewUserSchema), postNewUserHandler);
router.delete('/:userId', requiresAuth(), validate(deleteUserSchema), deleteUserHandler);
router.get('/:userId', requiresAuth(), validate(getSingleSchema), getSingleHandler);
router.get('/', requiresAuth(), getAllHandler);
router.put('/:userId', requiresAuth(), validate(putUpdateUserSchema), putUpdateUserHandler);

export default router;