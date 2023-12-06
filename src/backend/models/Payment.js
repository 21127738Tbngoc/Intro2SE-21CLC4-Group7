const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    user: {type: Object},
    payment_method: {type: String},
    credit_card_number: {type: String},
    cvv_number: {type: Number},
    otp: {type: String},
    status: String
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
