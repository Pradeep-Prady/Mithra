const mongoose = require("mongoose");

const awardsSchema = mongoose.Schema({
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

let schema = mongoose.model("Awards", awardsSchema);

module.exports = schema;
