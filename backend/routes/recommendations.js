console.log("recommendations.js loaded");
const express = require("express");

const router = express.Router();

let recommendations = [
  {
    id: 1,
    crop: "Rice",
    soil: "Clayey",
    season: "Kharif",
  },
  {
    id: 2,
    crop: "Wheat",
    soil: "Loamy",
    season: "Rabi",
  },
];

// GET all recommendations
router.get("/", (req, res) => {
  res.json(recommendations);
});

// SEARCH recommendation
router.get("/search", (req, res) => {
  const query = req.query.crop?.toLowerCase();

  const result = recommendations.filter((r) =>
    r.crop.toLowerCase().includes(query)
  );

  res.json(result);
});

// GET recommendation by ID
router.get("/:id", (req, res) => {
  // ...
});

// POST
router.post("/", (req, res) => {
  // ...
});

// PUT
router.put("/:id", (req, res) => {
  // ...
});

// DELETE
router.delete("/:id", (req, res) => {
  // ...
});

// Export at the very end
module.exports = router;