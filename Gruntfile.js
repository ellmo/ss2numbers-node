module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Cleaner
    clean: {
      public: ['public/js/**/*.js'],
      tmp: ['src/js/tmp/']
    },
    // Jade compiler
    jade: {
      compile: {
        options: {
          client: true,
          data: { debug: false },
          processName: function(str) { return str.match(/^src\/jst\/(.*)\.jade$/)[1]; },
        },
        files: {
          'src/js/tmp/templates.js': ['src/jst/**/*.jade']
        }
      }
    },
    // Uglifier
    uglify: {
      production: {
        files: {
          'public/js/public.min.js': [
            'src/js/lib/jquery.js',
            'src/js/lib/underscore.js',
            'src/js/lib/backbone.js',
            'src/js/lib/marionette.js',
            'src/js/lib/jaderuntime.js',
            'src/js/app/config/marionette/renderer.js',
            'src/js/app/ss2app.js',
            'src/js/tmp/templates.js',
            'src/js/app/apps/**/*.js'
          ],
        }
      },
      dev: {
        files: {
          'public/js/lib.min.js': [
            'src/js/lib/jquery.js',
            'src/js/lib/underscore.js',
            'src/js/lib/backbone.js',
            'src/js/lib/marionette.js',
            'src/js/lib/jaderuntime.js'
          ],
          'public/js/app.js': [
            'src/js/tmp/templates.js',
            'src/js/app/config/marionette/renderer.js',
            'src/js/app/ss2app.js',
            'src/js/app/entities/**/*.js',
            'src/js/app/apps/**/*.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['clean:public', 'jade', 'uglify:dev', 'clean:tmp']);
  grunt.registerTask('prod', ['clean:public', 'jade', 'uglify:production', 'clean:tmp']);
};