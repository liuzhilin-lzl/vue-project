<!--
 * @Author: your name
 * @Date: 2021-11-08 08:51:54
 * @LastEditTime: 2021-11-09 16:33:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-project/src/components/tinymceModal/TinymceModal.vue
-->
<template>
	<div class="tinymce-editor">
		<editor v-model="myValue" :init="init" :disabled="disabled"></editor>
	</div>
	
</template>
<script>
import tinymce from 'tinymce/tinymce'; // tinymce默认hidden，不引入不显示
import Editor from '@tinymce/tinymce-vue';

// 引入富文本编辑器主题的js和css
import 'tinymce/skins/content/default/content.css';
import 'tinymce/themes/silver/theme.min.js';
import 'tinymce/icons/default/icons'; // 解决了icons.js 报错Unexpected token '<'

// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image'; // 插入上传图片插件
import 'tinymce/plugins/media'; // 插入视频插件
import 'tinymce/plugins/table'; // 插入表格插件
import 'tinymce/plugins/lists'; // 列表插件
import 'tinymce/plugins/wordcount'; // 字数统计插件
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
export default {
	components: {
		Editor,
	},
	props: {
		value: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		plugins: {
			type: [String, Array],
			default: 'link lists image code table wordcount',
		},
		toolbar: {
			type: [String, Array],
			default:
				'bold italic underline strikethrough | fontsizeselect fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink code | removeformat',
		},
		baseUrl: {
			type: String,
			default: window.location.origin ? window.location.origin : '',
		},
	},
	data() {
		return {
			init: {
				language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`, //如果语言包不存在，指定一个语言包路径
				language: 'zh_CN', //语言
				skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
				height: '700px',
				width: this.calcWidth(),
				plugins: this.plugins, //插件
				toolbar: this.toolbar, //工具栏
				branding: false, //技术支持(Powered by Tiny || 由Tiny驱动)
				menubar: true, //菜单栏
				theme: 'silver', //主题
				zIndex: 1101,
			},
			myValue: this.value,
		};
	},
	mounted() {
		tinymce.init({});
	},
	methods: {
		calcWidth() {
			return document.body.clientWidth / 2 + 'px';
		},
	},
	watch: {
		value(newValue) {
			this.myValue = newValue;
		},
		myValue(newValue) {
			this.$emit('input', newValue);
		},
	},
};
</script>

