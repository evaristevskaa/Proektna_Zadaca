
/**
 * @swagger
 * tags:
 *   name: Matches
 *   description: Match management API
 */

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Get all matches
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: List of matches
 */

/**
 * @swagger
 * /api/matches/{id}:
 *   get:
 *     summary: Get match by id
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Match found
 *       404:
 *         description: Match not found
 */

/**
 * @swagger
 * /api/matches:
 *   post:
 *     summary: Create a match
 *     tags: [Matches]
 *     responses:
 *       201:
 *         description: Match created
 */

/**
 * @swagger
 * /api/matches/{id}:
 *   put:
 *     summary: Update a match
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Match updated
 */

/**
 * @swagger
 * /api/matches/{id}:
 *   delete:
 *     summary: Delete a match
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Match deleted
 */
const express = require("express");
const router = express.Router();

const matchController = require("../controllers/matchController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", matchController.getAllMatches);
router.get("/:id", matchController.getMatchById);

router.post("/", protect, adminOnly, matchController.createMatch);
router.put("/:id", protect, adminOnly, matchController.updateMatch);
router.delete("/:id", protect, adminOnly, matchController.deleteMatch);

module.exports = router;