const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
      name: {type: String, required: true, unique: true},
      room: {type: String},
      category: {type: String},
      thumbnail: {type: String},
      price: {type: Number, required: true},
      sku: {type: String},
      images: {type: Array, required: true},
      description: {type: String, required: true,},
      quantity: {type: Number},
      measurement: {type: String},
      measure_img: {type: String},
      pattern: {type: String},
      tag: {type: Array},
      feedback: [
          {
              user: {type: Object},
              order: {type: Object},
              rating: {type: Number},
              content: {type: String}
          },
      ],
  },
  {timestamps: true}
);


module.exports = mongoose.model("Product", ProductSchema);
