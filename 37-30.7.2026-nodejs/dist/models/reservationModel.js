"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationModel = void 0;
const mongoose_1 = require("mongoose");
const reservationSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    hotel: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true
});
exports.ReservationModel = (0, mongoose_1.model)('Reservation', reservationSchema);
