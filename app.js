// Module dependencies.

var
  express = require('express'),
  http = require('http'),
  path = require('path')

// all environments
var app = express()
  .set('port', process.env.PORT || 3000)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'jade')
  .use(express.logger('dev'))
  .use(express.json())
  .use(express.urlencoded())
  .use(express.methodOverride())
  .use(express.cookieParser('your secret here'))
  .use(express.session())
  .use(express.static(path.join(__dirname, 'public')))
  .use(require('stylus').middleware(path.join(__dirname, 'public')));

// development only
if (app.get('env') == 'development'){
  app.use(express.errorHandler());
}

app.get('/*', function(req, res){
  res.render('index');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Running in '+ app.get('env').toUpperCase() +' mode.');
  console.log('Express server listening on port ' + app.get('port'));
});
