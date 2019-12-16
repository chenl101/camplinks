var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    facebookId: String,
    vip: Number
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);