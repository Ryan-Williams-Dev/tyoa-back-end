const asyncHandler = require("express-async-handler");

const Prompt = require("../models/promptModel");

// @desc    Get Prompts
// @route   GET /api/prompts
// @access  Private
const getPrompts = asyncHandler(async (req, res) => {
  const prompts = await Prompt.find();

  res.status(200).json({ prompts });
});

// @desc    Set prompt
// @route   POST /api/prompts
// @access  Private
const setPrompt = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please include a text field");
  }

  const prompt = await Prompt.create({
    text: req.body.text,
  });

  res.status(200).json({
    prompt,
  });
});

// @desc    Edit prompt
// @route   PUT /api/prompts/:id
// @access  Private
const editPrompt = asyncHandler(async (req, res) => {
  const prompt = await Prompt.findById(req.params.id);

  if (!prompt) {
    res.status(400);
    throw new Error("prompt not found");
  }

  const updatedPrompt = await Prompt.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedPrompt);
});

// @desc    Delete prompt
// @route   Delete /api/promps/"id"
// @access  Private
const deletePrompt = asyncHandler(async (req, res) => {
  const prompt = await Prompt.findById(req.params.id);

  if (!prompt) {
    res.status(400);
    throw new Error("prompt not found");
  }

  await prompt.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPrompts,
  setPrompt,
  editPrompt,
  deletePrompt,
};
