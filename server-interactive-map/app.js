const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const indexRouter = require("./routes/index");
const pinRouter = require("./routes/pins");
const categoryRouter = require("./routes/category");
const aboutRouter = require("./routes/about");

require("dotenv").config();
mongoose.set("strictQuery", false);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["http://localhost:3001", "https://gullholmengo.se"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use("/", indexRouter);
app.use("/pins", pinRouter);
app.use("/about", aboutRouter);
app.use("/category", categoryRouter);

const URI = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

async function init() {
  try {
    await mongoose.connect(URI, options);
    console.log(`Connected to database`);
  } catch (err) {
    console.error(err);
  }

  app.listen(port, () =>
    console.log(`Server is up and running on port: ${port}`)
  );
}

init();

module.exports = app;
