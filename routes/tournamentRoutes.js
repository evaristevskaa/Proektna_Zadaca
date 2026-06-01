const express = require("express");
const router = express.Router();

const tournamentController = require("../controllers/tournamentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", tournamentController.getAllTournaments);
router.get("/:id", tournamentController.getTournamentById);

router.post("/", protect, adminOnly, tournamentController.createTournament);
router.put("/:id", protect, adminOnly, tournamentController.updateTournament);
router.delete("/:id", protect, adminOnly, tournamentController.deleteTournament);

module.exports = router;