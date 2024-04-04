const express = require("express");
const Product = require("../models/productModel.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFilteredProducts,
} = require("../controllers/productControllers.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/filter/:filtered", getFilteredProducts);
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
