import mongoose from 'mongoose';

//The typescript definition for this schema:
export interface JewelryDocument extends mongoose.Document{
    finger_size: number,
    metal_weight_grams: number,
    number_of_stones_1: number,
    number_of_stones_2: number,
    number_of_stones_3: number,
    cttw_stones_1: number,
    cttw_stones_2: number,
    cttw_stones_3: number,
    price_stones_1: number,
    price_stones_2: number,
    price_stones_3: number,
    labor_1:number,
    labor_2:number,
    labor_3:number,
    item_condition: string,
    appraisal_note: string,
    item_description: string
}

const Jewelry_Schema = new mongoose.Schema({
    finger_size: {
        type: Number,
        required: false
    },
    metal_weight_grams: {
        type: Number,
        required: false
    },
    number_of_stones_1: {
        type: Number,
        required: false
    },
    number_of_stones_2: {
        type: Number,
        required: false
    },
    number_of_stones_3: {
        type: Number,
        required: false
    },
    cttw_stones_1: {
        type: Number,
        required: false
    },
    cttw_stones_2: {
        type: Number,
        required: false
    },
    cttw_stones_3: {
        type: Number,
        required: false
    },
    price_stones_1: {
        type: Number,
        required: false
    },
    price_stones_2: {
        type: Number,
        required: false
    },
    price_stones_3: {
        type: Number,
        required: false
    },
    labor_1: {
        type: Number,
        required: false
    },
    labor_2: {
        type: Number,
        required: false
    },
    labor_3: {
        type: Number,
        required: false
    },
    item_condition: {
        type: String,
        required: false
    },
    appraisal_note: {
        type: String,
        required: false
    },
    item_description: {
        type: String,
        required: false
    }
}, {collection : 'jewelry_item_informations'})

    
const JewelryModel = mongoose.model<JewelryDocument>('jewelry_data', Jewelry_Schema);
export default JewelryModel;
