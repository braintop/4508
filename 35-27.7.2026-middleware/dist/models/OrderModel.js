"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
