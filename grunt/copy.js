module.exports = {
    modernizr: {
        files: {
            'web/js/modernizr.js': 'bower/modernizr/modernizr.js'
        }
    },
    fonts: {
        expand: true,
        cwd: 'src/',
        src: 'fonts/**',
        dest: 'web/'
    }
};