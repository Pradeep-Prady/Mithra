const Category = require("../models/categoryModel");

exports.add = async (categoryData) => {
  const result = await Category.create(categoryData);
  return result;
};

exports.getCategoriesService = async () => {
  const result = await Category.find();
  return result;
};

exports.getCategorybyId = async (id) => {
  try {
    const result = await Category.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.update = async (id, reqData) => {
  const result = await Category.findByIdAndUpdate({ _id: id }, reqData, {
    new: true,
    runValidators: true,
  });
  return result;
};
exports.deleteCategory = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  return result;
};
