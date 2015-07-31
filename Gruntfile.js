module.exports = function(grunt) {
    
  var theme = '.';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bower_concat: {
      all: {
        dest: theme+'/js/_bower.js',
        cssDest: theme+'/css/_bower.css'
      }
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */\n'
      },
      build: {
        src: [theme+'/js/*.js'],
        dest: theme+'/dist/all.min.js'
      }
    },
    
    less: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */\n'
      },
      build: {
        src: [theme+'/less/main.less'],
        dest: theme+'/css/main.css'
      }
    },
    
    cssmin: {
      build: {
        src: [theme+'/css/*.css'],
        dest: theme+'/dist/all.min.css'
      }
    },
    
    autoprefixer: {
      build: {
        src: theme+'/dist/all.min.css',
        dest: theme+'/dist/all.min.css'
      }
    },
    
    shell: {
      options: {
        stderr: false,
        execOptions: {
            maxBuffer: 200*1024*1000
        },
        
      },
      target: {
        command:  [
          //'cd C:/xampp/htdocs/katuscak/deployment',
          //'php deployment.php deployment.ini'
        ].join('&&')
      }
    },
    
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: [theme+'/*.php',theme+'/*.html',theme+'/*/*.php',theme+'/*/*.html',theme+'/*/*.latte',theme+'/*/*.latte'],
        tasks: [],
      },
      less: {
        files: [theme+'/less/*.less'],
        tasks: ['less'],
      },
      css: {
        files: [theme+'/css/*.css'],
        tasks: ['cssmin','autoprefixer']
      },
      script: {
        files: [theme+'/js/*.js'],
        tasks: ['uglify']
      },
      shell: {
        files: ['version.txt'],
        tasks: ['shell']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['bower_concat', 'uglify', 'less', 'cssmin', 'autoprefixer', 'watch']);

};