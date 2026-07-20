import { Schema, model } from 'mongoose';
import { privateDecrypt } from 'node:crypto';
const productSchema = new Schema(
    {
        name: {
          type: String,
          required: true,
          trim: true,
        },
    
        price: {
          type: Number,
          required: true,
          min: 0,
          max:1000000
        },
    
        stock: {
          type: Number,
          required: true,
          min: 0,
        },
    
        category: {
          type: String,
          trim: true,
        },
    
        description: {
          type: String,
        },
    
        isAvailable: {
          type: Boolean,
          default: true,
        },
      }
    )
export const ProductModel = model('Product', productSchema);