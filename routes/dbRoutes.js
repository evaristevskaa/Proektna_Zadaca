/**
 * @swagger
 * /api/db/seed:
 *   post:
 *     summary: Insert initial data
 *     tags: [Database]
 *     responses:
 *       200:
 *         description: Database seeded
 */
/**
 * @swagger
 * /api/db/reset:
 *   delete:
 *     summary: Delete all database data
 *     tags: [Database]
 *     responses:
 *       200:
 *         description: Database cleared
 */
const express = require("express");
const router = express.Router();

const dbController = require("../controllers/dbController");

router.delete("/reset", dbController.resetDatabase);
router.post("/seed", dbController.seedDatabase);

router.get("/", (req, res) => {
  res.send(`
    <h1>Database tools</h1>
    <p>Use these endpoints to reset or seed the database.</p>
    <ul>
      <li>POST /db/seed - insert initial data</li>
      <li>DELETE /db/reset - clear all data</li>
    </ul>
  `);
});

module.exports = router;