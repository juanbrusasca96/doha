import mongoose from 'mongoose';
const { Schema } = mongoose;

export const productModel='products';

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    limitStock: { type: Number },
    category: { type: String, enum: ['Vino', 'Espumante', 'Aperitivo', 'Cerveza', 'Gaseosa', 'Jugo', 'Energizante', 'Vodka', 'Ron', 'Gin', 'Licor', 'Whiskey', 'Promo', 'Consumo en el local'], required: true }
})

export default productSchema;