import {object, string, TypeOf} from 'zod'

const payload = {
    body: object({
        insurance_company: string({
            required_error: "Insurance company is required"
        }),
        insurance_agent: string(),
        insurance_policy: string({
            required_error: "Insurance policy is required"
        })
    })
}
const params = {
    params: object({
        insuranceId: string({
            required_error: "insuranceId is required"
        })
    })
}

export const postNewInsuranceSchema = object({
    ...payload
})
export const putUpdateInsuranceSchema = object({
    ...payload,
    ...params
})
export const deleteInsuranceSchema = object({
    ...params
})
export const getSingleSchema = object({
    ...params
})

//Export the interface for the insurance input
export type PostNewInsuranceInput = TypeOf<typeof postNewInsuranceSchema>;
export type PutUpdateInsuranceInput = TypeOf<typeof putUpdateInsuranceSchema>;
export type DeleteInsuranceInput = TypeOf<typeof deleteInsuranceSchema>;
export type GetSingleInsuranceInput = TypeOf<typeof getSingleSchema>;