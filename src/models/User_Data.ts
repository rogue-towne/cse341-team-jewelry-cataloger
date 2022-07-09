import mongoose from 'mongoose'
import validator from 'validator'

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
		required: true,
		validate: [validator.isAlpha, 'First name should only contain letters'],
	},
	last_name: {
		type: String,
		required: true,
		validate: [validator.isAlpha, 'Last name should only contain letters'],
	},
	email_address: {
		type: String,
		required: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please enter a valid email'],
	},
	phone_number: {
		type: String,
		required: true,
		match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
		minlength: [10, 'Minimum phone number length is 10 digits'],
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
		required: false,
		validate: [
			validator.isAlphanumeric,
			'State should only contain letters and numbers',
		],
	},
	zipcode: {
		type: String,
		required: false,
		minlength: [5, 'Minimum zip code length is 5 characters'],
	}
})

const UserDataModel = mongoose.model('user_data', User_Data_Schema);
export default UserDataModel;
