import express from 'express'
const router = express.Router();
import { deleteUserHandler, getAllHandler, getSingleHandler, postNewUserHandler, putUpdateUserHandler } from '../controllers/user_controller';
import validate from '../helper/validate';
import { deleteUserSchema, getSingleSchema, postNewUserSchema, putUpdateUserSchema } from '../schema/user_schema';



router.post('/', validate(postNewUserSchema), postNewUserHandler);
router.delete('/:userId', validate(deleteUserSchema), deleteUserHandler);
router.get('/:userId', validate(getSingleSchema), getSingleHandler);
router.get('/', getAllHandler);
router.put('/:userId', validate(putUpdateUserSchema), putUpdateUserHandler);

export default router;