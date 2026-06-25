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

// GET recommendation by ID
router.get("/:id", (req, res) => {
  const recommendation = recommendations.find(
    (r) => r.id === parseInt(req.params.id)
  );

  if (!recommendation) {
    return res.status(404).json({
      message: "Recommendation not found",
    });
  }

  res.json(recommendation);
});

// CREATE recommendation
router.post("/", (req, res) => {
  const newRecommendation = {
    id: recommendations.length + 1,
    crop: req.body.crop,
    soil: req.body.soil,
    season: req.body.season,
  };

  recommendations.push(newRecommendation);

  res.status(201).json(newRecommendation);
});

// UPDATE recommendation
router.put("/:id", (req, res) => {
  const recommendation = recommendations.find(
    (r) => r.id === parseInt(req.params.id)
  );

  if (!recommendation) {
    return res.status(404).json({
      message: "Recommendation not found",
    });
  }

  recommendation.crop = req.body.crop;
  recommendation.soil = req.body.soil;
  recommendation.season = req.body.season;

  res.json(recommendation);
});

// DELETE recommendation
router.delete("/:id", (req, res) => {
  recommendations = recommendations.filter(
    (r) => r.id !== parseInt(req.params.id)
  );

  res.json({
    message: "Recommendation deleted successfully",
  });
});

module.exports = router;