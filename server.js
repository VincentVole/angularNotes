var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/notes')

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bodyParser.json());

var NoteSchema = new mongoose.Schema({
	note: String
},{timestamps: true});

mongoose.model('Note', NoteSchema);

var Note = mongoose.model('Note');

app.post('/api/notes', function(req, res){
	var note = new Note(req.body);
	note.save((err, note)=>{
		if(err){
			console.log('at /api/note. failed to post new note');
			console.lot(err);
		}
		else{
			console.log('at /api/note. successfully posted new note');
			res.send(true);
		}
	})
})

app.get('/api/notes', function(req, res){
	Note.find({}, function(err, notes){
		if(err){
			console.log('error retrieving notes');
			console.log(err);
		}
		else{
			console.log('got the goods');
			res.json(notes);
		}
	})
})



app.listen(8000, function(){
	console.log('listening at port 8000');
})