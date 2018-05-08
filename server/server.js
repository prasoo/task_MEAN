var express = require('express');
var router = require.Router();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');

var index = require('./routes/index');
var user_dir = require('./routes/user-dir');

var config = require('../config');

var app = express();
var http = require('http').Server(app);

mongoose.connect(config.database,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('Connected to the database');
	}
});

app.use('/', express.static('src'));
app.use('/node_modules',express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api',user_dir);


http.listen(config.port,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("listening to the port "+config.port);
	}
});