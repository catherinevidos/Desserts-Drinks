const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

const Comment = require('../../models/Comment');

router.get('/comments', (req, res) => {
    Comment.find().then(comments => res.json(comments));
});

router.post('/:spotId/comments', passport.authenticate('jwt', {session: false}),
    (req, res) => {
    const newComment = new Comment({
        body: req.body.body,
        rating: req.body.rating
    });
    newComment.save().then(comment => res.json(comment));
})

module.exports = router;