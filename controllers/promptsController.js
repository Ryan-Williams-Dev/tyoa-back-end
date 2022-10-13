// @desc    Get Prompts
// @route   GET /api/prompts
// @access  Private
const getPrompts = (req, res) => {
  res.status(200).json({
    message: "Get prompts"
  })
}

// @desc    Set prompt
// @route   POST /api/prompts
// @access  Private
const setPrompt = (req, res) => {
  res.status(200).json({
    message: "Set prompt"
  })
}

// @desc    Edit prompt
// @route   PUT /api/prompts/:id
// @access  Private
const editPrompt = (req, res) => {
  res.status(200).json({
    message: `edit prompt ${req.params.id}`
  })
}

// @desc    Delete prompt
// @route   Delete /api/promps/"id"
// @access  Private
const deletePrompt = (req, res) => {
  res.status(200).json({
    message: `delete prompt ${req.params.id}`
  })
}

module.exports = {
  getPrompts,
  setPrompt,
  editPrompt,
  deletePrompt
}