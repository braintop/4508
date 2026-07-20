import { Schema, model } from 'mongoose';
const flightSchema = new Schema(
    {
        price: {
          type: Number,
          required: true,
          min: 0,
          max:1000000
        },
        from: {
          type: String,
          required: true,
        },
        to: {
          type: String,
          required: true,
        },
        pilotName   : {
          type: String,
          required: true,
        }
    }

    )
export const FlightModel = model('Flight', flightSchema);