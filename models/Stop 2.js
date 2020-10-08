const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
        type: String,
        required: true
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Stop = mongoose.model("Stop", StopSchema);