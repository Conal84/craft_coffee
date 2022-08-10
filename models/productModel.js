const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    maxlength: [20, "A produt name must be less than or equal to 20 chars"],
    lowercase: true,
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    maxlength: [40, "A produt name must be less than or equal to 40 chars"],
  },
  roast: {
    type: Number,
    default: 3,
    min: [1, "Roast level minimum is 1"],
    max: [5, "Roast level maximum is 5"],
  },
  best_brew_method: {
    type: String,
    enum: {
      values: ["wholebean", "cafetiere", "filter"],
      message: "Best brew method is either Wholebean, Cafetiere or Filter",
    },
    required: [true, "A product must have a best brew method"],
  },
  ordered: {
    type: Number,
    default: 0,
  },
  dateAdded: { type: Date, default: Date.now },
  images: [
    {
      small: {
        type: String,
        default: "defaultImage.jpg",
      },
      medium: {
        type: String,
        default: "defaultImage.jpg",
      },
      large: {
        type: String,
        default: "defaultImage.jpg",
      },
    },
  ],
  variants: [
    {
      size: {
        type: Number,
        default: 250,
      },
      grind: {
        type: String,
        default: "Wholebean",
      },
      price: mongoose.Schema.Types.Decimal128,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
