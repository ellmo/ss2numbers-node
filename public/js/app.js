this.JST=this.JST||{},this.JST.header=function(){jade.debug=[{lineno:1,filename:"src/jst/header.jade"}];try{var a=[];return jade.debug.unshift({lineno:1,filename:jade.debug[0].filename}),jade.debug.unshift({lineno:1,filename:jade.debug[0].filename}),a.push('<div class="fillers left">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.unshift({lineno:2,filename:jade.debug[0].filename}),a.push('<div class="green">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:3,filename:jade.debug[0].filename}),a.push('<div class="black">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:4,filename:jade.debug[0].filename}),a.push('<div class="tabs">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.unshift({lineno:5,filename:jade.debug[0].filename}),a.push('<div id="modules" class="tab active">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:6,filename:jade.debug[0].filename}),a.push('<div id="damage" class="tab">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:7,filename:jade.debug[0].filename}),a.push('<div id="health" class="tab">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:8,filename:jade.debug[0].filename}),a.push('<div id="tracker" class="tab">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:9,filename:jade.debug[0].filename}),a.push('<div class="fillers right">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.unshift({lineno:10,filename:jade.debug[0].filename}),a.push('<div class="green">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.unshift({lineno:11,filename:jade.debug[0].filename}),a.push('<div class="black">'),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.shift(),a.push("</div>"),jade.debug.shift(),jade.debug.shift(),a.join("")}catch(b){jade.rethrow(b,jade.debug[0].filename,jade.debug[0].lineno)}},this.JST["some_directory/footer"]=function(a){jade.debug=[{lineno:1,filename:"src/jst/some_directory/footer.jade"}];try{var b=[],c=a||{},d=c.title;return jade.debug.unshift({lineno:1,filename:jade.debug[0].filename}),jade.debug.unshift({lineno:1,filename:jade.debug[0].filename}),b.push('<div class="this-is-a-test">'+jade.escape(null==(jade.interp=d)?"":jade.interp)),jade.debug.unshift({lineno:void 0,filename:jade.debug[0].filename}),jade.debug.shift(),b.push("</div>"),jade.debug.shift(),jade.debug.shift(),b.join("")}catch(e){jade.rethrow(e,jade.debug[0].filename,jade.debug[0].lineno)}},Backbone.Marionette.Renderer.render=function(a,b){if(path=JST[a],!path)throw"Template "+a+" not found!";return path(b)},this.SS2N=function(a,b){var c=new b.Application;return c.addRegions({headerRegion:"#header",mainRegion:"#main"}),c.addInitializer(function(){return c.module("HeaderApp").start()}),c.on("initialize:after",function(){return a.history&&!a.History.started?a.history.start():void 0}),c.mainRegion.on("show",function(a){window.view=a}),c}(Backbone,Marionette),this.SS2N.module("HeaderApp",function(a,b,c,d){this.startWithParent=!1,a.Controller={listHeader:function(){headerView=new a.Header.View,b.headerRegion.show(headerView)}},a.Router=d.AppRouter.extend({appRoutes:{upgrades:"showUpgradeCalculator"}});var e={listHeader:function(){a.Controller.listHeader()},showUpgradeCalculator:function(){console.log("somehow we made it!")}};return b.addInitializer(function(){console.log("adding router"),new a.Router({controller:e})}),b.on("start",function(){return e.listHeader()})}),this.SS2N.module("HeaderApp.Header",function(a,b,c){a.View=c.Marionette.ItemView.extend({template:"header"})});