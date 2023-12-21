const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    price: { type: Number, required: true },
    tags: {type: Array},
    img: { type: Array, required: true },
    categories: { type: Array },
    brand: {type: String},
    qty: { type: Number },
    color: { type: String },
    pattern: {type: String},
    feedback: [
            {
                user:{type: Object},
                order: {type: Object},
                rating:{type: Number},
                content: {type: String}
            },
        ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
