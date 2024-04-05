const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.paginate();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: " not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "not found" });
    }

    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFilteredProducts = async (req, res) => {
  try {
    const { filtered } = req.params;

    const products = await Product.paginate({
      name: new RegExp("^" + filtered + "$", "i"),
    });
    if (!products) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaginateProducts = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const name = req.query.name || null;
  if (!name) {
    const products = await Product.paginate({}, { limit, page });

    console.log("products", products);
    res.json(products);
  } else {
    const products = await Product.paginate(
      {
        name: new RegExp("^" + name + "$", "i"),
      },
      { limit, page }
    );
    //console.log(products);
    res.status(200).json(products);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFilteredProducts,
  getPaginateProducts,
};
