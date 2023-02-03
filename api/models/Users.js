import mongoose from "mongoose";
const { Schema } = mongoose;

export const userModel = 'users'

const userSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    imageURL: { type: String, default: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' }
})

export default userSchema;