const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
  {
    isFavorite: {
      type: Boolean,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

module.exports = Favorite = mongoose.model("Favorite", FavoriteSchema);