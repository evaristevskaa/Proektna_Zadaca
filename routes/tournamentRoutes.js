const express = require("express");
const router = express.Router();

const tournamentController = require("../controllers/tournamentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/tournaments:
 *   get:
 *     summary: Get all tournaments
 *     tags: [Tournaments]
 *     responses:
 *       200:
 *         description: Tournament list
 */
router.get("/", tournamentController.getAllTournaments);
router.get("/:id", tournamentController.getTournamentById);

/**
 * @swagger
 * /api/tournaments:
 *   post:
 *     summary: Create tournament
 *     tags: [Tournaments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Tournament created
 */
router.post("/", protect, adminOnly, tournamentController.createTournament);
/**
 * @swagger
 * /api/tournaments/{id}:
 *   put:
 *     summary: Update tournament
 *     tags: [Tournaments]
 */
router.put("/:id", protect, adminOnly, tournamentController.updateTournament);
/**
 * @swagger
 * /api/tournaments/{id}:
 *   delete:
 *     summary: Delete tournament
 *     tags: [Tournaments]
 */
router.delete("/:id", protect, adminOnly, tournamentController.deleteTournament);

module.exports = router;