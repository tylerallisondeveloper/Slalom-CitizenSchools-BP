module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './public/stylesheets/main-test.css': './public/stylesheets/main-test.scss'
        }
      }
    }
  });

  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', ['sass']);
};