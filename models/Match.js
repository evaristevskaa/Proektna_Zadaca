const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true
    },
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true
    },
    opponent: {
      type: String,
      required: [true, "Opponent is required"],
      trim: true
    },
    year: {
      type: Number,
      required: true,
      min: 1990,
      max: 2100
    },
    round: {
      type: String,
      required: true,
      enum: ["Final", "Semi-final", "Quarter-final", "Round of 16", "Group stage"]
    },
    score: {
      type: String,
      required: [true, "Score is required"],
      trim: true,
      match: [/^[0-9ret\-\s,\.]+$/i, "Score format is not valid"]
    },
    result: {
      type: String,
      required: true,
      enum: ["Win", "Loss"]
    },
    notes: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Match", matchSchema);