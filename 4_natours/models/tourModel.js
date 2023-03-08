const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a grp size"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty level"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQauntity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "a tour must have a price"],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    require: [true, "A tour must have a description"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  image: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
