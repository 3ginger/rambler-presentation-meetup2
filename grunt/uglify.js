module.exports = {
    modernizr: {
        files: {
            'web/js/modernizr.min.js': 'web/js/modernizr.js'
        }
    },
    app: {
        options:{
            compress: {
                drop_console: false
            }
        },
        files: {
            'web/js/app.min.js': 'web/js/app.js'
        }
    }
};