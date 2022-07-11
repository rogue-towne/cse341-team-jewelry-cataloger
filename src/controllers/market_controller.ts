import {Request, Response} from 'express'
import { GetSingleMarketInput, PostNewMarketInput, PutUpdateMarketInput } from '../schema/market_schema';
import { deleteMarket, getAll, getSingle, postNewMarket, putUpdateMarket} from '../services/market_service'


export async function getAllHandler(req: Request, res: Response){
    try {
        const market = await getAll();
        return res.status(200).json(market)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message}) 
    }
}
export async function getSingleHandler(req: Request<GetSingleMarketInput['params']>, res: Response){
    const marketId = req.params.marketId;
    const market = await getSingle({marketId})
    if (!market){
        return res.sendStatus(404)
    }
    return res.status(200).json(market)
}
export async function postNewMarketHandler(req: Request<{}, {}, PostNewMarketInput['body']>, res: Response){
    try {
        const market = await postNewMarket(req.body);
        return res.status(200).json(market)
    } catch (err: any) {
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
}
export async function putUpdateMarketHandler(req: Request<PutUpdateMarketInput['params']>, res: Response){
    const marketId = req.params.marketId;
    const market = await getSingle({marketId})
    if (!market){
        return res.sendStatus(404)
    }
    const update = req.body
    const updatedUser = await putUpdateMarket({marketId}, update, {new: true})
    return res.status(200).json(updatedUser)
}
export async function deleteMarketHandler(req: Request<PutUpdateMarketInput['params']>, res: Response){
    const marketId = req.params.marketId;
    const market = await getSingle({marketId})
    if (!market){
        return res.sendStatus(404)
    }
    await deleteMarket({marketId});
    return res.sendStatus(200)
}