import mongoose from 'mongoose';
const { Schema } = mongoose;

export const productModel = 'products';

const productSchema = new Schema({
    name: { type: String, required: true },
    purchasePrice: { type: Number },
    recommendedRetailPrice: { type: Number },
    price: { type: Number, required: true },
    size: { type: String, default: '-' },
    unitSize: { type: String, enum: ['ml', 'L', 'kg'] },
    image: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GgAnJGA512_xkQEw7WimR_PDkeajIEG1_A&usqp=CAU' },
    stock: { type: Number },
    limitStock: { type: Number },
    category: { type: String, enum: ['Vino', 'Espumante', 'Aperitivo', 'Cerveza', 'Gaseosa', 'Jugo', 'Energizante', 'Vodka', 'Ron', 'Gin', 'Licor', 'Whiskey', 'Tequila', 'Promo', 'Consumo en el local'], required: true },
    color: { type: String, enum: ['-', 'Tinto', 'Blanco', 'Rosado', 'Rubia', 'Negra', 'Roja'], default: '-' },
    idProducts: { Type: Array }
})

export default productSchema;