const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("about", AboutSchema);
