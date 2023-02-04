module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        files: [{
            expand: true,
            cwd: 'source/js',
            src: ['scripts.js','modernizr.js','dropcap.js','responsive-nav.js','jquery-1112.js'],
            dest: 'docs/js',
            ext: '.min.js'
        }]
      }
    }, 
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'source/css/',
          src: ['style.css'],
          dest: 'docs/css',
          ext: '.min.css'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: 'source/',
          src: '{,*/}*.html',
          dest: 'docs/'
        }]
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: 'docs/images',
          ext: '.min.jpg'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'source',
          src: ['*.{ico,txt,md,json,xml}', '.*'],
          dest: 'docs'
        }]
      }
    },
    'serve': { 
        'path': '/sobre/docs'
    },
    watch: {
    scripts: {
    files: ['**/*.html'],
    tasks: ['htmlmin'],
    options: {
    spawn: false,
    },
  },
},
    
    // ...
  });
  

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin', 'imagemin', 'copy']);
 
};