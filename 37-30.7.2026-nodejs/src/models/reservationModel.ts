import { Schema, model, Types } from 'mongoose';

export interface Reservation {
  customer: Types.ObjectId;//_id of the customer
  hotel: Types.ObjectId;
  roomNumber: number;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const reservationSchema = new Schema<Reservation>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true
    },
    roomNumber: {
      type: Number,
      required: true
    },
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
      required: true
    },
    numberOfGuests: {
      type: Number,
      required: true,
      min: 1
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

export const ReservationModel = model<Reservation>(
  'Reservation',
  reservationSchema
);
