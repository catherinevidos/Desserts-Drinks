const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comment');

router.get('/comments', (req, res) => {
    Comment.find().then(comments => res.json(comments));
});

// pass stopId as params to fetch comments for stop: http://localhost:5000/api/comments/all?5f7b45dcc6fc5b4512037023

router.get('/all', (req, res) => {
  stopId = req.originalUrl.split('?')[1];
  const id = ObjectId(stopId);
  Comment.find({ stop_id: id })
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.post('/:stopId/comments', passport.authenticate('jwt', {session: false}),
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);
    if (req.body.stop_id === undefined) {
      errors.stop_id = "Please select a stop";
      return res.status(400).json(errors);
    }
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const userid = ObjectId(req.user.id);
    const stopId = ObjectId(req.body.stop_id);
    const newComment = new Comment({
      body: req.body.body,
      rating: req.body.rating || 0,
      stop_id: stopId,
      user_id: userid,
      username: req.body.username,
    });
    newComment
      .save()
      .then((comment) => res.json(comment))
      .catch((err) => console.log(err));
  }
);

module.exports = router;