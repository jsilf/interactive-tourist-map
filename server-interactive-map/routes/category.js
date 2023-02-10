var express = require("express");
const CategoryModel = require("../models/categoryModel");
var router = express.Router();

/* GET */
router.get("/api", async (req, res, next) => {
  try {
    const category = await CategoryModel.find().populate("pins").lean().exec();
    res.json(category);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.get("/api/badplats", async (req, res, next) => {
  const category = await CategoryModel.find({ category: "badplats" })
    .populate("pins")
    .lean()
    .exec();
  res.json(category);
});

/* POST */
router.post("/api/add", async (req, res, next) => {
  try {
    const newCategory = await CategoryModel({
      ...req.body,
    });
    console.log(newCategory);
    // newCategory.save();
    res.json("Category saved");
  } catch (error) {
    console.log(error);
  }
});

/* UPDATE */
router.put("/api/update", async (req, res, next) => {
  const { _id, pin } = req.body;

  const category = await CategoryModel.findById({ _id: _id });

  category.pins = pin;
  await pin.save();
  res.json(pin);
});

/* DELETE */
router.delete("/api/delete/:id", async (req, res, next) => {
  await CategoryModel.findByIdAndDelete({ _id: req.params.id });
  res.json("Category successfully deleted");
});

module.exports = router;
