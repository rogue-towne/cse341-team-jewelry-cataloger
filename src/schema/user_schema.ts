import { TypeKeyBaseType } from 'mongoose'
import {object, string, TypeOf} from 'zod'

export const postNewUserSchema = object({
    body: object({
        first_name: string({
            required_error: "First Name is required"
        }),

        last_name: string({
            required_error: "Last Name is required"
        }),

        email_address: string({
            required_error: "Email Address is required"
        }).email({ message: "Not a valid email"}),

        phone_number: string()
            .min(10, { message: "Must be 10 or more characters long"})
            .regex(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, {message: "Please use form (000)-000-000"}),

        street_address: string(),
        city: string(),
        state: string(),
        
        zipcode: string()
            .min(5, "Must be at least 5 characters long")
            .max(9, "Cannot be more than 9 characters long")
    })
})

//Export the interface for the user input
export type PostNewUserInput = TypeOf<typeof postNewUserSchema>;