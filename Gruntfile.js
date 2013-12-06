module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Jade compiler
    jade: {
      compile: {
        options: {
          client: true,
          data: { debug: false },
          processName: function(str) { return str.match(/^src\/jst\/(.*)\.jade$/)[1]; },
        },
        files: {
          'public/js/app/templates.js': ['src/jst/**/*.jade']
        }
      }
    },
    // Uglifier
    uglify: {
      target: {
        files: {
          'public/js/app.min.js': [
            'src/js/lib/jquery.js',
            'src/js/lib/underscore.js',
            'src/js/lib/backbone.js',
            'src/js/lib/marionette.js',
            'src/js/lib/jaderuntime.js',
            'src/js/app/configure/marionette/renderer.js',
            'src/js/app/ss2app.js',
            'src/js/app/templates.js',
            'src/js/app/apps/**/*.js'
          ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  // grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jade', 'uglify']);
};