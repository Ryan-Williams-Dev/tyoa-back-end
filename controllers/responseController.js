const asyncHandler = require("express-async-handler");

const Response = require("../models/responseModel");
const Prompt = require("../models/promptModel");

// @desc    Get Response
// @route   GET /api/response/:selectedMoods
// @access  Private
const getResponse = asyncHandler(async (req, res) => {
  res.status(200);
});
// @desc    Set Response
// @route   POST /api/response/:selectedMoods
// @access  Private
const setResponse = asyncHandler(async (req, res) => {
  res.status(200);
});

module.exports = { getResponse, setResponse };
