const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const CommentSchema = new Schema (
    {
        body:{
            type: String,
            required: true
        },
        rating:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = Comment = mongoose.model("Comment", CommentSchema);