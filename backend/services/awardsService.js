const Awards = require("../models/awardsModel");

exports.addData = async (data) => {
  const result = await Awards.create(data);
  return result;
};

exports.getAllDatas = async () => {
  const result = await Awards.find();
  return result;
};

exports.getById = async (id) => {
  try {
    const result = await Awards.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.UpdateById = async (id, reqData) => {
  const result = await Awards.findByIdAndUpdate({ _id: id }, reqData, {
    new: true,
    runValidators: true,
  });
  return result;
};
exports.deleteById = async (id) => {
  const result = await Awards.deleteOne({ _id: id });
  return result;
};
