import {Request, Response} from 'express'
import { GetSingleInsuranceInput, PostNewInsuranceInput, PutUpdateInsuranceInput } from '../schema/insurance_schema';
import { deleteInsurance, getAll, getSingle, postNewInsurance, putUpdateInsurance } from '../services/insurance_service';

export async function postNewInsuranceHandler(req: Request<{}, {}, PostNewInsuranceInput['body']>, res: Response){
    try {
        const insurance = await postNewInsurance(req.body);
        return res.status(200).json(insurance)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function deleteInsuranceHandler(req: Request<PutUpdateInsuranceInput['params']>, res: Response){
    const insuranceId = req.params.insuranceId;
    const insurance = await getSingle({insuranceId})
    if (!insurance){
        return res.sendStatus(404)
    }
    await deleteInsurance({insuranceId});
    return res.sendStatus(200)
}
export async function getSingleHandler(req: Request<GetSingleInsuranceInput['params']>, res: Response){
    const insuranceId = req.params.insuranceId;
    const insurance = await getSingle({insuranceId})
    if (!insurance){
        return res.sendStatus(404)
    }
    return res.status(200).json(insurance)
}
export async function getAllHandler(req: Request, res: Response){
    try {
        const insurances = await getAll();
        return res.status(200).json(insurances)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function putUpdateInsuranceHandler(req: Request<PutUpdateInsuranceInput['params']>, res: Response){
    const insuranceId = req.params.insuranceId;
    const insurance = await getSingle({insuranceId})
    if (!insurance){
        return res.sendStatus(404)
    }
    const update = req.body
    const updatedInsurance = await putUpdateInsurance({insuranceId}, update, {new: true})
    return res.status(200).json(updatedInsurance)
}