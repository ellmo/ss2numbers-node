var
  connect = require('connect'),
  app = connect(),
  fs = require('fs'),
  Haml = require('haml'),
  indexHaml = fs.readFileSync('public/index.haml', 'utf8');

app.use(connect.logger('dev'));
app.use('/lib/', connect.static(__dirname + '/lib'));
app.use('/', function(req, res){
  res.end(Haml.render(indexHaml));
});


app.listen(3000);