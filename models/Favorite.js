const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
  {
    isFavorite: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = Favorite = mongoose.model("Favorite", FavoriteSchema);