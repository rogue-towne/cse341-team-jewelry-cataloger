import mongoose from 'mongoose'

//The typescript definition for this schema:
export interface UserInsuranceDocument extends mongoose.Document{
    insurance_company: string,
    insurance_agent: string,
    insurance_policy: string,  
}

const User_Insurance_Schema = new mongoose.Schema({
    insurance_company: {
        type: String,
        required: true,
      },
      insurance_agent: {
        type: String,
        required: false,
      },
      insurance_policy: {
        type: String,
        required: true,
      },
    }, {collection : 'user_information_infos'})

const UserInsuranceModel = mongoose.model<UserInsuranceDocument>('user_insurance_data', User_Insurance_Schema);
export default UserInsuranceModel;