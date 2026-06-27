const express = require("express");
const cors = require("cors");

require("dotenv").config();

console.log("Before require");

const recommendationRoutes = require("./routes/recommendations");

console.log("After require");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recommendations", recommendationRoutes);

app.get("/", (req, res) => {
  res.send("ROOT WORKS");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
// Global Error Handler

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Internal Server Error",
  });
});