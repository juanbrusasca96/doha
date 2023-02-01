import mongoose from "mongoose";
const { Schema } = mongoose;

export const userModel = 'users'

const userSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true }
})

export default userSchema;