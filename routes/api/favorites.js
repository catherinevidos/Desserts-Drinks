const express = require('express');
const router = express.Router();
const passport = require('passport');
const Favorite = require('../../models/Favorite');
const ObjectId = require('mongodb').ObjectID;

router.get('/allFavorites',passport.authenticate('jwt', { session: false }), (req, res) => { 
    const user_id = ObjectId(req.user.id);
    Favorite.find({ user_id: user_id })
      .then((allFavs) => {
        res.json(allFavs);
      })
      .catch((err) => console.log(err));
})

router.post('/add_favorite/:stopId', passport.authenticate('jwt', { session: false }), (req, res) => {
    Favorite.find(({ stop_id: req.params.stopId }), function(err, result) {
        if (err) {
            return res.send(err);
        }
        if (result.length === 0) {
            const addFav = new Favorite({
                    isFavorite: true,
                    stop_id: req.params.stopId,
                    user_id: req.user.id,
                });
            addFav
                .save()
                .then((isFav) => res.json(isFav))
                .catch((err) => console.log(err));
        } else {
            Favorite.findByIdAndDelete(result[0]._id).then(() => {
                res.send({
                  status: "200",
                  response: "success",
                });
            });
        }
    })
});

router.patch('/remove_favorite/:stopId', passport.authenticate('jwt', { session: false }), (req, res) => {
    const stop_id = ObjectId(req.params.stopId);
    Favorite.find({ stop_id: stop_id })
        .update({
            isFavorite: false
            })
        .then((isFav) => res.json(isFav))
        .catch((err) => console.log(err));
})

module.exports = router;