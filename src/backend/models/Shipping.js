const mongoose = require("mongoose");

const ShippingSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, unique: true },
    shipping_address: { type: String, required: true, },
    province: {type: String},
    district: {type: String},
    ward: {type: String},
    street: {type: String},
    house_number: {type: String},
    shipping_fee: {type: Number},
    status: {type: String}


    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipping", ShippingSchema);
