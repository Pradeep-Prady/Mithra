const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

let schema = mongoose.model("Testimonial", testimonialSchema);

module.exports = schema;
