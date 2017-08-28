const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const replace = require('gulp-string-replace');
const autoprefixer = require('autoprefixer');

gulp.task('js', function() {
    return gulp
        .src([
            './src/component/**/*.js'
        ])
        .pipe(babel({
            "presets": ["es2015", "stage-0", "react"]
        }))
        .pipe(replace(/style.less/g, 'style.css'))
        .pipe(gulp.dest('./lib'));
});

gulp.task('css', function() {
    const plugins = [
        require('postcss-import')({
            root: __dirname,
            path: [path.join(__dirname, './src')],
        }),
        autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}),
        require('postcss-mixins')(),
        require('postcss-each')(),
        require('postcss-apply')()
    ];

    return gulp
        .src(['./src/component/*.less', './src/component/**/*.less'])
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['js', 'css']);