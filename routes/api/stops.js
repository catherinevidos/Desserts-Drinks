const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Stop = require('../../models/Stop');
const keys = require('../../config/keys');
const validateStopInput = require('../../validation/stop');

router.get("/", (req, res) => {
  Stop.find().then((stops) => res.json(stops));
});

router.get("/bounds/:lat-:lng", (req, res) => {
    debugger;
    const { lat, lng } = req.params;
    const stop = Stop.find({lat: req.params.lat});
    // await MyModel.find({ name: 'john', age: { $gte: 18 } })
        if (stop) {
            debugger
            res.json(stop)
        } else {
            debugger
            res.status(400).json({stop: 'No such stop'})
        }
});

router.get('/:id', (req, res) => {
    debugger
    Stop.findById(req.params.id)
        .then(stop => {
            debugger
            if (stop) {
                res.json(stop);
            } else {
                res.status(400).json({ stop: 'Stop does not exist' });
            }
        })
        .catch(err => {
            debugger
            console.log(err)
        })
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validateStopInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Stop.findOne({name: req.body.name})
        .then(stop => {
            if (stop) {
                if (stop._doc.color === req.body.color) {
                    errors.name = "Stop already exists";
                    return res.status(400).json(errors);
                } 
            } else {
                const newStop = new Stop({
                    name: req.body.name,
                    lat: req.body.lat,
                    lng: req.body.lng,
                    color: req.body.color
                });
                newStop
                    .save()
                    .then((stop) => res.json(stop))
                    .catch((err) => console.log(err));
                }
        })
})

router.patch('/:id', (req, res) => {
    Stop.findById(req.params.id)
        .update({
            color: req.body.color
        })
        .then(result => {
            res.json(result)
        })
})

module.exports = router;