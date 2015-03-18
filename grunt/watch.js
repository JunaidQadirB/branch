module.exports = {
        scripts: {
            files: ['js/*.js'],
            task: 'jshint',
            options: {
                spawn: false
            }
        },
        styles: {
            files: ['less/site.less'],
            tasks: ['less', 'cssmin']
        }
        /*lib_test: {
         files: '<%= jshint.lib_test.src %>',
         tasks: ['jshint:lib_test']
         }*/
};
