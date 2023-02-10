const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    pins: {
      type: [mongoose.Types.ObjectId],
      ref: "pin",
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("category", CategorySchema);
