"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelModel = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
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
});
const hotelSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true
});
exports.HotelModel = (0, mongoose_1.model)('Hotel', hotelSchema);
