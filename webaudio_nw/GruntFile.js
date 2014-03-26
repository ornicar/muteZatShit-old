module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
          build_dir: './webkitbuilds', // Where the build version of my node-webkit app is saved
          mac: true, // We want to build it for mac
          win: false, // We want to build it for win
          linux32: false, // We don't need linux32
          linux64: false // We don't need linux64
      },
      src: ['./**/*'] // Your node-webkit app
    },
    copy: {
      main: {
        files: [
          {
            src: 'libraries/mac/ffmpegsumo.so',
            dest: 'webkitbuilds/releases/webaudio_nw/mac/webaudio_nw.app/Contents/Frameworks/node-webkit Framework.framework/Libraries/ffmpegsumo.so',
            flatten: true
          },
          {
            src: 'libraries/win/ffmpegsumo.dll',
            dest: 'webkitbuilds/releases/webaudio_nw/win/webaudio_nw/ffmpegsumo.dll',
            flatten: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['nodewebkit', 'copy']);

};