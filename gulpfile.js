var gulp = require('gulp');
var frontifyApi = require('@frontify/frontify-api');

gulp.task('patterns', function() {
    frontifyApi.syncPatterns({access_token: '939851754762cc5700b50b7cd5816b421e8ac1765a0b5e5dcd92af0dff3d7576be1b696cb5347d09', project: '9', baseUrl: 'https://younity.frontify.com'}, ['patterns/**/*.json']).catch(function(err) {
        console.error(err);
    });
});

gulp.task('assets', function() {
    frontifyApi.syncAssets({access_token: '939851754762cc5700b50b7cd5816b421e8ac1765a0b5e5dcd92af0dff3d7576be1b696cb5347d09', project: '9', baseUrl: 'https://younity.frontify.com', cwd: ''}, ['assets/**/*.*']).catch(function(err) {
        console.error(err);
    });
});

gulp.task('default', ['patterns']);
