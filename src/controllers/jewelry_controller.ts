import {Request, Response} from 'express'
import JewelryModel from '../models/jewelry_model';
import { DeleteJewelryInput, GetSingleJewelryInput, PostNewJewelryInput, PutUpdateJewelryInput } from '../schema/jewelry_schema';


export async function getAllHandler(req: Request, res: Response){
    try {
        const jewelry = await JewelryModel.find();
        return res.status(200).json(jewelry)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function getSingleHandler(req: Request<GetSingleJewelryInput['params']>, res: Response){
    try { const jewelry = await JewelryModel.findById(req.params.jewelryId)
        return res.status(200).json(jewelry)
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function postNewJewelryHandler(req: Request<{}, {}, PostNewJewelryInput['body']>, res: Response){
    try {
        const jewelry = await JewelryModel.create(req.body);
        return res.status(201).json(jewelry)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateJewelryHandler(req: Request<PutUpdateJewelryInput['params']>, res: Response){
    try { 
        await JewelryModel.findByIdAndUpdate(req.params.jewelryId, req.body)
        res.send("Updated Jewelry item");
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function deleteJewelryHandler(req: Request<DeleteJewelryInput['params']>, res: Response){
    try { 
        const jewelry = await JewelryModel.findById(req.params.jewelryId)
        jewelry?.deleteOne()
        res.json('Deleted Jewelry item')
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    };
}
