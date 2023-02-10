var express = require("express");
var router = express.Router();
const PinModel = require("../models/pinModel");

/* GET pins */
router.get("/api", async (req, res, next) => {
  try {
    const pins = await PinModel.find().exec();
    res.json(pins);
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/category", async (req, res, next) => {
  const pins = await PinModel.find({ category: "badplats" }).lean().exec();
  res.json(pins);
});

router.get("/api/:id", async (req, res, next) => {
  const pins = await PinModel.findById({ _id: req.params.id });
  res.json(pins);
});

/* POST a pin */
router.post("/api/add", async (req, res, next) => {
  try {
    const newPin = await PinModel({
      ...req.body,
    });
    console.log(newPin);
    newPin.save();
    res.json("Pin saved");
  } catch (error) {
    console.log(error);
  }
});

/* UPDATE a pin */
router.put("/api/update", async (req, res, next) => {
  const { _id, information } = req.body;

  const pin = await PinModel.findById({ _id: _id });

  pin.information = information;
  await pin.save();
  res.json(pin);
});

/* DELETE a pin */
router.delete("/api/delete/:id", async (req, res, next) => {
  await PinModel.findByIdAndDelete({ _id: req.params.id });
  res.json("Pin successfully deleted");
});

module.exports = router;
