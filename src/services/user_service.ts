import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import UserDataModel, { UserDocument } from "../models/user_model";

export async function getAll(query: FilterQuery<UserDocument>){
    return UserDataModel.find(query)
}
export async function getSingle(query: FilterQuery<UserDocument>, options: QueryOptions = {lean: true}){
    return UserDataModel.findOne(query, {}, options)
}
export async function postNewUser(input: DocumentDefinition<UserDocument>){
    try {
        return await UserDataModel.create(input);
    } catch (err: any) {
        throw new Error(err);
    }
    
}
export async function putUpdateUser(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions){
    return UserDataModel.findOneAndUpdate(query, update, options)
}
export async function deleteUser(query: FilterQuery<UserDocument>){
    return UserDataModel.deleteOne(query)
}