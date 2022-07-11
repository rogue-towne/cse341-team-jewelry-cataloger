import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import JewelryModel, { JewelryDocument } from "../models/jewelry_model";

export async function getAll(){
    return JewelryModel.find();
}
export async function getSingle(query: FilterQuery<JewelryDocument>, options: QueryOptions = {lean: true}){
    return JewelryModel.findOne(query, {}, options)
}
export async function postNewJewelry(input: DocumentDefinition<JewelryDocument>){
    return JewelryModel.create(input);
}
export async function putUpdateJewelry(query: FilterQuery<JewelryDocument>, update: UpdateQuery<JewelryDocument>, options: QueryOptions){
    return JewelryModel.findOneAndUpdate(query, update, options)
}
export async function deleteJewelry(query: FilterQuery<JewelryDocument>){
    return JewelryModel.deleteOne(query)
}