import {object, string, number, TypeOf} from 'zod'

const payload = {
    body: object({
        finger_size: number(),
        metal_weight_grams: number(),
        number_of_stones_1: number(),
        number_of_stones_2: number(),
        number_of_stones_3: number(),
        cttw_stones_1: number(),
        cttw_stones_2: number(),
        cttw_stones_3: number(),
        price_stones_1: number(),
        price_stones_2: number(),
        price_stones_3: number(),
        labor_1:number(),
        labor_2:number(),
        labor_3:number(),
        item_condition: string(),
        appraisal_note: string(),
        item_description: string()
    })
}
const params = {
    params: object({
        jewelryId: string({
            required_error: "jewelryId is required"
        })
    })
}
export const postNewJewelrySchema = object({
    ...payload
})
export const putUpdateJewelrySchema = object({
    ...payload,
    ...params
})
export const deleteJewelrySchema = object({
    ...params
})
export const getSingleSchema = object({
    ...params
})

//Export the interface for the jewelry input
export type PostNewJewelryInput = TypeOf<typeof postNewJewelrySchema>;
export type PutUpdateJewelryInput = TypeOf<typeof putUpdateJewelrySchema>;
export type DeleteJewelryInput = TypeOf<typeof deleteJewelrySchema>;
export type GetSingleJewelryInput = TypeOf<typeof getSingleSchema>;