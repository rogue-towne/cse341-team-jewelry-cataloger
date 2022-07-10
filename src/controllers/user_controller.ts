import {Request, Response} from 'express'
import { PostNewUserInput } from '../schema/user_schema';
import { postNewUser } from '../services/user_service'


export async function getAllHandler(req: Request, res: Response){

}
export async function getSingleHandler(req: Request, res: Response){
    
}
export async function postNewUserHandler(req: Request<{}, {}, PostNewUserInput["body"]>, res: Response){
    try {
        const user = await postNewUser(req.body);
        return res.send(user)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateUserHandler(req: Request, res: Response){
    
}
export async function deleteUserHandler(req: Request, res: Response){
    
}
// const getAll = async (req: Request, res: Response, next: NextFunction) => {
// 	/*
//     #swagger.description =  Get all Users in the database
//     #swagger.tags = ['user']
//   */
// 	try {
// 		const result = await UserDataModel.find();
// 		res.setHeader('Content-Type', 'application/json');
// 		res.status(200).json(result);
// 	} catch (err) {
// 		//const errors = handleErrors(err);
// 		//res.status(500).json({ errors });
// 		res.status(401);
// 	}
// };
