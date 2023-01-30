import mongoose from "mongoose";
const { Schema } = mongoose;

export const tableModel = 'tables'

const tableSchema = new Schema({
    total: { type: Number, required: true },
    date: { type: Date, required: true },
    name: { type: String, required: true, default: 'm1' },
    idProducts: { type: Array, required: true },
    active: { type: Boolean, required: true }
})

export default tableSchema;