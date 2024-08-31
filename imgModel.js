const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  img: {
    type: String,
    require: true,
  },
});

const Img = new mongoose.model("Img", imgSchema);

module.exports = Img;
