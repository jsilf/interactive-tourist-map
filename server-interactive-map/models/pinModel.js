const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
      unique: true,
    },
    long: {
      type: Number,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    information: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("pin", PinSchema);
