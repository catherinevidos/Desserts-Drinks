const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

let PhotoSchema = new Schema(
  {
    photo_id: { type: Number, default: 0 },
    description: { type: String },
    fileLink: { type: String },
    s3_key: { type: String },
  },
  {
    timestamps: true,
  }
);

PhotoSchema.plugin(AutoIncrement, { inc_field: "photo_id" });
module.exports = mongoose.model("Photo", PhotoSchema);