module.exports = {
    options: {
        banner: '<%= banner %>'
    },
    target: {
        files: {
            'css/all.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.css', 'css/site.css']
        }
    }
};