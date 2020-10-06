const express = require('express');
const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');

router.get('/comments', (req, res) => {
    Comment.find().then(comments => res.json(comments));
});

router.post('/:spotId/comments', (req, res) => {
    
})