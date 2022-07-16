import {Request, Response} from 'express'
import UserInsuranceModel from '../models/insurance_model';
import { DeleteInsuranceInput, GetSingleInsuranceInput, PostNewInsuranceInput, PutUpdateInsuranceInput } from '../schema/insurance_schema';

export async function postNewInsuranceHandler(req: Request<{}, {}, PostNewInsuranceInput['body']>, res: Response){
    try {
        const insurance = await UserInsuranceModel.create(req.body);
        return res.status(201).json(insurance)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function deleteInsuranceHandler(req: Request<DeleteInsuranceInput['params']>, res: Response){
    try { 
        const insurance = await UserInsuranceModel.findById(req.params.insuranceId)
        insurance?.deleteOne()
        res.json('Deleted Insurance')
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    };
}
export async function getSingleHandler(req: Request<GetSingleInsuranceInput['params']>, res: Response){
    try { const insurance = await UserInsuranceModel.findById(req.params.insuranceId)
        return res.status(200).json(insurance)
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function getAllHandler(req: Request, res: Response){
    try {
        const insurances = await UserInsuranceModel.find();
        return res.status(200).json(insurances)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function putUpdateInsuranceHandler(req: Request<PutUpdateInsuranceInput['params']>, res: Response){
    try { 
        await UserInsuranceModel.findByIdAndUpdate(req.params.insuranceId, req.body)
        res.send("Updated Insurance");
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}