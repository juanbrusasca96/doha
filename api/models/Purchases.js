import mongoose from "mongoose";
const { Schema } = mongoose

export const purchaseModel = 'purchases';

const purchaseSchema = new Schema({
    total: { type: Number, required: true },
    date: { type: Date, required: true },
    productsArray: { type: Array }
})

export default purchaseSchema;