const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

const Comment = require('../../models/Comment');

router.get('/comments', (req, res) => {
    Comment.find().then(comments => res.json(comments));
});

router.get("/all", (req, res) => {
  Comment.find({ stop_id: ObjectId(req.params.stopId) })
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/:stopId/comments', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const newComment = new Comment({
          body: req.body.body,
          rating: req.body.rating,
          stop_id: req.params.stopId,
          user_id: req.user.id
        });
    newComment.save()
        .then(comment => res.json(comment))
        .catch(err => console.log(err));
});

module.exports = router;