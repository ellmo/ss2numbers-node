this.SS2N.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  HeaderApp.Controller = {
    listHeader: function(){
      headerView = new HeaderApp.Header.View();
      App.headerRegion.show(headerView);
    }
  };

  var API = {
    listHeader: function() {
      HeaderApp.Controller.listHeader();
    }
  };
  return App.on('start', function() {
    return API.listHeader();
  });
});
