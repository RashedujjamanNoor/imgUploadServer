const uploadImageOnCloudinary = require("./cloudinary");
const Product = require("./productModel.js");

const addProductController = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const picture = req.file?.fieldname;
    const picturePath = req.file?.path;
    if (!title || !description || !price || !picture) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const { secure_url, public_id } = await uploadImageOnCloudinary(
      picturePath,
      "Products"
    );

    if (!secure_url) {
      return res.status(400).json({ message: "Error" });
    }

    const product = await Product.create({
      title,
      description,
      price,
      picture: {
        picture_url: secure_url,
        public_id,
      },
    });
    return res
      .status(200)
      .json({ message: "Image uploaded succesfully", product });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addProductController;
