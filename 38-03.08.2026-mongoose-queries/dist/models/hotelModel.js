"use strict";
// models/hotelModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelModel = void 0;
const mongoose_1 = require("mongoose");
const hotelSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.HotelModel = (0, mongoose_1.model)('Hotel', hotelSchema);
