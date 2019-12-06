var mongoose = require("mongoose");

var songSchema = new mongoose.Schema({
	username: String,
	password: String,
	song-url: String,
	art-url: String
});



//Exports a model of the mongoose schema SongSchema, passed as Song
module.exports = mongoose.model("Song",SongSchema);
