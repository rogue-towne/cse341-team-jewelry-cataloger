import {Request, Response} from 'express'
import UserDataModel from '../models/user_model';
import { DeleteUserInput, GetSingleUserInput, PostNewUserInput, PutUpdateUserInput } from '../schema/user_schema';

export async function getAllHandler(req: Request, res: Response){
    try {
        const users = await UserDataModel.find();
        return res.status(200).json(users)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function getSingleHandler(req: Request<GetSingleUserInput['params']>, res: Response){
    try { const user = await UserDataModel.findById(req.params.userId)
        return res.status(200).json(user)
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function postNewUserHandler(req: Request<{}, {}, PostNewUserInput['body']>, res: Response){
    try {
        const user = await UserDataModel.create(req.body);
        return res.status(201).json(user)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateUserHandler(req: Request<PutUpdateUserInput['params']>, res: Response){
    try { 
        await UserDataModel.findByIdAndUpdate(req.params.userId, req.body)
        res.send("Updated User");
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function deleteUserHandler(req: Request<DeleteUserInput['params']>, res: Response){
    try { 
        const user = await UserDataModel.findById(req.params.userId)
        user?.deleteOne()
        res.json('Deleted User')
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    };
}
