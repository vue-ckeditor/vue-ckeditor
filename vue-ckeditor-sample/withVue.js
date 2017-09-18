var Vue = require('vue');
var Ckeditor = require('./components/ckeditor.vue');

var Parent = Vue.extend({
	template: '<div><ckeditor></ckeditor></div>',
	components: {
		'ckeditor': Ckeditor
	}
})

Vue.component('ckeditor-component', Parent);

new Vue({
	el: 'body'
})

//新建编辑器实例 create an editor instance

if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
	CKEDITOR.tools.enableHtml5Elements(document);


CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var initSample = (function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get('bbcode');

	return function() {
		var editorElement = CKEDITOR.document.getById('editor');

		if (isBBCodeBuiltIn) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=http://ckeditor.com]CKEditor[/url].'
			);
		}

		if (wysiwygareaAvailable) {
			CKEDITOR.replace('editor');
		} else {
			editorElement.setAttribute('contenteditable', 'true');
			CKEDITOR.inline('editor');

		}
	};

	function isWysiwygareaAvailable() {
		if (CKEDITOR.revision == ('%RE' + 'V%')) {
			return true;
		}

		return !!CKEDITOR.plugins.get('wysiwygarea');
	}
})();

initSample();