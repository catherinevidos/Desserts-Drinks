const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
    {
        isFavorite: Boolean,    
    }
)