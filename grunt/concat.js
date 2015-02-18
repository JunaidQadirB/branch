module.exports = {
    options: {
        banner: '<%= banner %>',
        stripBanners: true
    },
    js: {
        src: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'js/site.js'
        ],
        dest: 'js/all.js'
    }
};