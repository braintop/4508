import { Schema, model } from 'mongoose';
const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
            max: 1000000
        },
        pages: {
            type: Number,
            required: true,
            min: 0,
            max: 1000000
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        instock: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    { timestamps: true }
)

export const BookModel = model('Book', bookSchema);