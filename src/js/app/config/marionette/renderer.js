Backbone.Marionette.Renderer.render = function(template, data){
  path = JST['backbone/apps/' + template];
  if (!path) {
    throw "Template " + template + " not found!";
  }
  return path(data);
}
