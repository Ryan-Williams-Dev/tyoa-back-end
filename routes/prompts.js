const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Get prompts"
  })
})

router.post('/', (req, res) => {
  res.status(200).json({
    message: "Set Prompt"
  })
})

router.put('/:id', (req, res) => {
  res.status(200).json({
    message: `edit prompt ${req.params.id}`
  })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: `delete prompt ${req.params.id}`
  })
})

module.exports = router;