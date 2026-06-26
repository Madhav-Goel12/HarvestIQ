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

// ===============================
// GET all recommendations
// ===============================
router.get("/", (req, res) => {
  res.status(200).json(recommendations);
});

// ===============================
// SEARCH recommendation
// Example:
// /api/recommendations/search?crop=rice
// ===============================
router.get("/search", (req, res) => {
  const query = req.query.crop?.toLowerCase() || "";

  const result = recommendations.filter((r) =>
    r.crop.toLowerCase().includes(query)
  );

  res.status(200).json(result);
});

// ===============================
// GET recommendation by ID
// ===============================
router.get("/:id", (req, res) => {
  const recommendation = recommendations.find(
    (r) => r.id === parseInt(req.params.id)
  );

  if (!recommendation) {
    return res.status(404).json({
      message: "Recommendation not found",
    });
  }

  res.status(200).json(recommendation);
});

// ===============================
// CREATE recommendation
// ===============================
router.post("/", (req, res) => {
  const { crop, soil, season } = req.body;

  if (!crop || !soil || !season) {
    return res.status(400).json({
      message: "Please provide crop, soil and season",
    });
  }

  const newRecommendation = {
    id: recommendations.length + 1,
    crop,
    soil,
    season,
  };

  recommendations.push(newRecommendation);

  res.status(201).json(newRecommendation);
});

// ===============================
// UPDATE recommendation
// ===============================
router.put("/:id", (req, res) => {
  const recommendation = recommendations.find(
    (r) => r.id === parseInt(req.params.id)
  );

  if (!recommendation) {
    return res.status(404).json({
      message: "Recommendation not found",
    });
  }

  recommendation.crop = req.body.crop || recommendation.crop;
  recommendation.soil = req.body.soil || recommendation.soil;
  recommendation.season = req.body.season || recommendation.season;

  res.status(200).json(recommendation);
});

// ===============================
// DELETE recommendation
// ===============================
router.delete("/:id", (req, res) => {
  const recommendation = recommendations.find(
    (r) => r.id === parseInt(req.params.id)
  );

  if (!recommendation) {
    return res.status(404).json({
      message: "Recommendation not found",
    });
  }

  recommendations = recommendations.filter(
    (r) => r.id !== parseInt(req.params.id)
  );

  res.status(200).json({
    message: "Recommendation deleted successfully",
  });
});

// ===============================
// Export router
// ===============================
module.exports = router;

