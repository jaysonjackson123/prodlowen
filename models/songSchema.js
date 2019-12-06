var mongoose = require("mongoose");

var songSchema = new mongoose.Schema({
	songTitle: String,
	songDesc: String,
	songFile: String
});



//Exports a model of the mongoose schema SongSchema, passed as Song
module.exports = mongoose.model("Song",songSchema);
