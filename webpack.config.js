var webpack = require('webpack'),
	fs = require('fs'),
	configObj = getConfig();

var skin = configObj.skin;
var extraPlugins = configObj.extraPlugins?configObj.extraPlugins.split(','):[];

var core = ["./core/ckeditor_base.js","./core/loader.js","./core/event.js", "./core/editor_basic.js", "./core/env.js", "./core/ckeditor_basic.js", "./core/log.js", "./core/dom.js", "./core/tools.js", "./core/dtd.js", "./core/dom/event.js", "./core/dom/domobject.js", "./core/dom/node.js", "./core/dom/window.js", "./core/dom/document.js", "./core/dom/nodelist.js", "./core/dom/element.js", "./core/dom/documentfragment.js", "./core/dom/walker.js", "./core/dom/range.js", "./core/dom/iterator.js", "./core/command.js", "./core/config.js", "./core/filter.js", "./core/focusmanager.js", "./core/keystrokehandler.js", "./core/lang.js", "./core/scriptloader.js", "./core/resourcemanager.js", "./core/plugins.js", "./core/ui.js", "./core/editor.js", "./core/htmlparser.js", "./core/htmlparser/basicwriter.js", "./core/htmlparser/node.js", "./core/htmlparser/comment.js", "./core/htmlparser/text.js", "./core/htmlparser/cdata.js", "./core/htmlparser/fragment.js", "./core/htmlparser/filter.js", "./core/htmldataprocessor.js", "./core/htmlparser/element.js", "./core/template.js", "./core/ckeditor.js", "./core/creators/inline.js", "./core/creators/themedui.js", "./core/editable.js", "./core/selection.js", "./core/style.js", "./core/dom/comment.js", "./core/dom/elementpath.js", "./core/dom/text.js", "./core/dom/rangelist.js", "./core/skin.js", "./core/_bootstrap.js"]

var config = ["./config.js","./lang/zh-cn.js"];

var plugin = ["./plugins/about/plugin.js", "./plugins/a11yhelp/plugin.js", "./plugins/basicstyles/plugin.js", "./plugins/bidi/plugin.js", "./plugins/blockquote/plugin.js", "./plugins/clipboard/plugin.js", "./plugins/colorbutton/plugin.js","./plugins/colordialog/plugin.js", "./plugins/contextmenu/plugin.js", "./plugins/dialogadvtab/plugin.js", "./plugins/div/plugin.js", "./plugins/elementspath/plugin.js", "./plugins/enterkey/plugin.js", "./plugins/entities/plugin.js", "./plugins/filebrowser/plugin.js", "./plugins/find/plugin.js", "./plugins/flash/plugin.js", "./plugins/floatingspace/plugin.js", "./plugins/font/plugin.js", "./plugins/format/plugin.js", "./plugins/forms/plugin.js", "./plugins/horizontalrule/plugin.js", "./plugins/htmlwriter/plugin.js", "./plugins/image/plugin.js", "./plugins/iframe/plugin.js", "./plugins/indentlist/plugin.js", "./plugins/indentblock/plugin.js", "./plugins/justify/plugin.js", "./plugins/language/plugin.js", "./plugins/link/plugin.js", "./plugins/list/plugin.js", "./plugins/liststyle/plugin.js", "./plugins/magicline/plugin.js", "./plugins/maximize/plugin.js", "./plugins/newpage/plugin.js", "./plugins/pagebreak/plugin.js", "./plugins/pastefromword/plugin.js", "./plugins/pastetext/plugin.js", "./plugins/preview/plugin.js", "./plugins/print/plugin.js", "./plugins/removeformat/plugin.js", "./plugins/resize/plugin.js", "./plugins/save/plugin.js", "./plugins/selectall/plugin.js", "./plugins/showblocks/plugin.js", "./plugins/showborders/plugin.js", "./plugins/smiley/plugin.js", "./plugins/sourcearea/plugin.js", "./plugins/specialchar/plugin.js", "./plugins/stylescombo/plugin.js", "./plugins/tab/plugin.js", "./plugins/table/plugin.js", "./plugins/tabletools/plugin.js", "./plugins/templates/plugin.js", "./plugins/toolbar/plugin.js", "./plugins/undo/plugin.js", "./plugins/wysiwygarea/plugin.js","./plugins/dialog/dialogDefinition.js", "./plugins/dialog/plugin.js", "./plugins/panelbutton/plugin.js", "./plugins/floatpanel/plugin.js", "./plugins/menu/plugin.js", "./plugins/popup/plugin.js", "./plugins/fakeobjects/plugin.js", "./plugins/richcombo/plugin.js", "./plugins/indent/plugin.js", "./plugins/menubutton/plugin.js", "./plugins/button/plugin.js", "./plugins/dialogui/plugin.js", "./plugins/panel/plugin.js", "./plugins/listblock/plugin.js", "./plugins/about/lang/zh-cn.js", "./plugins/basicstyles/lang/zh-cn.js", "./plugins/bidi/lang/zh-cn.js", "./plugins/blockquote/lang/zh-cn.js", "./plugins/colorbutton/lang/zh-cn.js", "./plugins/clipboard/lang/zh-cn.js", "./plugins/contextmenu/lang/zh-cn.js", "./plugins/colordialog/lang/zh-cn.js", "./plugins/elementspath/lang/zh-cn.js", "./plugins/div/lang/zh-cn.js", "./plugins/find/lang/zh-cn.js", "./plugins/flash/lang/zh-cn.js", "./plugins/font/lang/zh-cn.js", "./plugins/forms/lang/zh-cn.js", "./plugins/format/lang/zh-cn.js", "./plugins/horizontalrule/lang/zh-cn.js", "./plugins/image/lang/zh-cn.js", "./plugins/iframe/lang/zh-cn.js", "./plugins/justify/lang/zh-cn.js", "./plugins/language/lang/zh-cn.js", "./plugins/link/lang/zh-cn.js", "./plugins/list/lang/zh-cn.js", "./plugins/liststyle/lang/zh-cn.js", "./plugins/maximize/lang/zh-cn.js", "./plugins/magicline/lang/zh-cn.js", "./plugins/newpage/lang/zh-cn.js", "./plugins/pastefromword/lang/zh-cn.js", "./plugins/pagebreak/lang/zh-cn.js","./plugins/pastetext/lang/zh-cn.js", "./plugins/preview/lang/zh-cn.js", "./plugins/print/lang/zh-cn.js", "./plugins/removeformat/lang/zh-cn.js", "./plugins/save/lang/zh-cn.js", "./plugins/selectall/lang/zh-cn.js", "./plugins/showblocks/lang/zh-cn.js", "./plugins/smiley/lang/zh-cn.js", "./plugins/sourcearea/lang/zh-cn.js", "./plugins/specialchar/lang/zh-cn.js", "./plugins/stylescombo/lang/zh-cn.js", "./plugins/table/lang/zh-cn.js", "./plugins/templates/lang/zh-cn.js", "./plugins/toolbar/lang/zh-cn.js", "./plugins/undo/lang/zh-cn.js", "./plugins/fakeobjects/lang/zh-cn.js", "./plugins/indent/lang/zh-cn.js", "./plugins/button/lang/zh-cn.js"];
var plugindialog = ["./plugins/about/dialogs/about.js","./plugins/clipboard/dialogs/paste.js","./plugins/link/dialogs/anchor.js","./plugins/link/dialogs/link.js","./plugins/codesnippet/dialogs/codesnippet.js","./plugins/colordialog/dialogs/colordialog.js","./plugins/div/dialogs/div.js","./plugins/find/dialogs/find.js","./plugins/flash/dialogs/flash.js","./plugins/forms/dialogs/button.js","./plugins/forms/dialogs/checkbox.js","./plugins/forms/dialogs/form.js","./plugins/forms/dialogs/hiddenfield.js","./plugins/forms/dialogs/radio.js","./plugins/forms/dialogs/select.js","./plugins/forms/dialogs/textarea.js","./plugins/forms/dialogs/textfield.js","./plugins/iframe/dialogs/iframe.js","./plugins/forms/dialogs/button.js","./plugins/image/dialogs/image.js","./plugins/forms/dialogs/button.js","./plugins/image2/dialogs/image2.js","./plugins/forms/dialogs/button.js","./plugins/link/dialogs/link.js","./plugins/forms/dialogs/button.js","./plugins/liststyle/dialogs/liststyle.js","./plugins/smiley/dialogs/smiley.js","./plugins/specialchar/dialogs/specialchar.js","./plugins/table/dialogs/table.js","./plugins/templates/dialogs/templates.js","./plugins/dialog/dialogDefinition.js"]

var css = ["./skins/"+skin+"/editor.css","./skins/"+skin+"/dialog.css",'./contents.css'];
var skin = ['./skins/'+skin+'/skin.js'];//应该根据皮肤来选
var style = ['./styles.js']
var icons = configObj.icons.split(',');

var pre = core.concat(config).concat(plugin).concat(plugindialog).concat(extraPlugins).concat(skin).concat(css);

module.exports = {
	entry:{
		css:css,
		// ckeditor:Wrapre(),

	},
	output:{
		path:'./vue-ckeditor-sample/js',
		filename:"[name].js"
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:"vue"},
			{test:/\.js$/,loader:"babel"},
			{test:/\.(css|scss)$/,loader:"style-loader!css-loader!sass-loader"},
			{test: /\.(png|jpg|svg|gif)$/, loader: 'url?=dest/image/[name].[ext]'}
		]
	},
	//留给gulp执行的函数也一并抛出
	fn:wrapPre
}

function wrapPre(){
	requireIconAndCss(icons,["./vue-ckeditor-sample/js/css.js"]);
	return pre;
}


function getConfig(){
	var CKEDITOR ={};
	var fnStr = fs.readFileSync('./config.js','utf8');
	eval(fnStr.toString());
	var t = {};
	CKEDITOR.editorConfig(t)
	return t;
}

function requireIconAndCss(arr,cssarr){
	var image = fs.readdirSync('./plugins/smiley/images');//表情的图片
	images = image.map(function(e){
		if(e.trim().length >=1)
			return "./plugins/smiley/images/"+e;
	});
	arr = arr.concat(images);
	var str = 'module.exports = {\r\n';

	arr.forEach(function(e){
		if(e.trim().length >=1) 
			str = str + e.replace(/\./g,'a').replace(/\//g,'b').replace(/\\/g,'c').replace(/\-/g,'d')+':(require("'+e+'")),\r\n';
	});

	var cssjs = fs.readFileSync('./vue-ckeditor-sample/js/css.js','base64');
	str = str+cssarr[0].replace(/\./g,'a').replace(/\//g,'b').replace(/\\/g,'c').replace(/\-/g,'d')+":'"+cssjs+"'";

    fs.writeFileSync('./.icons',str+'\r\n}');
}
