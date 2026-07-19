console.log("recommendations.js loaded");

const express = require("express");
const prisma = require("../config/prisma");

const router = express.Router();

// ===============================
// GET all recommendations
// ===============================
router.get("/", async (req, res) => {
  try {
    const recommendations = await prisma.recommendation.findMany();

    res.status(200).json(recommendations);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
});

// ===============================
// SEARCH recommendation
// Example:
// /api/recommendations/search?crop=rice
// ===============================
router.get("/search", async (req, res) => {
  try {
    const query = req.query.crop || "";

    const result = await prisma.recommendation.findMany({
      where: {
        crop: {
          contains: query,
          mode: "insensitive",
        },
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
});

// ===============================
// GET recommendation by ID
// ===============================
router.get("/:id", async (req, res) => {
  try {
    const recommendation = await prisma.recommendation.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!recommendation) {
      return res.status(404).json({
        message: "Recommendation not found",
      });
    }

    res.status(200).json(recommendation);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
});

// ===============================
// CREATE recommendation
// ===============================
router.post("/", async (req, res) => {
  try {
    const { crop, soil, season } = req.body;

    if (!crop || !soil || !season) {
      return res.status(400).json({
        message: "Please provide crop, soil and season",
      });
    }

    const newRecommendation = await prisma.recommendation.create({
      data: {
        crop,
        soil,
        season,
      },
    });

    res.status(201).json(newRecommendation);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
});

// ===============================
// UPDATE recommendation
// ===============================
router.put("/:id", async (req, res) => {
  try {
    const { crop, soil, season } = req.body;

    const existingRecommendation = await prisma.recommendation.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!existingRecommendation) {
      return res.status(404).json({
        message: "Recommendation not found",
      });
    }

    const updatedRecommendation = await prisma.recommendation.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        crop: crop ?? existingRecommendation.crop,
        soil: soil ?? existingRecommendation.soil,
        season: season ?? existingRecommendation.season,
      },
    });

    res.status(200).json(updatedRecommendation);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
});

// ===============================
// DELETE recommendation
// ===============================
router.delete("/:id", async (req, res) => {
  try {
    const existingRecommendation = await prisma.recommendation.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!existingRecommendation) {
      return res.status(404).json({
        message: "Recommendation not found",
      });
    }

    await prisma.recommendation.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      message: "Recommendation deleted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
});

// ===============================
// Export router
// ===============================
module.exports = router;