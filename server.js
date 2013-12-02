var
  connect = require('connect'),
  app = connect(),
  fs = require('fs'),
  haml = require('hamljs')

app.use(connect.logger('dev'))
  .use('/lib/', connect.static(__dirname + '/lib'))
  .use('/modules', function(req, res){
    modulesHaml = fs.readFileSync('public/modules.haml', 'utf8');
    res.end(haml.render(modulesHaml));
  })
  .use('/', function(req, res){
    indexHaml = fs.readFileSync('public/index.haml', 'utf8');
    res.end(haml.render(indexHaml));
});


app.listen(3000);