const mongoose = require("mongoose");

const responseSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a response"],
    },
    prompt: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Prompt",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Response", responseSchema);
