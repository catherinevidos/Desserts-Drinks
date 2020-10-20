const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const CommentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      // required: true,
    },
    stop_id: {
      type: Schema.Types.ObjectId,
      ref: "Stop",
      required: true,
    },

    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      // required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Comment = mongoose.model("Comment", CommentSchema);