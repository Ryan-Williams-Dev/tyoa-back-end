const asyncHandler = require("express-async-handler");
const findReleventResponse = require("../services/findReleventResponse");

const Response = require("../models/responseModel");

// @desc    Get Response
// @route   GET /api/response/
// @access  Private
const getResponse = asyncHandler(async (req, res) => {
  const { selectedMoods } = req.body;
  const userId = req.user.id;

  try {
    const response = await findReleventResponse(userId, selectedMoods);
    console.log(response);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error });
  }
  res.status(200);
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
