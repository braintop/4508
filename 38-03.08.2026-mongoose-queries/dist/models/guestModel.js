"use strict";
// models/guestModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestModel = void 0;
const mongoose_1 = require("mongoose");
const guestSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.GuestModel = (0, mongoose_1.model)('Guest', guestSchema);
