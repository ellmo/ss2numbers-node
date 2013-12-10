this.SS2N = (function(Backbone, Marionette) {
  var App = new Marionette.Application;

  // defining regions
  App.addRegions({
    headerRegion: "#header",
    mainRegion: "#main"
  });

  // adding initializers
  App.addInitializer(function() {
    return App.module('HeaderApp').start();
  });

  // defining event handlers
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
