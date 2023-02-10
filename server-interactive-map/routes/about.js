var express = require("express");
const AboutModel = require("../models/aboutModel");
var router = express.Router();

router.get("/api", async (req, res, next) => {
  const info = await AboutModel.find().lean().exec();
  console.log(info);
  res.json(info);
});

router.post("/api/add", async (req, res, next) => {
  try {
    const newInfo = await AboutModel({
      ...req.body,
    });
    console.log(newInfo);
    newInfo.save();
    res.json("Info sparad");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
