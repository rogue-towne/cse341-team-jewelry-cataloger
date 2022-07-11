import {object, string, number, date, TypeOf} from 'zod'

const payload = {
    body: object({
        metal_name: string(),
        metal_karatage: number(),
        metal_price: number(),
        diamond_price_per_carat: number(),
        gemstone_price_per_carat: number(),
        labor_total: number(),
        retail_modifier: number()
    })
}
const params = {
    params: object({
        marketId: string({
            required_error: "marketId is required"
        })
    })
}
export const postNewMarketSchema = object({
    ...payload
})
export const putUpdateMarketSchema = object({
    ...payload,
    ...params
})
export const deleteMarketSchema = object({
    ...params
})
export const getSingleSchema = object({
    ...params
})

//Export the interface for the market input
export type PostNewMarketInput = TypeOf<typeof postNewMarketSchema>;
export type PutUpdateMarketInput = TypeOf<typeof putUpdateMarketSchema>;
export type DeleteMarketInput = TypeOf<typeof deleteMarketSchema>;
export type GetSingleMarketInput = TypeOf<typeof getSingleSchema>;