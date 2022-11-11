const mongoose = require("mongoose");

const moodSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  oppositeMood: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mood",
  },
});

module.exports = mongoose.model("Mood", moodSchema);
