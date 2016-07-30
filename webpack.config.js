var webpack = require('webpack');
var core = ["./core/ckeditor_base.js","./core/loader.js","./core/event.js", "./core/editor_basic.js", "./core/env.js", "./core/ckeditor_basic.js", "./core/log.js", "./core/dom.js", "./core/tools.js", "./core/dtd.js", "./core/dom/event.js", "./core/dom/domobject.js", "./core/dom/node.js", "./core/dom/window.js", "./core/dom/document.js", "./core/dom/nodelist.js", "./core/dom/element.js", "./core/dom/documentfragment.js", "./core/dom/walker.js", "./core/dom/range.js", "./core/dom/iterator.js", "./core/command.js", "./core/config.js", "./core/filter.js", "./core/focusmanager.js", "./core/keystrokehandler.js", "./core/lang.js", "./core/scriptloader.js", "./core/resourcemanager.js", "./core/plugins.js", "./core/ui.js", "./core/editor.js", "./core/htmlparser.js", "./core/htmlparser/basicwriter.js", "./core/htmlparser/node.js", "./core/htmlparser/comment.js", "./core/htmlparser/text.js", "./core/htmlparser/cdata.js", "./core/htmlparser/fragment.js", "./core/htmlparser/filter.js", "./core/htmldataprocessor.js", "./core/htmlparser/element.js", "./core/template.js", "./core/ckeditor.js", "./core/creators/inline.js", "./core/creators/themedui.js", "./core/editable.js", "./core/selection.js", "./core/style.js", "./core/dom/comment.js", "./core/dom/elementpath.js", "./core/dom/text.js", "./core/dom/rangelist.js", "./core/skin.js", "./core/_bootstrap.js"]
var config = ["../config.js"];
var pre = core.concat(config);
module.exports = {
	entry:{
		ckeditor:pre
	},
	output:{
		path:'./',
		filename:"init.js"
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:"vue"},
			{test:/\.js$/,loader:"babel"},
			{test:/\.(css|scss)$/,loader:"style-loader!css-loader!sass-loader"},
			{test: /\.(png|jpg|svg)$/, loader: 'url?=dest/image/[name].[ext]'}
		]
	},
}