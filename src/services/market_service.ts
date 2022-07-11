import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import MarketModel, { MarketDocument } from "../models/market_model";

export async function getAll(){
    return MarketModel.find();
}
export async function getSingle(query: FilterQuery<MarketDocument>, options: QueryOptions = {lean: true}){
    return MarketModel.findOne(query, {}, options)
}
export async function postNewMarket(input: DocumentDefinition<MarketDocument>){
    return MarketModel.create(input);
}
export async function putUpdateMarket(query: FilterQuery<MarketDocument>, update: UpdateQuery<MarketDocument>, options: QueryOptions){
    return MarketModel.findOneAndUpdate(query, update, options)
}
export async function deleteMarket(query: FilterQuery<MarketDocument>){
    return MarketModel.deleteOne(query)
}