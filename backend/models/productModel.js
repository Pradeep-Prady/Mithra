const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  subCategory: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "SubCategory",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  additionalinfo: {
    type: String,
    required: true,
  },
});

let schema = mongoose.model("Product", productSchema);

module.exports = schema;
