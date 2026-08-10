// models/hotelModel.ts

import { Schema, model } from 'mongoose';

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    stars: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const HotelModel = model('Hotel', hotelSchema);