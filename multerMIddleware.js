const multer = require("multer");
const path = require("path");

const { v4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    const fileName = v4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
