import {Request, Response} from 'express'
import { GetSingleJewelryInput, PostNewJewelryInput, PutUpdateJewelryInput } from '../schema/jewelry_schema';
import { deleteJewelry, getAll, getSingle, postNewJewelry, putUpdateJewelry} from '../services/jewelry_service'


export async function getAllHandler(req: Request, res: Response){
    try {
        const jewelry = await getAll();
        return res.status(200).json(jewelry)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function getSingleHandler(req: Request<GetSingleJewelryInput['params']>, res: Response){
    const jewelryId = req.params.jewelryId;
    const jewelry = await getSingle({jewelryId})
    if (!jewelry){
        return res.sendStatus(404)
    }
    return res.status(200).json(jewelry)
}
export async function postNewJewelryHandler(req: Request<{}, {}, PostNewJewelryInput['body']>, res: Response){
    try {
        const jewelry = await postNewJewelry(req.body);
        return res.status(200).json(jewelry)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateJewelryHandler(req: Request<PutUpdateJewelryInput['params']>, res: Response){
    const jewelryId = req.params.jewelryId;
    const jewelry = await getSingle({jewelryId})
    if (!jewelry){
        return res.sendStatus(404)
    }
    const update = req.body
    const updatedUser = await putUpdateJewelry({jewelryId}, update, {new: true})
    return res.status(200).json(updatedUser)
}
export async function deleteJewelryHandler(req: Request<PutUpdateJewelryInput['params']>, res: Response){
    const jewelryId = req.params.jewelryId;
    const jewelry = await getSingle({jewelryId})
    if (!jewelry){
        return res.sendStatus(404)
    }
    await deleteJewelry({jewelryId});
    return res.sendStatus(200)
}
