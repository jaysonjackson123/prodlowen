var express = require("express");
var app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
	res.render("home");
});

//This function is for Heroku purposes
app.listen(process.env.PORT || 5000)