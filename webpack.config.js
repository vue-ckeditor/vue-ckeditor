var webpack = require('webpack');
var fs = require('fs')
var skin = getSkinName();
var core = ["./core/ckeditor_base.js","./core/loader.js","./core/event.js", "./core/editor_basic.js", "./core/env.js", "./core/ckeditor_basic.js", "./core/log.js", "./core/dom.js", "./core/tools.js", "./core/dtd.js", "./core/dom/event.js", "./core/dom/domobject.js", "./core/dom/node.js", "./core/dom/window.js", "./core/dom/document.js", "./core/dom/nodelist.js", "./core/dom/element.js", "./core/dom/documentfragment.js", "./core/dom/walker.js", "./core/dom/range.js", "./core/dom/iterator.js", "./core/command.js", "./core/config.js", "./core/filter.js", "./core/focusmanager.js", "./core/keystrokehandler.js", "./core/lang.js", "./core/scriptloader.js", "./core/resourcemanager.js", "./core/plugins.js", "./core/ui.js", "./core/editor.js", "./core/htmlparser.js", "./core/htmlparser/basicwriter.js", "./core/htmlparser/node.js", "./core/htmlparser/comment.js", "./core/htmlparser/text.js", "./core/htmlparser/cdata.js", "./core/htmlparser/fragment.js", "./core/htmlparser/filter.js", "./core/htmldataprocessor.js", "./core/htmlparser/element.js", "./core/template.js", "./core/ckeditor.js", "./core/creators/inline.js", "./core/creators/themedui.js", "./core/editable.js", "./core/selection.js", "./core/style.js", "./core/dom/comment.js", "./core/dom/elementpath.js", "./core/dom/text.js", "./core/dom/rangelist.js", "./core/skin.js", "./core/_bootstrap.js"]
var config = ["./config.js","./lang/zh-cn.js"];
var plugin = ["./plugins/about/plugin.js", "./plugins/a11yhelp/plugin.js", "./plugins/basicstyles/plugin.js", "./plugins/bidi/plugin.js", "./plugins/blockquote/plugin.js", "./plugins/clipboard/plugin.js", "./plugins/colorbutton/plugin.js", "./plugins/colordialog/plugin.js", "./plugins/contextmenu/plugin.js", "./plugins/dialogadvtab/plugin.js", "./plugins/div/plugin.js", "./plugins/elementspath/plugin.js", "./plugins/enterkey/plugin.js", "./plugins/entities/plugin.js", "./plugins/filebrowser/plugin.js", "./plugins/find/plugin.js", "./plugins/flash/plugin.js", "./plugins/floatingspace/plugin.js", "./plugins/font/plugin.js", "./plugins/format/plugin.js", "./plugins/forms/plugin.js", "./plugins/horizontalrule/plugin.js", "./plugins/htmlwriter/plugin.js", "./plugins/image/plugin.js", "./plugins/iframe/plugin.js", "./plugins/indentlist/plugin.js", "./plugins/indentblock/plugin.js", "./plugins/justify/plugin.js", "./plugins/language/plugin.js", "./plugins/link/plugin.js", "./plugins/list/plugin.js", "./plugins/liststyle/plugin.js", "./plugins/magicline/plugin.js", "./plugins/maximize/plugin.js", "./plugins/newpage/plugin.js", "./plugins/pagebreak/plugin.js", "./plugins/pastefromword/plugin.js", "./plugins/pastetext/plugin.js", "./plugins/preview/plugin.js", "./plugins/print/plugin.js", "./plugins/removeformat/plugin.js", "./plugins/resize/plugin.js", "./plugins/save/plugin.js", "./plugins/selectall/plugin.js", "./plugins/showblocks/plugin.js", "./plugins/showborders/plugin.js", "./plugins/smiley/plugin.js", "./plugins/sourcearea/plugin.js", "./plugins/specialchar/plugin.js", "./plugins/stylescombo/plugin.js", "./plugins/tab/plugin.js", "./plugins/table/plugin.js", "./plugins/tabletools/plugin.js", "./plugins/templates/plugin.js", "./plugins/toolbar/plugin.js", "./plugins/undo/plugin.js", "./plugins/wysiwygarea/plugin.js", "./plugins/dialog/plugin.js", "./plugins/panelbutton/plugin.js", "./plugins/floatpanel/plugin.js", "./plugins/menu/plugin.js", "./plugins/popup/plugin.js", "./plugins/fakeobjects/plugin.js", "./plugins/richcombo/plugin.js", "./plugins/indent/plugin.js", "./plugins/menubutton/plugin.js", "./plugins/button/plugin.js", "./plugins/dialogui/plugin.js", "./plugins/panel/plugin.js", "./plugins/listblock/plugin.js", "./plugins/about/lang/zh-cn.js", "./plugins/basicstyles/lang/zh-cn.js", "./plugins/bidi/lang/zh-cn.js", "./plugins/blockquote/lang/zh-cn.js", "./plugins/colorbutton/lang/zh-cn.js", "./plugins/clipboard/lang/zh-cn.js", "./plugins/contextmenu/lang/zh-cn.js", "./plugins/colordialog/lang/zh-cn.js", "./plugins/elementspath/lang/zh-cn.js", "./plugins/div/lang/zh-cn.js", "./plugins/find/lang/zh-cn.js", "./plugins/flash/lang/zh-cn.js", "./plugins/font/lang/zh-cn.js", "./plugins/forms/lang/zh-cn.js", "./plugins/format/lang/zh-cn.js", "./plugins/horizontalrule/lang/zh-cn.js", "./plugins/image/lang/zh-cn.js", "./plugins/iframe/lang/zh-cn.js", "./plugins/justify/lang/zh-cn.js", "./plugins/language/lang/zh-cn.js", "./plugins/link/lang/zh-cn.js", "./plugins/list/lang/zh-cn.js", "./plugins/liststyle/lang/zh-cn.js", "./plugins/maximize/lang/zh-cn.js", "./plugins/magicline/lang/zh-cn.js", "./plugins/newpage/lang/zh-cn.js", "./plugins/pastefromword/lang/zh-cn.js", "./plugins/pagebreak/lang/zh-cn.js","./plugins/pastetext/lang/zh-cn.js", "./plugins/preview/lang/zh-cn.js", "./plugins/print/lang/zh-cn.js", "./plugins/removeformat/lang/zh-cn.js", "./plugins/save/lang/zh-cn.js", "./plugins/selectall/lang/zh-cn.js", "./plugins/showblocks/lang/zh-cn.js", "./plugins/smiley/lang/zh-cn.js", "./plugins/sourcearea/lang/zh-cn.js", "./plugins/specialchar/lang/zh-cn.js", "./plugins/stylescombo/lang/zh-cn.js", "./plugins/table/lang/zh-cn.js", "./plugins/templates/lang/zh-cn.js", "./plugins/toolbar/lang/zh-cn.js", "./plugins/undo/lang/zh-cn.js", "./plugins/fakeobjects/lang/zh-cn.js", "./plugins/indent/lang/zh-cn.js", "./plugins/button/lang/zh-cn.js"];
var css = ["./skins/"+skin+"/editor.css"];

var skin = ['./skins/'+skin+'/skin.js'];//应该根据皮肤来选
var style = ['./styles.js']
var pre = core.concat(config).concat(plugin).concat(skin).concat(css);
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

function getSkinName(){
	var CKEDITOR ={};
	var fnStr = fs.readFileSync('./config.js','utf8');
	eval(fnStr.toString());
	var t = {};
	CKEDITOR.editorConfig(t)
	console.log('skin:'+t.skin)
	return t.skin;
}
//zh-cn取决于配置，先跑通