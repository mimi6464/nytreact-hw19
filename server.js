var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./server/model.js');

var app = express();
var PORT= process.env.PORT|| 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlecoded({extended:true}));
app.use(bodyParser.text());
app.use((bodyParser.json({type:'application/vdn.api+kspm'}));

app.express.static('./public'));
//===========================================
//mongodb configuration congiguration
mongoose.connect('mongodb://');//admin:reactrocks@11111.mlb.com:678/heroku_pg676kmk');
//=====================================must ck
var db = mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose Error:',err);

});
db.once('open', function(){
	console.log('Mongoose connection successful')
});
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


