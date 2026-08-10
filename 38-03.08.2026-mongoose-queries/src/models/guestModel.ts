// models/guestModel.ts

import { Schema, model } from 'mongoose';

const guestSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    vip: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const GuestModel = model('Guest', guestSchema);