import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    guestName: {
      type: String,
      required: true,
      trim: true,
    },

    guestEmail: {
      type: String,
      required: true,
      trim: true,
    },

    hotelName: {
      type: String,
      required: true,
      trim: true,
    },

    roomNumber: {
      type: Number,
      required: true,
      min: 1,
    },

    numberOfGuests: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    },

    checkInDate: {
      type: Date,
      required: true,
    },

    checkOutDate: {
      type: Date,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },

    breakfastIncluded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model('Order', orderSchema);