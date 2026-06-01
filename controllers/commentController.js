const Comment = require("../models/Comment");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("user", "firstName lastName username email role")
      .populate({
        path: "match",
        populate: {
          path: "tournament"
        }
      })
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error: error.message });
  }
};

const getCommentsByMatch = async (req, res) => {
  try {
    const comments = await Comment.find({ match: req.params.matchId })
      .populate("user", "firstName lastName username")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching match comments", error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);

    const populatedComment = await Comment.findById(comment._id)
      .populate("user", "firstName lastName username")
      .populate("match");

    res.status(201).json(populatedComment);
  } catch (error) {
    res.status(400).json({ message: "Error creating comment", error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: "Error updating comment", error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error: error.message });
  }
};

module.exports = {
  getAllComments,
  getCommentsByMatch,
  createComment,
  updateComment,
  deleteComment
};