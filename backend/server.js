const express = require("express");
const cors = require("cors");

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

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});