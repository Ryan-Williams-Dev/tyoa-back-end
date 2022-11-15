const mongoose = require("mongoose");

const responseSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a response"],
    },
    moods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mood",
        required: true,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Response", responseSchema);
