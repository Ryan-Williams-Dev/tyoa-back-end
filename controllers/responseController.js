const asyncHandler = require("express-async-handler");

const Response = require("../models/responseModel");

// @desc    Get Response
// @route   GET /api/response/
// @access  Private
const getResponse = asyncHandler(async (req, res) => {
  res.status(200);
});
// @desc    Set Response
// @route   POST /api/response/
// @access  Private
const setResponse = asyncHandler(async (req, res) => {
  const { text, selectedMoods } = req.body;
  const userId = req.user.id;

  try {
    const response = await Response.create({
      text,
      moods: selectedMoods,
      user: userId,
    });
    res
      .status(200)
      .json({ message: "Response submitted successfully", response });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = { getResponse, setResponse };
