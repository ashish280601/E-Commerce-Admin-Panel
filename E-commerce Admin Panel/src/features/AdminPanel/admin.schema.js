import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: String,
    quantity: Number,
})

export default adminSchema;