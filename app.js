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









app.listen(process.env.PORT || 5000)

