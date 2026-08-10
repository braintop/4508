"use strict";
// models/bookingModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    hotel: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    guest: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
exports.BookingModel = (0, mongoose_1.model)('Booking', bookingSchema);
