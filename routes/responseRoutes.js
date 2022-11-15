const express = require("express");
const router = express.Router();
const {
  getResponse,
  setResponse,
} = require("../controllers/responseController");
const { protect } = require("../middleware/authMiddleware");

router.get("/:selectedMoods", getResponse);
router.post("/:selectedMoods", protect, setResponse);

module.exports = router;
