const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    subtitle: {type: String},
    title: {type: String},
    thumbnail: {type: String},
    author: {type: String},
    publish_time: {type: Date},
    description: {type: String}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
