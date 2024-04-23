const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");

const app = express();

dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const auth = require("./routes/auth");
const category = require("./routes/category");
const subCategory = require("./routes/subCategory");
const product = require("./routes/product");
const award = require("./routes/award");
const testimonial = require("./routes/testimonial");

app.use("/api/v1/", category);
app.use("/api/v1/", subCategory);
app.use("/api/v1/", product);
app.use("/api/v1/", auth);
app.use("/api/v1/", award);
app.use("/api/v1/", testimonial);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

app.use(errorMiddleware);

module.exports = app;
