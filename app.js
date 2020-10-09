const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require("passport");

const users = require('./routes/api/users');
const stops = require("./routes/api/stops");
const photos = require('./routes/api/photos');
const comments = require('./routes/api/comments');

const User = require("./models/User");
const Stop = require('./models/Stop');
const Photo = require('./models/Photo');
const Comment = require('./models/Comment');

const cors = require("cors");
app.use(cors());
const path = require("path");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/stops', stops);
app.use('/api/photos', photos);
app.use('/api/comments', comments);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));