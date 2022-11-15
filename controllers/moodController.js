const asyncHandler = require("express-async-handler");

const Mood = require("../models/moodModel");

// @desc    Get Mood
// @route   GET /api/Mood/
// @access  Private
const getMood = asyncHandler(async (req, res) => {
  res.status(200);
});
// @desc    Set Mood
// @route   POST /api/Mood/
// @access  Private
const setMood = asyncHandler(async (req, res) => {
  res.status(200);
});

module.exports = {};
