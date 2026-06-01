const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    match: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    text: {
      type: String,
      required: [true, "Comment text is required"],
      trim: true,
      minlength: 3,
      maxlength: 500
    },
    status: {
      type: String,
      enum: ["visible", "hidden"],
      default: "visible"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", commentSchema);