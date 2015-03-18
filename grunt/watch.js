module.exports = {
        scripts: {
            files: ['js/*.js'],
            task: 'jshint',
            options: {
               livereload: true
            }
        },
        styles: {
            files: ['less/site.less'],
            tasks: ['less', 'cssmin'],
            options: {
               livereload: true
            }
        }
        /*lib_test: {
         files: '<%= jshint.lib_test.src %>',
         tasks: ['jshint:lib_test']
         }*/
};
