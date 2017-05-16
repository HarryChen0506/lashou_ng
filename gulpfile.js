/**
 * Created by acer on 2017/3/18.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');
// 让gulp按顺序执行
var gulpSequence = require('gulp-sequence');

var app = {
    srcPath:'src/',
    devPath:'build/',
    prodPath:'dist/'
}

gulp.task('lib',function () {
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath+'vendor'))
        .pipe(gulp.dest(app.prodPath+'vendor'))
        .pipe($.connect.reload())
})
gulp.task('html', function () {
    gulp.src(app.srcPath+'**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prodPath))
        .pipe($.connect.reload())        
})
gulp.task('json', function () {
    gulp.src(app.srcPath+'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.prodPath+'data'))
        .pipe($.connect.reload())        
})
gulp.task('less',function () {
    gulp.src(app.srcPath+'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prodPath+'css'))
        .pipe($.connect.reload())        
})
gulp.task('js', function () {
    gulp.src(app.srcPath+'script/**/*js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath+'js'))
        .pipe($.uglify())
        .pipe($.connect.reload())
        .pipe(gulp.dest(app.prodPath+'js'))
})
gulp.task('image', function () {
    gulp.src(app.srcPath+'image/*.*')
        .pipe(gulp.dest(app.devPath+'image'))
        //.pipe($.imagemin())
        .pipe(gulp.dest(app.prodPath+'image'))
        .pipe($.connect.reload())        
})
gulp.task('clean', function (cb) {
    gulp.src([app.devPath,app.prodPath])
        .pipe($.clean())
    setTimeout(function(){
        return cb();
    },2000)
})
// gulp.task('build',['lib','html','json','less','js','image'])
gulp.task('build',$.sequence('clean',['lib','html','json','less','js','image']))
gulp.task('serve',['build'], function () {
    $.connect.server({
        root:[app.devPath],
        livereload: true,
        port:1234
    });
    open('http://localhost:1234');

    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'style/**/*.less',['less']);
    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch(app.srcPath + 'image/**/*',['image']); 
    
})
gulp.task('default',['serve'])

