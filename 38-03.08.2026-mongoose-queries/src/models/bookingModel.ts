// models/bookingModel.ts

import { Schema, model } from 'mongoose';
//a 
const bookingSchema = new Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true,
    },

    guest: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    days: {
      type: Number,
      required: true,
      min: 1,
    },

    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Cancelled', 'Finished'],
      default: 'Pending',
    },

    checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BookingModel = model('Booking', bookingSchema);