const asyncHandler = require("express-async-handler");
const findReleventResponse = require("../services/findReleventResponse");

const Response = require("../models/responseModel");

// @desc    Get Response
// @route   GET /api/response/
// @access  Private
const getResponse = asyncHandler(async (req, res) => {
  const { selectedMoods } = req.query;
  const userId = req.user.id;

  if (!selectedMoods) {
    res.status(400);
    throw new Error("Please include moods");
  }

  try {
    const response = await findReleventResponse(userId, selectedMoods);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// @desc    Set Response
// @route   POST /api/response/
// @access  Private
const setResponse = asyncHandler(async (req, res) => {
  const { text, selectedMoods } = req.body;
  const userId = req.user.id;

  try {
    await Response.create({
      text,
      moods: selectedMoods,
      user: userId,
    });
    res.status(200).json({ message: "Response submitted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = { getResponse, setResponse };
