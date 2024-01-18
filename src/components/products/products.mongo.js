const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryImage: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  includes: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  gallery: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  others: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

module.exports = mongoose.model('product', productsSchema);