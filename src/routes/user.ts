import express, {Request, Response} from 'express'
const router = express.Router();
import { postNewUserHandler } from '../controllers/user_controller';
import validate from '../helper/validate';
import { postNewUserSchema } from '../schema/user_schema';

router.post('/user', validate(postNewUserSchema), postNewUserHandler);

export default router;