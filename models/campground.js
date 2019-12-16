var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
  
  name: String,
  price: String,
  imgData: { data: Buffer, contentType: String },
  image: String,
  rate: Number,
  rateCount: Number,
  description: String,
  date: Date,
  location: {
    lat: Number,
    lng: Number
  },
  author: {
    id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    },
    username: String
  },
  comments: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Campground", campgroundSchema);