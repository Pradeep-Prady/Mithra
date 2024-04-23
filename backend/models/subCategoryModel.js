const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

let schema = mongoose.model("SubCategory", subCategorySchema);
module.exports = schema;
