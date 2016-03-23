module.exports = function (grunt) {

	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [ 'src/js/lib/*.js', 'src/js/plug/*.js', 'src/js/scripts/*.js'],
				dest: 'dest/js/script.min.js'
			}
		},

		uglify: {
			dist: {
				src: ['dest/js/script.min.js'],
				dest: 'dest/js/script.min.js'
			}
		},

		cssmin: {
						with_banner: {
								options: {
										banner: '/* minified CSS */'
								},

								files: {
										'dest/css/style.min.css' : ['src/css/reset/*.css', 'src/css/styles/*.css']
								}
						}
		},

		imagemin: { 
						dynamic: {
								files: [{
										expand: true,
										cwd: 'src/img/',
										src: ['**/*.{png,jpg,gif}'],
										dest: 'dest/img/'
								}]
						}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin']);

};