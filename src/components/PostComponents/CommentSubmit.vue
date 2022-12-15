<template>
	<div class="big-box">
		<div class="temp" @click="checkComment">
			<QuillEditor
				class="editor"
				theme="snow"
				:toolbar="'#' + identifier"
				placeholder="what are you thought?"
				style="color: black"
				ref="myQuillEditor"
				v-model:content="content"
			>
				<template #toolbar>
					<div :id="identifier" class="icons-box">
						<!-- Add buttons as you would before -->
						<div class="tool-tip">
							<span class="tool-tip-text-small">Bold</span>

							<button class="icon ql-bold"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text-small">Italics</span>
							<button class="icon ql-italic"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text-small">Link</span>
							<button class="icon ql-link"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Strikethrough</span>
							<button class="icon ql-strike"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Inline Code</span>
							<button class="icon ql-code"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Superscript</span>
							<button class="icon ql-script" value="super"></button>
						</div>
						<!-- <button class="ql-spoiler"></button> -->
						<div class="space-in"></div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Heading</span>
							<button class="icon ql-header" value="1"></button>
						</div>

						<div class="tool-tip">
							<span class="tool-tip-text strike">Bulleted List</span>
							<button class="icon ql-list" value="bullet"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Numbered List</span>
							<button class="icon ql-list" value="ordered"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Quote Block</span>
							<button class="icon ql-blockquote"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Code Block</span>
							<button class="icon ql-code-block"></button>
						</div>
						<div class="icon" data-v-72dd2826="">
							<svg
								class="svg-inline--fa fa-ellipsis"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="ellipsis"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								data-v-72dd2826=""
							>
								<path
									class=""
									fill="currentColor"
									d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
								></path>
							</svg>
						</div>
						<div class="comment-submit">
							<base-button
								@click="cancelEditing"
								class="cancel-button"
								id="cancel1"
								v-if="type == 'edit' || type == 'Reply'"
								>Cancel</base-button
							>
							<base-button
								:disable-button="content.ops[0].insert == '\n'"
								:button-text="type"
								class="comment-button"
								@click="writeNewComment"
								v-if="type == 'comment' || type == 'Reply'"
							/>
							<base-button
								class="comment-button"
								:disable-button="noComment"
								id="comment-in-mark-down-mode"
								@click="saveEditing"
								v-if="type == 'edit'"
								>Save Edits</base-button
							>
						</div>
					</div>
				</template>
			</QuillEditor>
		</div>
		<!-- {{ content }} -->
	</div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
	name: 'MYComment',
	emits: ['newComment', 'saveEditing', 'cancelEditing'],
	data() {
		return {
			content: this.currentText,
		};
	},
	props: {
		identifier: {
			type: String,
			default: '',
			required: true,
		},
		type: {
			type: String,
			default: '',
			required: true,
		},
		parentId: {
			type: String,
			default: '',
			required: false,
		},
		parentType: {
			type: String,
			default: '',
			required: false,
		},
		level: {
			type: Number,
			default: 1,
			required: false,
		},
		currentText: {
			type: String,
			default: '',
			required: false,
		},
		subredditName: {
			type: String,
			default: '',
			required: false,
		},
	},

	methods: {
		//@vuese
		//adds new comment
		async writeNewComment() {
			let write = {
				commentedBy: localStorage.getItem('userName'),
				publishTime: new Date().toJSON(),
				commentBody: this.content,
				children: [],
				numberOfChildren: 0,
				commentId: '',
				level: 0,
			};
			let content = this.content;
			var element = document.getElementsByClassName('ql-editor');
			while (element[0].firstChild) {
				element[0].firstChild.remove();
			}
			try {
				await this.$store.dispatch('comments/comment', {
					baseurl: this.$baseurl,
					text: content,
					postId: this.$route.path.split('/')[4],
					parentId: this.parentId,
					parentType: this.parentType,
					level: this.level,
					subredditName: this.subredditName,
					haveSubreddit: this.subredditName != '',
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			write.commentId = this.$store.getters['comments/getCommentID'];
			write.level = this.level;
			console.log(this.level);
			this.$emit('newComment', write);
		},
		saveEditing() {
			this.$emit('saveEditing', this.content);
		},
		cancelEditing() {
			this.$emit('cancelEditing');
		},
	},
	components: {
		QuillEditor,
	},
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
	margin: 16px 16px 0 16px;
	border: 1px solid #edeff1;
	border-radius: 4px;
	position: relative;
}
.ql-snow.ql-toolbar button.comment-button {
	width: 100px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	color: white;
	display: block;
	margin-left: auto;
	border-radius: 100px;
}
.ql-snow.ql-toolbar button.cancel-button {
	width: 64px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	color: var(--color-pink);
	display: block;
	margin-right: 22px;
	border-radius: 100px;
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

.icon {
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
button {
	color: black;
	display: flex;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 4px;
	background-color: #f6f7f8;
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
.temp {
	height: 155px;
	resize: vertical;
	color: #000;
	display: flex;
	flex-direction: column-reverse;
	width: 100%;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow.ql-toolbar button.comment-button:disabled {
	background-color: var(--color-grey-dark-4);
}
.ql-snow.ql-toolbar button.cancel-button:hover {
	background-color: var(--color-pink-4);
}
.ql-snow.ql-toolbar button.cancel-button:active {
	background-color: var(--color-pink-5);
}
.ql-snow.ql-toolbar button.comment-button:disabled {
	cursor: not-allowed;
}
.comment-button:not(:disabled),
.ql-snow.ql-toolbar button.comment-button:not(:disabled):hover {
	background-color: var(--color-pink);
}
.mark-down {
	width: max-content;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	color: var(--color-pink);
	background-color: var(--color-grey-light-9);
	display: block;
	margin-left: auto;
}
.comment-submit {
	padding: 0px 24px;
	width: 100%;
	display: flex;
}
.comment-submit button {
	display: inline-block;
	margin-right: auto;
}
@media (max-width: 1287px) {
	.icons-box .tool-tip:nth-of-type(15) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}
@media (max-width: 1255px) {
	.icons-box .tool-tip:nth-of-type(14) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(14) {
		display: flex;
	}
}
@media (max-width: 1223px) {
	.icons-box .tool-tip:nth-of-type(13) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(13) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 1146px) {
	.icons-box .tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 991px) {
	.icons-box div.tool-tip:nth-of-type(10),
	.icons-box div.tool-tip:nth-of-type(11),
	.icons-box div.tool-tip:nth-of-type(12),
	.icons-box div.tool-tip:nth-of-type(13),
	.icons-box div.tool-tip:nth-of-type(14),
	.icons-box div.tool-tip:nth-of-type(15) {
		display: block;
	}
	.icons-box .space-in {
		display: block;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10),
	.icons-box .tool-tip:last-of-type li:nth-of-type(11),
	.icons-box .tool-tip:last-of-type li:nth-of-type(12),
	.icons-box .tool-tip:last-of-type li:nth-of-type(13),
	.icons-box .tool-tip:last-of-type li:nth-of-type(14),
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: none;
	}
}
@media (max-width: 943px) {
	.icons-box div.tool-tip:nth-of-type(15) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}
@media (max-width: 911px) {
	.icons-box div.tool-tip:nth-of-type(14) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(14) {
		display: flex;
	}
}
@media (max-width: 879px) {
	.icons-box div.tool-tip:nth-of-type(13) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(13) {
		display: flex;
	}
}
@media (max-width: 847px) {
	.icons-box div.tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 820px) {
	.icons-box div.tool-tip:nth-of-type(11) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 815px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 802px) {
	.icons-box div.tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 770px) {
	.icons-box div.tool-tip:nth-of-type(9) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(9) {
		display: flex;
	}
}
@media (max-width: 738px) {
	.icons-box div.tool-tip:nth-of-type(8) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(8) {
		display: flex;
	}
}
@media (max-width: 706px) {
	.icons-box div.tool-tip:nth-of-type(7) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7) {
		display: flex;
	}
}
@media (max-width: 674px) {
	.icons-box div.tool-tip:nth-of-type(6) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(6) {
		display: flex;
	}
}
@media (max-width: 642px) {
	.icons-box div.tool-tip:nth-of-type(5) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(5) {
		display: flex;
	}
}
@media (max-width: 610px) {
	.icons-box div.tool-tip:nth-of-type(4) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(4) {
		display: flex;
	}
}

@media (max-width: 590px) {
	.icons-box div.tool-tip:nth-of-type(3) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(3) {
		display: flex;
	}
}
@media (max-width: 510px) {
	.icons-box div.tool-tip:nth-of-type(3) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(3) {
		display: flex;
	}
}
@media (max-width: 470px) {
	.icons-box div.tool-tip:nth-of-type(2) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(2) {
		display: flex;
	}
}
@media (max-width: 400px) {
	.icons-box div.tool-tip:nth-of-type(1) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(1) {
		display: flex;
	}
}
</style>
