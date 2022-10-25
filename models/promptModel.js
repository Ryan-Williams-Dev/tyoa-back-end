const mongoose = require("mongoose");

const promptSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
