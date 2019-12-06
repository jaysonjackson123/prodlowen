var express 		  = require("express"),
mongodb				  = require("mongodb"),
mongoose   			  = require("mongoose"),
express     		  = require("express"),
passport              = require("passport");
bodyParser  		  = require("body-parser"),
app         		  = express(),
LocalStrategy         = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose");


require("./models/songSchema");

// Sets what file type is default
app.set('view engine','ejs');

// Sets main directory
app.use(express.static(__dirname + '/public'));

// Connecting to database *locally*
mongoose.connect("mongodb://localhost/prodLowen");

// Schema
var Song = mongoose.model("Song");

// *****ROUTES

// Home
app.get("/",function(req,res){
	res.render("home");
	console.log("homeRender");
});

// Test get route
/*app.get("/library",function(req,res){
	Song.find({},function(err,song){
		if(err){
			res.redirect("/");
		} else {
			res.render("songs",{song:Song});
		}
	})
});*/

app.get('/library', function(req, res, next) {
  Song.find({}, function(err, songs) {
      res.render('songs', {songs: songs});
  });
});

// Test input route
app.post("/library/new",function(req,res){
	var newSong = new Song ({
		songTitle: "CreateSongTitle",
		songDesc: "CreateSongDesc",
		songFile: "CreateSongFile"
	});

	newSong.save();
})


// *****Server listen port 

// Use for live
/*
app.listen(process.env.PORT || 5000)
 */

// Use for local
var server = app.listen(8080,function() {
   var host = server.address().address
   var port = server.address().port  
   console.log("Example app listening at http://%s:%s", host, port)
});
