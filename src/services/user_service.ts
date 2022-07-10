import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import UserDataModel, { UserDocument } from "../models/user_model";

export async function getAll(){
    return UserDataModel.find();
}
export async function getSingle(query: FilterQuery<UserDocument>, options: QueryOptions = {lean: true}){
    return UserDataModel.findOne(query, {}, options)
}
export async function postNewUser(input: DocumentDefinition<UserDocument>){
    return UserDataModel.create(input);
}
export async function putUpdateUser(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions){
    return UserDataModel.findOneAndUpdate(query, update, options)
}
export async function deleteUser(query: FilterQuery<UserDocument>){
    return UserDataModel.deleteOne(query)
}