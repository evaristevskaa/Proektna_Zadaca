const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tournament name is required"],
      trim: true
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ["Grand Slam", "WTA 1000", "WTA 500", "WTA 250", "WTA Finals"]
    },
    surface: {
      type: String,
      required: true,
      enum: ["Hard", "Grass", "Clay"]
    },
    startYear: {
      type: Number,
      min: 1800
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tournament", tournamentSchema);