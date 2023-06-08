const Model = require("../model");

const createSchema = async (req, res) => {
  try {
    const { fname, lname, email, phone } = req.body;
    const exist = await Model.findOne({ email });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: "this email is already exist",
      });
    }
    const newData = new Model({
      fname,
      lname,
      email,
      phone,
    });
    const savedData = await newData.save();
    return res.status(200).json({ success: true, savedData });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "somthing is wrong!!!",
      error: error.message,
    });
  }
};

const getSchema = async (req, res) => {
  try {
    const data = await Model.find();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteSchema = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const singleSchema = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findById(id);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSchema = async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
    };
    const data = await Model.findByIdAndUpdate(id, newUser);
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "not a valid id",
      });
    }
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = {
  createSchema,
  getSchema,
  singleSchema,
  updateSchema,
  deleteSchema,
};
