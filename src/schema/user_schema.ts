import {object, string, TypeOf} from 'zod'

const payload = {
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
            .min(10, { message: "Must be 10 or more characters long"}),
        street_address: string(),
        city: string(),
        state: string(),
        
        zipcode: string()
            .min(5, "Must be at least 5 characters long")
            .max(9, "Cannot be more than 9 characters long")
    })
}
const params = {
    params: object({
        userId: string({
            required_error: "userId is required"
        })
    })
}

export const postNewUserSchema = object({
    ...payload
})
export const putUpdateUserSchema = object({
    ...payload,
    ...params
})
export const deleteUserSchema = object({
    ...params
})
export const getSingleSchema = object({
    ...params
})

//Export the interface for the user input
export type PostNewUserInput = TypeOf<typeof postNewUserSchema>;
export type PutUpdateUserInput = TypeOf<typeof putUpdateUserSchema>;
export type DeleteUserInput = TypeOf<typeof deleteUserSchema>;
export type GetSingleUserInput = TypeOf<typeof getSingleSchema>;