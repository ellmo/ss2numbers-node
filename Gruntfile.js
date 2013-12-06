module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Jade compiler
    jade: {
      compile: {
        options: {
          client: true,
          data: { debug: false },
          processName: function(str) { return str.match(/^views\/templates\/(.*)\.jade$/)[1]; },
        },
        files: {
          'public/js/app/templates/templates.js': ['views/templates/*.jade', 'views/templates/some_directory/*.jade']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['jade']);
};