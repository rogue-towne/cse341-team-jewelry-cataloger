import {Request, Response} from 'express'
import MarketModel from '../models/market_model';
import { DeleteMarketInput, GetSingleMarketInput, PostNewMarketInput, PutUpdateMarketInput } from '../schema/market_schema';


export async function getAllHandler(req: Request, res: Response){
    try {
        const market = await MarketModel.find();
        return res.status(200).json(market)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function getSingleHandler(req: Request<GetSingleMarketInput['params']>, res: Response){
    try { const market = await MarketModel.findById(req.params.marketId)
        return res.status(200).json(market)
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function postNewMarketHandler(req: Request<{}, {}, PostNewMarketInput['body']>, res: Response){
    try {
        const market = await MarketModel.create(req.body);
        return res.status(201).json(market)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateMarketHandler(req: Request<PutUpdateMarketInput['params']>, res: Response){
    try { 
        await MarketModel.findByIdAndUpdate(req.params.marketId, req.body)
        res.send("Updated Market Instance");
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    }
}
export async function deleteMarketHandler(req: Request<DeleteMarketInput['params']>, res: Response){
    try { 
        const market = await MarketModel.findById(req.params.marketId)
        market?.deleteOne()
        res.json('Deleted Market Instance')
    } catch {
        res.status(400).json("Invalid ID")
        res.status(500).json("Internal Server Error")
    };
}