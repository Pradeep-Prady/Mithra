const Testimonial = require("../models/testimonialModel");

exports.addData = async (data) => {
  const result = await Testimonial.create(data);
  return result;
};

exports.getAllDatas = async () => {
  const result = await Testimonial.find();
  return result;
};

exports.getById = async (id) => {
  try {
    const result = await Testimonial.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.UpdateById = async (id, reqData) => {
  const result = await Testimonial.findByIdAndUpdate({ _id: id }, reqData, {
    new: true,
    runValidators: true,
  });
  return result;
};
exports.deleteById = async (id) => {
  const result = await Testimonial.deleteOne({ _id: id });
  return result;
};
