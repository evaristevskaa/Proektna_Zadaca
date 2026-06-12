const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 */
router.get("/", commentController.getAllComments);
router.get("/match/:matchId", commentController.getCommentsByMatch);

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Add comment
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 */
router.post("/", protect, commentController.createComment);
router.put("/:id", protect, commentController.updateComment);
/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Delete comment
 *     tags: [Comments]
 */
router.delete("/:id", protect, commentController.deleteComment);

module.exports = router;