'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/about', function(req,res){
  res.render('about');
});

app.get('/discography', function(req,res){
  res.render('discography');
});

app.get('/tour', function(req,res){
  res.render('tour');
});

app.listen(process.env.PORT, function(){
  console.log('The Shadowboxers are playing on Port', process.env.PORT);
});
