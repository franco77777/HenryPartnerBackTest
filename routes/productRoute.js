const express = require("express");
const Product = require("../models/productModel.js");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFilteredProducts,
  getPaginateProducts,
} = require("../controllers/productControllers.js");
router.get("/pagination", getPaginateProducts);
router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.get("/filter/:filtered", getFilteredProducts);
//router.get("/paginate", getPaginateProducts);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
