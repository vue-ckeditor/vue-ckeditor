/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'zh-cn';
	// config.uiColor = '#AADC6E';
	config.skin = 'moono';//原来是在ckeditor中设置的
	// %REMOVE_START%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%

	config.icons = './plugins/sourcearea/icons/source.png,'
					+'./plugins/save/icons/save.png,'
					+'./plugins/newpage/icons/newpage.png,'
					+'./plugins/preview/icons/preview.png,'
					+'./plugins/print/icons/print.png,'
					+'./plugins/templates/icons/templates.png,'
					+'./plugins/clipboard/icons/cut.png,'
					+'./plugins/clipboard/icons/copy.png,'
					+'./plugins/clipboard/icons/paste.png,'
					+'./plugins/pastetext/icons/pastetext.png,'
					+'./plugins/pastefromword/icons/pastefromword.png,'
					+'./plugins/undo/icons/undo.png,'
					+'./plugins/undo/icons/redo.png,'
					+'./plugins/find/icons/find.png,'
					+'./plugins/find/icons/replace.png,'
					+'./plugins/selectall/icons/selectall.png,'
					+'./plugins/forms/icons/form.png,'
					+'./plugins/forms/icons/checkbox.png,'
					+'./plugins/forms/icons/radio.png,'
					+'./plugins/forms/icons/textfield.png,'
					+'./plugins/forms/icons/textarea.png,'
					+'./plugins/forms/icons/select.png,'
					+'./plugins/forms/icons/button.png,'
					+'./plugins/forms/icons/imagebutton.png,'
					+'./plugins/forms/icons/hiddenfield.png,'
					+'./plugins/basicstyles/icons/bold.png,'
					+'./plugins/basicstyles/icons/italic.png,'
					+'./plugins/basicstyles/icons/underline.png,'
					+'./plugins/basicstyles/icons/strike.png,'
					+'./plugins/basicstyles/icons/subscript.png,'
					+'./plugins/basicstyles/icons/superscript.png,'
					+'./plugins/removeformat/icons/removeformat.png,'
					+'./plugins/list/icons/numberedlist.png,'
					+'./plugins/list/icons/bulletedlist.png,'
					+'./plugins/indent/icons/outdent.png,'
					+'./plugins/indent/icons/indent.png,'
					+'./plugins/blockquote/icons/blockquote.png,'
					+'./plugins/div/icons/creatediv.png,'
					+'./plugins/justify/icons/justifyleft.png,'
					+'./plugins/justify/icons/justifycenter.png,'
					+'./plugins/justify/icons/justifyright.png,'
					+'./plugins/justify/icons/justifyblock.png,'
					+'./plugins/bidi/icons/bidiltr.png,'
					+'./plugins/bidi/icons/bidirtl.png,'
					+'./plugins/language/icons/language.png,'
					+'./plugins/link/icons/link.png,'
					+'./plugins/link/icons/unlink.png,'
					+'./plugins/link/icons/anchor.png,'
					+'./plugins/image/icons/image.png,'
					+'./plugins/flash/icons/flash.png,'
					+'./plugins/table/icons/table.png,'
					+'./plugins/horizontalrule/icons/horizontalrule.png,'
					+'./plugins/smiley/icons/smiley.png,'
					+'./plugins/specialchar/icons/specialchar.png,'
					+'./plugins/pagebreak/icons/pagebreak.png,'
					+'./plugins/iframe/icons/iframe.png,'
					+'./plugins/colorbutton/icons/textcolor.png,'
					+'./plugins/colorbutton/icons/bgcolor.png,'
					+'./plugins/maximize/icons/maximize.png,'
					+'./plugins/showblocks/icons/showblocks.png,'
					+'./plugins/about/icons/about.png,'
					+'./plugins/list/icons/numberedlist-rtl.png,'
					+'./plugins/list/icons/bulletedlist-rtl.png,'
					+'./plugins/indent/icons/outdent-rtl.png,'
					+'./plugins/indent/icons/indent-rtl.png';
};
// %LEAVE_UNMINIFIED% %REMOVE_LINE%
