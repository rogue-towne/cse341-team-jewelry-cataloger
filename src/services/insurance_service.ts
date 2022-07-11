import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import UserInsuranceModel, {UserInsuranceDocument} from "../models/insurance_model";

export async function getAll(){
    return UserInsuranceModel.find();
}
export async function getSingle(query: FilterQuery<UserInsuranceDocument>, options: QueryOptions = {lean: true}){
    return UserInsuranceModel.findOne(query, {}, options)
}
export async function postNewInsurance(input: DocumentDefinition<UserInsuranceDocument>){
    return UserInsuranceModel.create(input);
}
export async function putUpdateInsurance(query: FilterQuery<UserInsuranceDocument>, update: UpdateQuery<UserInsuranceDocument>, options: QueryOptions){
    return UserInsuranceModel.findOneAndUpdate(query, update, options)
}
export async function deleteInsurance(query: FilterQuery<UserInsuranceDocument>){
    return UserInsuranceModel.deleteOne(query)
}