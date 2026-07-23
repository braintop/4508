import { Schema, model } from 'mongoose';
const userSchema = new Schema(
    {
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
    },
    { timestamps: true }
)
export const UserModel = model('User', userSchema);