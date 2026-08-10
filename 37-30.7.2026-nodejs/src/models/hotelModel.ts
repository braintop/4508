import { Schema, model } from 'mongoose';

const roomSchema = new Schema(
  {
    roomNumber: {
      type: Number,
      required: true
    },
    roomType: {
      type: String,
      required: true,
      enum: ['Single', 'Double', 'Suite']
    },
    pricePerNight: {
      type: Number,
      required: true,
      min: 0
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  }
);

const hotelSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      city: {
        type: String,
        required: true,
        trim: true
      },
      stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
      rooms: {
        type: [roomSchema],
        default: []
      }
    },
    {
      timestamps: true
    }
  );
  
export const HotelModel = model('Hotel', hotelSchema);
  