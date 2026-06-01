const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    birthDate: {
      type: Date
    },
    height: {
      type: Number
    },
    plays: {
      type: String,
      enum: ["Right-handed", "Left-handed"],
      default: "Right-handed"
    },
    bio: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Player", playerSchema);