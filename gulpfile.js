var cleanCSS = require('gulp-clean-css'), // minify CSS;
    uglify = require('gulp-uglify'), // minify JS
    concat = require('gulp-concat'), // concat files
    linker = require('gulp-linker'), // making links to files
    sass = require('gulp-ruby-sass'),
    merge = require('merge-stream'),
    rename = require('gulp-rename'),
    cssRebaseUrls = require('gulp-css-rebase-urls'),
    gulp = require('gulp'),
    debug = require('gulp-debug');

var scriptsFilesList = [
    //packages
    'client/js/angular.js',
    'client/js/angular-ui-router.js',
    'client/js/ui-bootstrap-tpls.js'
];

var projectFilesList = [
    //project files
    'client/*/*.module.js',
    'client/*/*.controller.js',
    'client/*/*.directive.js',
    'client/*/*.service.js',
    'client/*/*.route.js',
    'client/*/*.filter.js'
];

var ccsFilesList = [
    'client/css/bootstrap.css',
    'client/css/style.css'
];

var minProjectCssFileList = [
    'css/app.min.css'
];

// Собираем JS
function jsToMin() {
    return gulp.src(scriptsFilesList)
        .pipe(uglify({mangle: false})) // uglify JS
        .pipe(concat('app.min.js')) // concat JS
        .pipe(gulp.dest('js/'))
        .pipe(debug({title: 'unicorn:'}));
}

gulp.task('jsToMin', function () {
    return jsToMin();
});

// Собираем CSS
function cssToMin() {
    return gulp.src(ccsFilesList)
        .pipe(cssRebaseUrls({root: '/client/css'}))
        .pipe(concat('app.min.css')) // concat css
        .pipe(minifyCss())
        .pipe(gulp.dest('/client/css')) // write css;
        .pipe(debug({title: 'unicorn:'}));
}

gulp.task('cssToMin', function () {
    return cssToMin();
});

// Генерируем ссылки на js/css Файлы
function createTplForDevelopment() {
    // Read templates
    return gulp.src('client/index.html')
    // Link the JavaScript
        .pipe(
            linker({
                scripts: [scriptsFilesList, projectFilesList],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script type="text/javascript" src="\%s"></script>',
                appRoot: 'client'
            }))
        // Link the CSS
        .pipe(linker({
            scripts: [ccsFilesList],
            startTag: '<!--STYLES-->',
            endTag: '<!--STYLES END-->',
            fileTmpl: '<link rel="stylesheet" type="text/css" href="\%s"/>',
            appRoot: 'client'
        }))
        // Write modified files to src/main/web/
        .pipe(gulp.dest('client'))
        .pipe(debug({title: 'unicorn:'}));
}

gulp.task('createTplForDevelopment', function () {
    return createTplForDevelopment();
});

function createTplForProduction() {
    var date = new Date().getTime();
    // Read templates
    return gulp.src('client/index.html')
    // Link the JavaScript
        .pipe(
            linker({
                scripts: [scriptsFilesList, projectFilesList],
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script type="text/javascript" src="/\%s?date=' + date + '"></script>',
                appRoot: 'client'
            }))
        // Link the CSS
        .pipe(linker({
            scripts: [minProjectCssFileList],
            startTag: '<!--STYLES-->',
            endTag: '<!--STYLES END-->',
            fileTmpl: '<link rel="stylesheet" type="text/css" href="/\%s"/>',
            appRoot: 'client'
        }))
        // Write modified files to src/main/web/
        .pipe(gulp.dest('client'))
        .pipe(debug({title: 'unicorn:'}));
}

gulp.task('createTplForProduction', function () {
    return createTplForProduction();
});

gulp.task('dev', ['cssToMin', 'jsToMin'], function () {
    return merge(
        createTplForDevelopment()
    );
});

// Задача по умолчанию
gulp.task('default', ['cssToMin', 'jsToMin'], function () {
    return merge(
        cssToMin(),
        jsToMin()
    );
});

// Задача для разработки
gulp.task('dev', function () {
    return merge(
        createTplForDevelopment()
    );
});

// Задача для продакшена
gulp.task('prod', ['cssToMin', 'jsToMin'], function () {
    return merge(
        cssToMin(),
        jsToMin()
        //createTplForProduction()
    );
});