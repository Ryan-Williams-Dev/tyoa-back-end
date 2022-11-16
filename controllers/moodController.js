const asyncHandler = require("express-async-handler");

const Mood = require("../models/moodModel");

// @desc    Get Moods
// @route   GET /api/Moods/:type
// @access  Public
const getMoods = asyncHandler(async (req, res) => {
  const type = req.params.type;

  if (type !== "bad" && type !== "good") {
    res.status(400);
    throw new Error("type param must be either 'bad' or 'good'");
  }

  const moods = Mood.find({ type });

  res.status(200);
});
// @desc    Set Mood
// @route   POST /api/Mood/
// @access  Private
const setMood = asyncHandler(async (req, res) => {
  res.status(200);
});

module.exports = { getMoods, setMood };
