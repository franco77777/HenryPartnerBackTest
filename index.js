const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const productRoute = require("./routes/productRoute.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options("*", cors());

// allowedDomains = [Array of allowed sites]
// My website is listed in the array as "https://..."
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://francoaresis:elmafioso81291@testhenrypartner.g6tnura.mongodb.net/?retryWrites=true&w=majority&appName=TestHenryPartner"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen(3000, () => {
      console.log("server port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
