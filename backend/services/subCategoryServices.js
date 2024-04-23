const SubCategory = require("../models/subCategoryModel");
const { ObjectId } = require("mongodb");
const Product = require("../models/productModel");
exports.addSubCategory = async (categoryData) => {
  const result = await SubCategory.create(categoryData);
  return result;
};

exports.getSubCategoriesService = async (categoryId) => {
  const result = await SubCategory.find({ category: categoryId });
  return result;
};

exports.getSubCategorybyId = async (id) => {
  try {
    const result = await SubCategory.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.update = async (id, reqData) => {
  const result = await SubCategory.findByIdAndUpdate({ _id: id }, reqData, {
    new: true,
    runValidators: true,
  });
  return result;
};
exports.deleteSubCategory = async (id) => {
  try {
    await Product.deleteMany({ subCategory: id });

    const result = await SubCategory.deleteOne({ _id: id });

    return result;
  } catch (error) {
    throw new Error(
      `Error deleting subcategory and associated products: ${error.message}`
    );
  }
};
