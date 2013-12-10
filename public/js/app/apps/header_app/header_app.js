this.SS2N.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  HeaderApp.Controller = {
    listHeader: function(){
      headerView = new HeaderApp.Header.View();
      App.headerRegion.show(headerView);
    }
  };

  HeaderApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'upgrades' : 'showUpgradeCalculator'
    }
  });

  var API = {
    listHeader: function() {
      HeaderApp.Controller.listHeader();
    },
    showUpgradeCalculator: function (){
      console.log('control the route from this point');
    }
  };

  App.addInitializer(function(){
    new HeaderApp.Router({controller: API})
  });

  return App.on('start', function() {
    return API.listHeader();
  });
});
