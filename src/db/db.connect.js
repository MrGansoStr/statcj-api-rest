const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conected DB"))
  .catch(err => console.log("No conected db", err))

module.exports = mongoose;