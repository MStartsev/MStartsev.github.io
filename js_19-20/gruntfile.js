module.exports = function (grunt) {

	grunt.initConfig({

		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					"build/index.html": ["src/page.jade"]
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'src/lib/jquery.js',
					'src/lib/jcarousel.js',
					'src/lib/lodash.js',
					'src/lib/data.js',
					'src/main.js',
					'src/blocks/*/*.js'],
				dest: 'build/js/script.min.js'
			}			
		},

		uglify: {
			dist: {
				src: ['build/js/script.min.js'],
				dest: 'build/js/script.min.js'
			}
		},

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['*.scss'],
					dest: 'src/css/',
					ext: '.css'
				}]
			}
		},

		cssmin: {
			with_banner: {
				options: {
					banner: '/* minified CSS */'
				},

				files: {
					'build/css/style.min.css' : ['src/css/*.css']
				}
			}
		},

		imagemin: { 
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'build/img/'
				}]
			}
		},

		watch: {
			// options: { 
			// 	livereload: true,
			// },
			default: {
				files: ['src/*.*','src/*/*.*', 'src/*/*/*.*', 'src/*/*/*/*.*'],
				tasks: ['jade', 'concat', 'uglify', 'sass', 'cssmin'],
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jade', 'concat', 'uglify', 'sass', 'cssmin', 'imagemin', 'watch']);

};