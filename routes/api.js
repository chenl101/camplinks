// Route handlers
const express = require('express');
const router = express.Router()

//import data models
const User = require("../models/user");
const Campground = require("../models/campground");
const Comment = require("../models/comment");


// RETREIVE APIs page
router.get("/", function(req, res){
    res.render("APIs/APIs");
});


// RETREIVE Map page
router.get("/map", function(req, res){
    res.render("partials/map");
});


// RETREIVE all users
router.get("/user", function(req,res){
  User.find({}, function (err, users){
    res.json(users);
  });
});

// RETREIVE all campgrounds
router.get("/campground", function(req,res){
  Campground.find({}, function (err, campgrounds){
    res.json(campgrounds);
  });
});

// RETRIEVE a specific user
router.get("user/:userId", function(req, res){
  User.findById(req.params.userId, function(err, user) {
    res.json(user)
  });
});


//CREATE campground
router.post('/campground/new', function(req, res){
  let campground = new Campground(req.body);
  campground.save();
  res.status(201).send(campground);
});

//CREATE user
router.post('/user/new', function(req, res){
  let user = new User(req.body);
  user.save();
  res.status(201).send(user);
});

//UPDATE user
router.put("/user/:userId", function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (req.body.username && req.body.username.length > 0){
      user.username = req.body.username;
    }
    if (req.body.passwaord && req.body.passwaord.length > 0){
      user.passwaord = req.body.passwaord;
    }
    if (req.body.vip && req.body.vip.length > 0){
      user.vip = req.body.vip;
    }
    user.save();
    res.json(user);
  });
});

//DELETE
router.delete("/:bookId", function(req, res){
  User.findById(req.params.bookId, function(err, book) {
    book.remove(function(err){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.status(204).send('removed');
        }
    });
  });
});
module.exports = router;