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
    // required: [true, "A product must have a description"],
    maxlength: [40, "A produt name must be less than or equal to 40 chars"],
  },
  roast: {
    type: Number,
    default: 3,
    min: [1, "Roast level minimum is 1"],
    max: [5, "Roast level maximum is 5"],
  },
  image: [
    {
      small: String,
      // required: [true, "A product must have a small image"],
    },
    {
      medium: String,
      // required: [true, "A product must have a medium image"],
    },
    {
      large: String,
      // required: [true, "A product must have a large image"],
    },
  ],
  dateAdded: { type: Date, default: Date.now },
  variants: [
    {
      sku: String,
      size: {
        type: Number,
        default: 250,
        immutable: true,
      },
      grind: {
        type: String,
        default: "Wholebean",
        immutable: true,
      },
      price: Number,
      ordered: {
        type: Number,
        default: 0,
      },
    },
    {
      sku: String,
      size: {
        type: Number,
        default: 500,
        immutable: true,
      },
      grind: {
        type: String,
        default: "Wholebean",
        immutable: true,
      },
      price: Number,
      ordered: {
        type: Number,
        default: 0,
      },
    },
    {
      sku: String,
      size: {
        type: Number,
        default: 1000,
        immutable: true,
      },
      grind: {
        type: String,
        default: "Wholebean",
        immutable: true,
      },
      price: Number,
      ordered: {
        type: Number,
        default: 0,
      },
    },
  ],
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create() DOES NOT WORK for FindByIdAndUpdate for example
productSchema.pre("save", function (next) {
  this.variants.sku = this.name + this.variants.size + this.variants.grind;
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
