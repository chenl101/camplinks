console.log("In server.js!");

// init project
var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    cookieParser  = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    
    flash         = require("connect-flash"),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    User          = require("./models/user"),
    session       = require("express-session"),
    seedDB        = require("./seeds"),
    methodOverride = require("method-override");
    // FacebookStrategy = require('passport-facebook').Strategy;


// require routes
var apiRouters = require("./routes/api"),
    indexRouters = require("./routes/index"),
    campgroundRoutes = require('./routes/campgrounds'),
    commentRoutes = require("./routes/comments");

//start express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine
app.set("view engine", "ejs")
app.set("views", __dirname + "/views/");
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));


// Establish a connection with the Mongo Database
// Get the username, password, host, and databse from the .env file
const mongoDB = ("mongodb+srv://"+
                 process.env.USERNAME+
                 ":"
                 +process.env.PASSWORD+
                 "@"
                 +process.env.HOST+
                 "/"
                 +process.env.DATABASE);
// console.log("Connection String: "+mongoDB);

mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true, retryWrites: true});


//debugging 
mongoose.connection.on('connected', function (){
  console.log('Mongoose connected to '+process.env.DATABASE);
});

mongoose.connection.on('error', function (err){
  console.log('Mongoose connection error: '+err);
});

mongoose.connection.on('disconnected', function (){
  console.log('Mongoose disconnected.');
});


// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "web2560",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});




// default route "/"
app.use("/", indexRouters);
app.use("/api", apiRouters);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.use(express.static("public"));





// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.render("index");
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

