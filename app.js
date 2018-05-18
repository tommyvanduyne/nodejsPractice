//Requirements
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//initialize app
var app = express();

//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

//set up the get response
app.get('/', function(req, res) {
	var title = 'Customers';
	res.render('index', {
		title: title
	});
});

//set the port to listen on 
app.listen(3000, function() {
	console.log('Server started on port 3000...');
});


