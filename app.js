// Module dependencies.

var express = require('express');
var http = require('http');
var path = require('path');
var assetManager = require('connect-assetmanager');

var assetManagerGroups = {
  js: {
    route: /\/js\/[0-9]+\/.*\.js/,
    path: './public/js/lib',
    dataType: 'javascript',
    files: [ 'jquery.js' ]
  }
};

// var assetsManagerMiddleware = assetManager(assetManagerGroups);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
// app.use(assetManager(assetManagerGroups))
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/*', function(req, res){
  res.render('index');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
