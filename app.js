var express 		  = require("express"),
mongoose   			  = require("mongoose"),
express     		  = require("express"),
app         		  = express();

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));






// Main Screen
app.get("/",function(req,res){
	res.render("home");
});







var server = app.listen(8080,function() {
   var host = server.address().address
   var port = server.address().port  
   console.log("Example app listening at http://%s:%s", host, port)
});
