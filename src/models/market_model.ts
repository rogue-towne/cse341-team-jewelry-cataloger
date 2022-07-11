import mongoose from 'mongoose';

export interface MarketDocument extends mongoose.Document{
    metal_name: string,
    metal_karatage: number,
    metal_price: number,
    diamond_price_per_carat: number,
    gemstone_price_per_carat: number,
    labor_total: number,
    retail_modifier: number
}

const Market_Schema = new mongoose.Schema({
    entry_date: {
      type: Date,
      default: Date.now
    },
    metal_name: {
      type: String,
      required: false
    },
    metal_karatage: {
      type: Number,
      required: false
    },
    metal_price: {
      type: Number,
      required: false
    },
    diamond_price_per_carat: {
      type: Number,
      required: false
    },
    gemstone_price_per_cart: {
      type: Number,
      required: false
    },
    labor_total: {
      type: Number,
      required: false,
      validate: {
        validator: Number.isInteger,
        message: 'Labor total should contain an integer value only'
      },
    },
    retail_modifier: {
      type: Number,
      required: false,
    },
  }, {collection : 'Market_Data'});

  const MarketModel = mongoose.model<MarketDocument>('Market_data', Market_Schema);
export default MarketModel;