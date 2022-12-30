const multer = require("multer");
const uuidv4 = require("uuid/v4");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/upload");
  },
  filename: (req, file, cb) => {
    const fileName =
      uuidv4() + "-" + file.originalname.toLowerCase().split(" ").join("-");
    console.log(fileName);
    cb(null, fileName);
  },
});

exports.upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
