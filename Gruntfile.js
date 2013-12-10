module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Cleaner
    clean: {
      dev: ['public/js/app.min.js', 'src/js'],
      prod: ['public/js']
    },
    // Copy
    copy: {
      dev:{
        files: [
          {expand: true, cwd: 'src/js', src: '**/*', dest: 'public/js'},
          {src: 'views/layout_dev.jade', dest: 'views/layout.jade'}
        ]
      },
      prod: {
        files: [
          {expand: true, cwd: 'public/js', src: '**/*', dest: 'src/js'},
          {src: 'views/layout_prod.jade', dest: 'views/layout.jade'}
        ]
      }
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
          'src/js/app/templates.js': ['src/jst/**/*.jade']
        }
      }
    },
    // Uglifier
    uglify: {
      production: {
        files: {
          'public/js/app.min.js': [
            'src/js/lib/jquery.js',
            'src/js/lib/underscore.js',
            'src/js/lib/backbone.js',
            'src/js/lib/marionette.js',
            'src/js/lib/jaderuntime.js',
            'src/js/app/templates.js',
            'src/js/app/config/marionette/renderer.js',
            'src/js/app/ss2app.js',
            'src/js/app/entities/**/*.js',
            'src/js/app/apps/**/*.js'
          ],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', function(arg){
    grunt.log.error("Choose <grunt dev> or <grunt prod>\nAND BE SURE YOU KNOW WHAT YOU`RE DOING!\n\nBetter Commit all your changes right now!\n\n");
  });
  grunt.registerTask('dev', ['copy:dev', 'clean:dev']);
  grunt.registerTask('prod', ['copy:prod', 'clean:prod', 'jade', 'uglify:production']);
};