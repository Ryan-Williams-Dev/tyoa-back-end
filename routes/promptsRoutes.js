const express = require("express");
const router = express.Router();
const {
  getPrompts,
  setPrompt,
  editPrompt,
  deletePrompt,
} = require("../controllers/promptsController");

router.route("/").get(getPrompts).post(setPrompt);
router.route("/:id").put(editPrompt).delete(deletePrompt);

module.exports = router;
