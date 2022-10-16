const express = require("express");
const router = express.Router();
const {
  getPrompts,
  setPrompt,
  editPrompt,
  deletePrompt,
} = require("../controllers/promptsController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getPrompts).post(protect, setPrompt);
router.route("/:id").put(protect, editPrompt).delete(protect, deletePrompt);

module.exports = router;
