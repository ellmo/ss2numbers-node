// window.__JST = {};

require.config({
  baseUrl: 'js/',
  paths: {
    jade: 'lib/jaderuntime'
  },
  shim: {
    jade: {
      exports: 'jade'
    }
  }
});

// function JST(template_path){
//   if( __JST[template_path] ){ return __JST[template_path] };
//   try {
//     requirejs([template_path], function(){
//       __JST[template_path] = anonymous
//     })
//   } catch(error) {
//     debugger;
//   }
// };
