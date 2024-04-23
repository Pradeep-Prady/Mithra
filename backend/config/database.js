const mongoose = require("mongoose");

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "/config.env") });

const uri = process.env.DB_LOCAL_URI;

const connectDatabase = () => {
  mongoose
    .connect(uri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;