const Product = require("../models/productModel");

exports.addData = async (data) => {
  const result = await Product.create(data);
  return result;
};

exports.getAllDatas = async (subCategoryId) => {
  const result = await Product.find({ subCategory: subCategoryId });
  return result;
};

exports.getById = async (id) => {
  try {
    const result = await Product.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.UpdateById = async (id, reqData) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, reqData, {
    new: true,
    runValidators: true,
  });
  return result;
};
exports.deleteById = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
