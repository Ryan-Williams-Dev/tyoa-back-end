const mongoose = require("mongoose");

// Instead of storing the moods seperately and giving them an opposing mood as a relationship, I'm storing them together as 'two sides of the same coin'
const moodSchema = mongoose.Schema({
  good: {
    type: String,
    required: true,
  },
  bad: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Mood", moodSchema);
