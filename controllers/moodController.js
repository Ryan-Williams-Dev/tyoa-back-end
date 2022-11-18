const asyncHandler = require("express-async-handler");

const Mood = require("../models/moodModel");

// @desc    Get Moods
// @route   GET /api/moods/:type
// @access  Public
const getMoods = asyncHandler(async (req, res) => {
  const moods = await Mood.find();

  res.status(200).json(moods);
});
// @desc    Set Mood
// @route   POST /api/mood/
// @access  Private
const setMood = asyncHandler(async (req, res) => {
  res.status(200);
});

module.exports = { getMoods, setMood };
