this.SS2N = (function(Backbone, Marionette) {
  var App
  App = new Marionette.Application;
  App.addRegions({
    headerRegion: "#header",
    mainRegion: "#main"
  });
  App.addInitializer(function() {
    return App.module('HeaderApp').start();
  });
  App.on('initialize:after', function() {
    if (Backbone.history && !Backbone.History.started) {
      return Backbone.history.start();
    }
  });
  App.mainRegion.on('show', function(view) {
    window.view = view;
  });
  return App;
})(Backbone, Marionette);
