module.exports = {
    fonts: {
        files: [
            {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/fonts',
                src: ['**'],
                dest: 'fonts/',
                filter: 'isFile'
            }
        ]
    }
};