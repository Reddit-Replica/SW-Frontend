<template>
	<div class="big-box">
		<!-- <div id="my-toolbar1" class="icons-box" v-if="!markdownMode">
			<div class="tool-tip">
				<span class="tool-tip-text">Bold</span>
				<button class="icons" id="bold">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-bold " />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Italics</span>
				<button class="icons" id="italic">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-italic" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Link</span>
				<button class="icons" id="link">
					<div>
						<svg
							class="svg-inline--fa fa-link icon"
							data-v-d316172c=""
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="link"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
							data-fa-i2svg=""
						>
							<path
								fill="currentColor"
								d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
							></path>
						</svg>
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Strikethrough</span>
				<button class="icons" id="strike">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-strikethrough" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Inline Code</span>
				<button class="icons" id="inline-code">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-code" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Superscript</span>
				<button class="icons" id="super-script">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-superscript" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Spoiler</span>
				<button class="icons" id="spoiler">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-exclamation" />
					</div>
				</button>
			</div>
			<div class="space-in"></div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Heading</span>
				<button class="icons" id="heading">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-heading" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Bulleted List</span>
				<button class="icons" id="bulleted">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-list-ul" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Numbered List</span>
				<button class="icons" id="numbered">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-list-ol" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Quote Block</span>
				<button class="icons" id="quote">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-quote-right" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Code Block</span>
				<button class="icons" id="code-block">
					<div class="icon">
						<font-awesome-icon icon="fa-regular fa-file-code" />
					</div>
				</button>
			</div>
			<div class="space-in"></div>
			<div class="tool-tip">
				<span class="tool-tip-text">Table</span>
				<button class="icons" id="table">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-table" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Add an image</span>
				<button class="icons" id="image">
					<div class="icon">
						<font-awesome-icon icon="fa-regular fa-image" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Add a video</span>
				<button class="icons" id="video">
					<div class="icon">
						<font-awesome-icon icon="fa-brands fa-youtube" />
					</div>
				</button>
			</div>
			<button class="mark-down" @click="switchMode" id="mark-down">
				Markdown Mode
			</button>
		</div>
		<div class="mark-down-box" v-if="markdownMode">
			<span>Markdown </span>
			<svg
				class="question-mark"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="inherit"
					d="M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
				></path>
			</svg>
			<button class="fancy" @click="switchMode" id="fancy">
				Switch to Fancy Pants Editor
			</button>
		</div>
		<div>
			<textarea
				id="text1"
				class="text-area"
				placeholder="Text (optional)"
			></textarea>
		</div> -->

		<QuillEditor
			class="editor"
			theme="snow"
			toolbar="#my-toolbar"
			placeholder="Text (optional)"
			style="color: black"
			ref="myQuillEditor"
			v-model:content="content"
		>
			<template #toolbar>
				<div id="my-toolbar" class="icons-box">
					<!-- Add buttons as you would before -->
					<div class="tool-tip">
						<span class="tool-tip-text-small">Bold</span>

						<button class="ql-bold"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text-small">Italics</span>
						<button class="ql-italic"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text-small">Link</span>
						<button class="ql-link"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Strikethrough</span>
						<button class="ql-strike"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Inline Code</span>
						<button class="ql-code"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Superscript</span>
						<button class="ql-script" value="super"></button>
					</div>
					<!-- <button class="ql-spoiler"></button> -->
					<div class="space-in"></div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Heading</span>
						<button class="ql-header" value="1"></button>
					</div>

					<div class="tool-tip">
						<span class="tool-tip-text strike">Bulleted List</span>
						<button class="ql-list" value="bullet"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Numbered List</span>
						<button class="ql-list" value="ordered"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Quote Block</span>
						<button class="ql-blockquote"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Code Block</span>
						<button class="ql-code-block"></button>
					</div>
					<div class="space-in"></div>
					<!-- <button class="icons" id="" @click="insertTable">
						<div class="icon">
							<font-awesome-icon icon="fa-solid fa-table" />
						</div>
					</button> -->
					<div class="tool-tip">
						<span class="tool-tip-text strike">Add an image</span>
						<button class="ql-image"></button>
					</div>
					<div class="tool-tip">
						<span class="tool-tip-text strike">Add a video</span>
						<button class="ql-video"></button>
					</div>
				</div>
			</template>
		</QuillEditor>
		{{ content }}
	</div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
//import * as QuillTableUI from 'quill-table-ui';
// import * as Quill from 'quill';
// import * as QuillTableUI from 'quill-table-ui';
// Quill.register(
// 	{
// 		'modules/tableUI': QuillTableUI.default,
// 	},
// 	true
// );

export default {
	data() {
		return {
			markdownMode: false,
			content: '',

			// editorOption: {
			// 	theme: 'snow',
			// 	modules: {
			// 		/* toolbar : false, */
			// 		table: true,
			// 		tableUI: true,
			// 	},
			// },
		};
	},

	methods: {
		switchMode() {
			this.markdownMode = !this.markdownMode;
		},
		getpostContent() {},
		insertTable() {
			const tableModule = this.editor.getModule('QuillTableUI');
			tableModule.insertTable(3, 3);
		},
		setContent(value) {
			this.$store.commit('posts/setContent', {
				content: value,
			});
		},
	},
	components: {
		QuillEditor,
	},
	computed: {
		editor() {
			return this.$refs.myQuillEditor.quill;
		},
	},
	watch: {
		content(value) {
			this.content = value;
			this.setContent(value);
		},
	},
	// setup: () => {
	// 	const modules = {
	// 		name: 'QuillTableUI',
	// 		module: QuillTableUI,
	// 		options: {
	// 			/* options */
	// 		},
	// 	};
	// 	return { modules };
	// },
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
div {
	display: block;
}
.big-box {
	margin: 16px;
	border: 1px solid #edeff1;
	border-radius: 4px;
	position: relative;
}
.icons-box {
	z-index: 8;
	height: 42px;
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 3px 3px 0 0;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: nowrap;
}
.text-box {
	overflow: auto;
	border-radius: 4px;
	font-family: 'Noto Sans', Arial, sans-serif;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	-webkit-user-modify: read-write-plaintext-only;
	outline: none;
	user-select: text;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	z-index: 11;
	position: relative;
}

.big-box:focus-within {
	border: 0.5px solid black;
}

.text-area {
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 30px;
	width: 100%;
	border-radius: 4px;
	font-family: 'Noto Sans', Arial, sans-serif;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	color: #000;
	z-index: 15;
	border-style: none;
	border-color: Transparent;
	overflow: auto;
	outline: none;
}
textarea:focus {
	outline: none;
	border: none;
	border-style: none;
	border-color: Transparent;
	overflow: auto;
}

.icons {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	line-height: 0;
	outline: none;
	padding: 4px;
	position: relative;
	margin-left: 5px;
	flex-wrap: nowrap;
}
.icons:hover {
	background-color: #ccc;
}

.icon {
	font-size: 2rem;
	color: grey;
}

.space-in {
	border-right: 1px solid #edeff1;
	box-sizing: border-box;
	height: 14px;
	margin: 0 6px;
	width: 1px;
}
.tool-tip {
	position: relative;
	cursor: pointer;
}
.tool-tip-text {
	text-align: center;
	width: 60px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-35%);
	opacity: 0;
}

.tool-tip-text-small {
	text-align: center;
	width: 60px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-20%);
	opacity: 0;
}
.strike {
	width: 100px;
}
.tool-tip-text::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip-text-small::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip:hover .tool-tip-text {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.tool-tip:hover .tool-tip-text-small {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.mark-down {
	border-radius: 9999px;
	/*position: absolute;
	left: 88%;
	width: 94px;
	width: max-content;*/
	width: min-content;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 16px;
	text-transform: unset;
	min-height: 24px;
	height: 40px;
	min-width: 24px;
	padding: 4px 8px;
	color: #0079d3;
	display: block;
	margin-left: auto;
}
.mark-down:hover {
	background-color: #dae0e6;
}

button {
	color: black;
	display: flex;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 4px;
	background-color: #f6f7f8;
}
.mark-down-box {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	box-sizing: border-box;
	height: 40px;
	padding: 8px 16px;
	background-color: #f6f7f8;
	/*display: -ms-flexbox;*/
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
}
.mark-down-box span {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #1c1c1c;
}
.question-mark {
	fill: #878a8c;
	height: 12px;
	width: 12px;
	position: absolute;
	left: 11%;
	cursor: pointer;
}
.fancy {
	border-radius: 9999px;
	position: absolute;
	left: 75%;
	width: 189px;
	height: 3px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 16px;
	text-transform: unset;
	min-height: 24px;
	min-width: 24px;
	padding: 4px 8px;
	color: #0079d3;
}
.fancy:hover {
	background-color: #dae0e6;
}

.ql-editor {
	resize: vertical;
	color: #000;
}
@media (max-width: 1600px) {
	.icons-box .tool-tip:last-of-type li:nth-of-type(13),
	.icons-box .tool-tip:last-of-type li:nth-of-type(14),
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}
@media (max-width: 1287px) {
	.icons-box .tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 1255px) {
	.icons-box .tool-tip:nth-of-type(11) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 1223px) {
	.icons-box .tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .tool-tip:nth-of-type(9) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(9) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(8) {
		display: flex;
	}
}
@media (max-width: 1146px) {
	.icons-box .tool-tip:nth-of-type(7) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7) {
		display: flex;
	}
}
@media (max-width: 991px) {
	.icons-box div.tool-tip:nth-of-type(7),
	.icons-box div.tool-tip:nth-of-type(8),
	.icons-box div.tool-tip:nth-of-type(9),
	.icons-box div.tool-tip:nth-of-type(10),
	.icons-box div.tool-tip:nth-of-type(11),
	.icons-box div.tool-tip:nth-of-type(12) {
		display: block;
	}
	.icons-box .space-in {
		display: block;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7),
	.icons-box .tool-tip:last-of-type li:nth-of-type(8),
	.icons-box .tool-tip:last-of-type li:nth-of-type(9),
	.icons-box .tool-tip:last-of-type li:nth-of-type(10),
	.icons-box .tool-tip:last-of-type li:nth-of-type(11),
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: none;
	}
}
@media (max-width: 943px) {
	.icons-box div.tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 911px) {
	.icons-box div.tool-tip:nth-of-type(11) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 879px) {
	.icons-box div.tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 847px) {
	.icons-box div.tool-tip:nth-of-type(9) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(9) {
		display: flex;
	}
}
@media (max-width: 815px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(8) {
		display: flex;
	}
}
@media (max-width: 802px) {
	.icons-box div.tool-tip:nth-of-type(7) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7) {
		display: flex;
	}
}
@media (max-width: 770px) {
	.icons-box div.tool-tip:nth-of-type(6) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(6) {
		display: flex;
	}
}
@media (max-width: 738px) {
	.icons-box div.tool-tip:nth-of-type(5) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(5) {
		display: flex;
	}
}
@media (max-width: 706px) {
	.icons-box div.tool-tip:nth-of-type(4) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(4) {
		display: flex;
	}
}
@media (max-width: 674px) {
	.icons-box div.tool-tip:nth-of-type(3) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(3) {
		display: flex;
	}
}
@media (max-width: 642px) {
	.icons-box div.tool-tip:nth-of-type(2) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(2) {
		display: flex;
	}
}
@media (max-width: 610px) {
	.icons-box div.tool-tip:nth-of-type(1) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(1) {
		display: flex;
	}
}
</style>
