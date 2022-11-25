const express = require("express");
const router = express.Router();
const {
  getResponse,
  setResponse,
} = require("../controllers/responseController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getResponse);
router.post("/", protect, setResponse);

module.exports = router;
