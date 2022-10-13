const express = require('express');
const router = express.Router();
const { getPrompts, setPrompt, editPrompt, deletePrompt } = require('../controllers/promptsController')

router.get('/', getPrompts)

router.post('/', setPrompt)

router.put('/:id', editPrompt)

router.delete('/:id', deletePrompt)

module.exports = router;