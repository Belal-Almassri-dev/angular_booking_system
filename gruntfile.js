module.exports = function(grunt) {
  // Configure Grunt 
  grunt.initConfig({
    dirs: { // declate variable names here!!
        input: 'src',
        output: 'build'
    },


    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
		  base: '<%= dirs.output %>/',
          keepalive: true
        }
      }
    },
	
	less: {
	  development: {
		files: {
		  '<%= dirs.output %>/styles/result.css': '<%= dirs.input %>/styles/main.less'
		}
	  }
	},
	
	copy: {
		main: {
			expand: true,
			cwd: '<%= dirs.input %>',
			src: '**',
			dest: '<%= dirs.output %>/',
		}
	},
	
	watch: { 
	  scripts: {
		files: '<%= dirs.input %>/**',
		tasks: ['copy','less'],
		options: {
		  event: ['added', 'deleted'],
		}
	  }
	}
	

	
	
	
  });
  
  
  	// Load required libraries
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');


	  // Creates the `server` task
	  grunt.registerTask('server',[
		'connect'
	  ]);
	  
	  // Build the project
	  grunt.registerTask('build',[
		'copy',
		'less'
	  ]);
	  grunt.registerTask('dev',[ // this can be done to improve functionality, so when you run it it will make sure that the build folder is up to date with the source files, it is usefull when developing.
		'watch'
	  ]);
};