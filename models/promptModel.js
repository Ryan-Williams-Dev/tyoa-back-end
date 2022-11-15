const mongoose = require("mongoose");

const promptSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please include a text value"],
    },
    default: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prompt", promptSchema);
