const { aws } = require("../../config/keys");
const express = require("express");
const router = express.Router();
const Photo = require("../../models/Photo");
const multer = require("multer");
var AWS = require("aws-sdk");

AWS.config.update({
  region: aws.region, 
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey,
});

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.route("/").get((req, res, next) => {
  Photo.find(
    {},
    null,
    {
      sort: { createdAt: 1 },
    },
    (err, pics) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(pics);
    }
  );
});

router.route("/:id").get((req, res, next) => {
  Photo.findById(req.params.id, (err, go) => {
    if (err) {
      return next(err);
    }
    res.json(go);
  });
});

router.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  const s3FileURL = aws.uploadedFileURL;
  let s3bucket = new AWS.S3();
  var params = {
    Bucket: aws.bucketName,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };
  s3bucket.upload(params, function (err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      res.send({ data });
      var newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key,
      };
      var photo = new Photo(newFileUploaded);
      photo.save(function (error, newFile) {
        if (error) {
          throw error;
        }
      });
    }
  });
});

router.route("/edit/:id").put((req, res, next) => {
  Photo.findByIdAndUpdate(
    req.params.id,
    { $set: { description: Object.keys(req.body)[0] } },
    { new: true },
    (err, updateDoc) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(updateDoc);
    }
  );
});

router.route("/:id").delete((req, res, next) => {
  Photo.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return next(err);
    }
    let s3bucket = new AWS.S3();
    let params = {
      Bucket: aws.bucketName,
      Key: result.s3_key,
    };
    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: "200",
          responseType: "string",
          response: "success",
        });
      }
    });
  });
});
module.exports = router;
