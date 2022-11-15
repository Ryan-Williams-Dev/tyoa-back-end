const express = require("express");
const router = express.Router();
const { getMoods } = require("../controllers/moodController");

router.get("/:type", getMoods);

module.exports = router;
