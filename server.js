const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");

const addProductController = require("./productController");
const upload = require("./multerMIddleware");

const app = express();
app.use(express.json());
app.use(cors());

const mongoURL =
  "mongodb+srv://noorrk042:H527b8LjgBjoyXFM@cluster0.n0smj.mongodb.net/upload";

mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch(() => console.log(error));

app.listen(5000, () => {
  try {
    console.log("server is running at port: 5000");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  try {
    return res.status(200).json("upload successfull");
  } catch (error) {
    console.log(error);
  }
});

app.post("/", upload.single("picture"), addProductController);
