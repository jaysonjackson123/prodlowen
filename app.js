var express = require("express");
var app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
	res.render("home");
});

//This function is for Heroku purposes

var server = app.listen(8080,function() {
   var host = server.address().address
   var port = server.address().port  
   console.log("Example app listening at http://%s:%s", host, port)
})