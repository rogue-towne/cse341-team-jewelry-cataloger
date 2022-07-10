import express from 'express'
const router = express.Router();
import { deleteUserHandler, getSingleHandler, postNewUserHandler, putUpdateUserHandler } from '../controllers/user_controller';
import validate from '../helper/validate';
import { deleteUserSchema, getSingleSchema, postNewUserSchema, putUpdateUserSchema } from '../schema/user_schema';

router.post('/', validate(postNewUserSchema), postNewUserHandler);
router.delete('/:userId', validate(deleteUserSchema), deleteUserHandler);
router.get('/:userId', validate(getSingleSchema), getSingleHandler);
router.put('/:userId', validate(putUpdateUserSchema), putUpdateUserHandler);

export default router;