"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
    },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
