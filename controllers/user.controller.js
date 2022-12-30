const User = require("./../models/user.schema");

exports.getData = async (_, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      message: "User list retrieved successfully!",
      users: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.saveData = async (req, res) => {
  try {
    console.log("hi");
    // const user = new User({
    //   name: req.body.name,
    //   profileImg: req.file.filename,
    // });
    // await user.save();
    // res.status(201).json({
    //   message: "User registered successfully!",
    //   user: user,
    // });
    res.status(200).json({
      message: "message",
    });
  } catch (error) {
    console.log(error),
      res.status(400).json({
        error: error,
      });
  }
};
