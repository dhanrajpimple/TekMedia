
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require('dotenv').config();
cloudinary.config({
  cloud_name:process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret:process.env.api_secret
});
module.exports = cloudinary;