var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");

gulp.task('PackageCss',function(cb){
	webpack(webpackConfig, (err, stats) => {
  		console.log(stats.toString())
  		cb()
  	})
})
gulp.task('PackageEditor',["PackageCss"],function(cb){
		webpackConfig.entry.ckeditor = webpackConfig.fn()
		webpack(webpackConfig, (err, stats) => {
  		console.log(stats.toString())
  		cb()
  	})
})

gulp.task('vue',["PackageEditor"],function(cb){
	webpack({
		entry:{
			withVue:"./vue-ckeditor-sample/withVue.js"
		},
		output:{
			path:'./vue-ckeditor-sample/output',
			filename:"[name].js"
		},
	module:{
		loaders:[
			{test:/\.vue$/,loader:"vue"},
			{test:/\.js$/,loader:"babel"},
			{test:/\.(css|scss)$/,loader:"style-loader!css-loader!sass-loader"},
			{test: /\.(png|jpg|svg|gif)$/, loader: 'url?=dest/image/[name].[ext]'}
		]
		}
	}, (err, stats) => {
  		console.log(stats.toString())
  		cb()
  	})
})

gulp.task('uglify',['vue'],function () {
    gulp.src(['./vue-ckeditor-sample/output/withVue.js']) //多个文件以数组形式传入
        .pipe(uglify())
        .pipe(gulp.dest('./vue-ckeditor-sample/output/withVue.min'));
});

gulp.task('default',function(){
	gulp.run(['PackageCss','PackageEditor','vue','uglify']);
})