var express 		  = require("express"),
mongoose   			  = require("mongoose"),
express     		  = require("express"),
passport              = require("passport");
bodyParser  		  = require("body-parser"),
app         		  = express(),
LocalStrategy         = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose");


// Sets what file type is default
app.set('view engine','ejs');

// Sets what folder to look for things in
app.use(express.static(__dirname + '/public'));

// Connecting to database locally
mongoose.connect("mongodb://localhost/prodlowen");

// Main Screen
app.get("/",function(req,res){
	res.render("home");
});

// Creating a new song



// Server listen port
var server = app.listen(8080,function() {
   var host = server.address().address
   var port = server.address().port  
   console.log("Example app listening at http://%s:%s", host, port)
});
