import mongoose from "mongoose";
const { Schema } = mongoose

export const dayModel = 'days';

const daySchema = new Schema({
    total: { type: Number, default: 0 },
    date: { type: Date, required: true },
    initialAmount: { type: Number, default: 0 },
    transferAmount: { type: Number, default: 0 },
    mercadoPagoAmount: { type: Number, default: 0 },
    cashAmount: { type: Number, default: 0 }
})

export default daySchema;