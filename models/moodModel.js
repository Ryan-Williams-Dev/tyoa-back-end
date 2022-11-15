const mongoose = require("mongoose");

const moodSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["good", "bad"],
    required: true,
  },
  opposite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mood",
    required: true,
  },
});

module.exports = mongoose.model("Mood", moodSchema);
