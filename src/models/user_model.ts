import mongoose from 'mongoose'
//import validator from 'validator'

//The typescript definition for this schema:
export interface UserDocument extends mongoose.Document{
    first_name: string,
    last_name: string,
    email_address: string,
    phone_number: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: string
    
}


const User_Data_Schema = new mongoose.Schema({
    first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email_address: {
		type: String,
		required: true,
		lowercase: true,
		unique: true
	},
	phone_number: {
		type: String,
		required: true
	},
	street_address: {
		type: String,
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
	state: {
		type: String,
		required: false
	},
	zipcode: {
		type: String,
		required: false
	}
})

const UserDataModel = mongoose.model<UserDocument>('user_data', User_Data_Schema);
export default UserDataModel;
