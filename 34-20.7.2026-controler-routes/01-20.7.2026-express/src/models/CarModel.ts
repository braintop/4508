import { Schema, model } from 'mongoose';
const carSchema = new Schema(
    {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
          max:1000000
        },  
      }
    )
export const CarModel = model('Car', carSchema);