const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verifySchema = new Schema(
  {
    fileId: { type: String, required: true },
    fileUuid: { type: String },
    verifyId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Verify", verifySchema);