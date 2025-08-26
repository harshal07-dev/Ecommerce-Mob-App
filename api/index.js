const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const colors = require("colors");

const app = express();

const PORT = 8000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://Harshal:commerceapp@cluster0.ys1aqhy.mongodb.net/")
  .then(() => {
    console.log(`Connected to MongoDB`.green.bold);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });


app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`.yellow.bold);
})