const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Player = require("../models/Player");
const Tournament = require("../models/Tournament");
const Match = require("../models/Match");
const Comment = require("../models/Comment");

const resetDatabase = async (req, res) => {
  try {
    await Comment.deleteMany();
    await Match.deleteMany();
    await Tournament.deleteMany();
    await Player.deleteMany();
    await User.deleteMany();

    res.status(200).json({ message: "Database cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error clearing database", error: error.message });
  }
};

const seedDatabase = async (req, res) => {
  try {
    await Comment.deleteMany();
    await Match.deleteMany();
    await Tournament.deleteMany();
    await Player.deleteMany();
    await User.deleteMany();

    const adminPassword = await bcrypt.hash("admin12345", 10);
    const userPassword = await bcrypt.hash("user12345", 10);

    const admin = await User.create({
      firstName: "Eva",
      lastName: "Admin",
      email: "admin@rybakina.com",
      username: "admin",
      password: adminPassword,
      role: "admin"
    });

    const fan = await User.create({
      firstName: "Ana",
      lastName: "Petrova",
      email: "ana@example.com",
      username: "anafan",
      password: userPassword,
      role: "user"
    });

    const rybakina = await Player.create({
      fullName: "Elena Rybakina",
      country: "Kazakhstan",
      birthDate: new Date("1999-06-17"),
      height: 1.84,
      plays: "Right-handed",
      bio: "Elena Rybakina is a professional tennis player known for her powerful serve and aggressive baseline game."
    });

    const wimbledon = await Tournament.create({
      name: "Wimbledon",
      location: "London, United Kingdom",
      category: "Grand Slam",
      surface: "Grass",
      startYear: 1877
    });

    const indianWells = await Tournament.create({
      name: "Indian Wells",
      location: "Indian Wells, USA",
      category: "WTA 1000",
      surface: "Hard",
      startYear: 1989
    });

    const brisbane = await Tournament.create({
      name: "Brisbane",
      location: "Brisbane, Australia",
      category: "WTA 500",
      surface: "Hard",
      startYear: 2009
    });

    const australianOpen = await Tournament.create({
      name: "Australian Open",
      location: "Melbourne, Australia",
      category: "Grand Slam",
      surface: "Hard",
      startYear: 1905
    });

    const match1 = await Match.create({
      player: rybakina._id,
      tournament: wimbledon._id,
      opponent: "Ons Jabeur",
      year: 2022,
      round: "Final",
      score: "3-6, 6-2, 6-2",
      result: "Win",
      notes: "Rybakina won her first Grand Slam title at Wimbledon."
    });

    const match2 = await Match.create({
      player: rybakina._id,
      tournament: indianWells._id,
      opponent: "Aryna Sabalenka",
      year: 2023,
      round: "Final",
      score: "7-6, 6-4",
      result: "Win",
      notes: "A major WTA 1000 title on hard court."
    });

    const match3 = await Match.create({
      player: rybakina._id,
      tournament: brisbane._id,
      opponent: "Aryna Sabalenka",
      year: 2024,
      round: "Final",
      score: "6-0, 6-3",
      result: "Win",
      notes: "A dominant final performance in Brisbane."
    });

    const match4 = await Match.create({
      player: rybakina._id,
      tournament: australianOpen._id,
      opponent: "Aryna Sabalenka",
      year: 2026,
      round: "Final",
      score: "6-4, 4-6, 6-4",
      result: "Win",
      notes: "Second Grand Slam singles title."
    });

    await Comment.create({
      match: match1._id,
      user: fan._id,
      text: "Amazing comeback after the first set."
    });

    await Comment.create({
      match: match2._id,
      user: admin._id,
      text: "One of the most important hard court wins in her career."
    });

    res.status(201).json({
      message: "Database seeded successfully",
      users: 2,
      players: 1,
      tournaments: 4,
      matches: 4,
      comments: 2
    });
  } catch (error) {
    res.status(500).json({ message: "Error seeding database", error: error.message });
  }
};

module.exports = {
  resetDatabase,
  seedDatabase
};