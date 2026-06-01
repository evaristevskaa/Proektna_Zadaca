const Match = require("../models/Match");

const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find()
      .populate("player")
      .populate("tournament")
      .sort({ year: -1 });

    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching matches", error: error.message });
  }
};

const getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id)
      .populate("player")
      .populate("tournament");

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: "Error fetching match", error: error.message });
  }
};

const createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ message: "Error creating match", error: error.message });
  }
};

const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    res.status(200).json(match);
  } catch (error) {
    res.status(400).json({ message: "Error updating match", error: error.message });
  }
};

const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    res.status(200).json({ message: "Match deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting match", error: error.message });
  }
};

module.exports = {
  getAllMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch
};