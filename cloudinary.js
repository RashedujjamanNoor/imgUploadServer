const v2 = require("cloudinary");
const cloudinary = v2;
const fs = require("fs");
// Configuration
cloudinary.config({
  cloud_name: "ddfyfjzhy",
  api_key: "387269963483872",
  api_secret: "XNan1YzOa0Sd3R5hZ7rY2HDVROg", // Click 'View API Keys' above to copy your API secret
});

const uploadImageOnCloudinary = async (filePath, folderName) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      folder: folderName,
    });
    try {
      fs.unlinkSync(filePath);
    } catch (error) {
      console.log(error);
    }

    return {
      secure_url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = uploadImageOnCloudinary;
