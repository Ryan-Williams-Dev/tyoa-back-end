const asyncHandler = require('express-async-handler')

// @desc    Get Prompts
// @route   GET /api/prompts
// @access  Private
const getPrompts = asyncHandler((req, res) => {
  res.status(200).json({
    message: "Get prompts"
  })
})

// @desc    Set prompt
// @route   POST /api/prompts
// @access  Private
const setPrompt = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please include a text field")
  }

  res.status(200).json({
    message: "Set prompt"
  })
})

// @desc    Edit prompt
// @route   PUT /api/prompts/:id
// @access  Private
const editPrompt = asyncHandler( (req, res) => {
  res.status(200).json({
    message: `edit prompt ${req.params.id}`
  })
})

// @desc    Delete prompt
// @route   Delete /api/promps/"id"
// @access  Private
const deletePrompt = asyncHandler((req, res) => {
  res.status(200).json({
    message: `delete prompt ${req.params.id}`
  })
})

module.exports = {
  getPrompts,
  setPrompt,
  editPrompt,
  deletePrompt
}