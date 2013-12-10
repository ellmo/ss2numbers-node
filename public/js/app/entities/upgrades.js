this.SS2N.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Upgrade = Backbone.Model.extend({

  });

  Entities.UpgradeCollection = Backbone.Collection.extend({
    model: Entities.Upgrade
  });

  Entities.API = {
    getHeaders: function(){
      return new Backbone.Collection([
        {name: 'Mario'},
        {name: 'Doom'},
        {name: 'Ruby'}
      ]);
    }
  }

  App.reqres.setHandler('header:entities', function(){
    return Entities.API.getHeaders();
  });
});
