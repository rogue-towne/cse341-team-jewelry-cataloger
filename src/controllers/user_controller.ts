import {Request, Response} from 'express'
import { GetSingleUserInput, PostNewUserInput, PutUpdateUserInput } from '../schema/user_schema';
import { deleteUser, getAll, getSingle, postNewUser, putUpdateUser } from '../services/user_service'


export async function getAllHandler(req: Request, res: Response){
    try {
        const users = await getAll();
        return res.status(200).json(users)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function getSingleHandler(req: Request<GetSingleUserInput['params']>, res: Response){
    const userId = req.params.userId;
    const user = await getSingle({userId})
    if (!user){
        return res.sendStatus(404)
    }
    return res.status(200).json(user)
}
export async function postNewUserHandler(req: Request<{}, {}, PostNewUserInput['body']>, res: Response){
    try {
        const user = await postNewUser(req.body);
        return res.status(200).json(user)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateUserHandler(req: Request<PutUpdateUserInput['params']>, res: Response){
    const userId = req.params.userId;
    const user = await getSingle({userId})
    if (!user){
        return res.sendStatus(404)
    }
    const update = req.body
    const updatedUser = await putUpdateUser({userId}, update, {new: true})
    return res.status(200).json(updatedUser)
}
export async function deleteUserHandler(req: Request<PutUpdateUserInput['params']>, res: Response){
    const userId = req.params.userId;
    const user = await getSingle({userId})
    if (!user){
        return res.sendStatus(404)
    }
    await deleteUser({userId});
    return res.sendStatus(200)
}
