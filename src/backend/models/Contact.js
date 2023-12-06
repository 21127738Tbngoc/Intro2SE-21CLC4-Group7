const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    inquiry: {type: String}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
