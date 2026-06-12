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
    const comment = await Comment.create({
      match: req.body.match,
      text: req.body.text,
      user: req.user._id
    });

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
    const existingComment = await Comment.findById(req.params.id);

    if (!existingComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (existingComment.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "You can edit only your own comments" });
    }

    const comment = await Comment.findByIdAndUpdate(req.params.id, {
      text: req.body.text,
      status: req.body.status
    }, {
      new: true,
      runValidators: true
    }).populate("user", "firstName lastName username");

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: "Error updating comment", error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "You can delete only your own comments" });
    }

    await Comment.findByIdAndDelete(req.params.id);
    
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