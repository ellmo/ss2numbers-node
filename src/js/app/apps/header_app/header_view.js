this.SS2N.module("HeaderApp.Header", function(Header, App, Backbone, Marionette, $, _) {

  Header.View = Backbone.Marionette.ItemView.extend({
    template: "header"
  });
});