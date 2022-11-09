<template>
	<div>
		<div class="comment" v-if="!deleted">
			<div class="left">
				<div class="image">
					<router-link
						:to="{ name: 'user', params: { userName: comment.userName } }"
						><img src="../../img/user-image.jpg" alt="" id="user"
					/></router-link>
				</div>
				<div class="vertical-line"></div>
			</div>
			<div class="right">
				<div class="user-name">
					<router-link
						:to="{ name: 'user', params: { userName: comment.userName } }"
						id="userName"
						>{{ comment.userName }}</router-link
					>
					<span>. {{ comment.duration }} </span>
				</div>
				<div class="content" v-if="!editing">
					<p>{{ newComment }}</p>
				</div>
				<div class="services" v-if="!editing">
					<ul>
						<li :class="upClicked ? 'clicked' : ''">
							<svg
								class="icon icon-shift vote"
								v-if="!upClicked"
								@click="upClick"
								id="upvote"
							>
								<use xlink:href="../../img/shift.svg#icon-shift"></use>
							</svg>
							<svg
								class="icon icon-arrow-up p-1 vote"
								v-else
								@click="upClick"
								id="cancel-upvote"
							>
								<use xlink:href="../../img/vote.svg#icon-arrow-up"></use>
							</svg>
						</li>
						<li :class="upClicked ? 'up' : downClicked ? 'down' : ''">
							{{ voteCounter }}
						</li>
						<li :class="downClicked ? 'clicked' : ''">
							<svg
								class="icon icon-shift vote"
								v-if="!downClicked"
								@click="downClick"
								id="downvote"
							>
								<use xlink:href="../../img/shift.svg#icon-shift"></use>
							</svg>
							<svg
								class="icon icon-arrow-down p-1 vote"
								v-else
								@click="downClick"
								id="cancel-downvote"
							>
								<use xlink:href="../../img/vote.svg#icon-arrow-down"></use>
							</svg>
						</li>
						<li><font-awesome-icon icon="fa-regular fa-message" /> Reply</li>
						<li>Share</li>
						<li>Save</li>
						<li @click="edit">Edit</li>
						<li>Follow</li>
						<li @click="displaySubmenu">
							<font-awesome-icon icon="fa-solid fa-ellipsis" />
							<ul class="sub-menu" v-if="display">
								<li
									class="icon-box"
									id="'sum-menu' + 'delete'"
									@click="deleteComment"
								>
									<font-awesome-icon
										icon="fa-regular fa-trash-can"
										class="submenu-icon"
									/>Delete Comment
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="comment-submit" v-else>
					<div class="big-box big-box-fancy-mode" v-if="!markdownMode">
						<div>
							<textarea
								class="text-area text-area-in-fancy-mode"
								placeholder="What are your thoughts?"
								id="text1"
								v-model="edittedComment"
							></textarea>
						</div>
						<div class="icons-box">
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
								<button class="icons" id="italics">
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
								<button class="icons" id="strikethrough">
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
								<button class="icons" id="superscript">
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
								<button class="icons" id="list-ul">
									<div class="icon">
										<font-awesome-icon icon="fa-solid fa-list-ul" />
									</div>
								</button>
							</div>
							<div class="tool-tip">
								<span class="tool-tip-text strike">Numbered List</span>
								<button class="icons" id="numbered-list">
									<div class="icon">
										<font-awesome-icon icon="fa-solid fa-list-ol" />
									</div>
								</button>
							</div>
							<div class="tool-tip">
								<span class="tool-tip-text strike">Quote Block</span>
								<button class="icons" id="quote-block">
									<div class="icon">
										<font-awesome-icon icon="fa-solid fa-quote-right" />
									</div>
								</button>
							</div>
							<div class="tool-tip" @click="displayMenu" id="menu">
								<button class="icons" id="ellipsis">
									<div class="icon">
										<font-awesome-icon icon="fa-solid fa-ellipsis" />
									</div>
								</button>
								<ul v-if="menuIsDisplayed">
									<li class="icons">
										<font-awesome-icon icon="fa-solid fa-bold " class="icon" />
									</li>
									<li class="icons">
										<font-awesome-icon icon="fa-solid fa-italic" class="icon" />
									</li>
									<li class="icons">
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
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-strikethrough"
											class="icon"
										/>
									</li>
									<li class="icons">
										<font-awesome-icon icon="fa-solid fa-code" class="icon" />
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-superscript"
											class="icon"
										/>
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-exclamation"
											class="icon"
										/>
									</li>
									<li class="menu-split"></li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-heading"
											class="icon"
										/>
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-list-ul"
											class="icon"
										/>
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-list-ol"
											class="icon"
										/>
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-solid fa-quote-right"
											class="icon"
										/>
									</li>
									<li class="icons">
										<font-awesome-icon
											icon="fa-regular fa-square"
											class="icon"
										/>
									</li>
									<li class="menu-split"></li>
									<li class="icons">
										<font-awesome-icon icon="fa-solid fa-table" class="icon" />
									</li>
								</ul>
							</div>
							<base-button
								class="mark-down"
								@click="switchMode"
								id="markdown-mode"
								>Markdown Mode</base-button
							>
							<base-button class="mark-down" @click="cancelEditing" id="cancel1"
								>Cancel</base-button
							>
							<base-button
								class="comment-button"
								:disable-button="noComment"
								id="comment-in-mark-down-mode"
								@click="saveEditing"
								>Save Edits</base-button
							>
						</div>
					</div>
					<div class="big-box big-box-markdown-mode" v-else>
						<div>
							<textarea
								class="text-area text-area-in-markdown-mode"
								placeholder="What are your thoughts?"
								id="text2"
								v-model="edittedComment"
							></textarea>
						</div>
						<div class="icons-box">
							<div class="question-icon">
								<font-awesome-icon icon="fa-regular fa-circle-question" />
							</div>
							<div
								class="text-in-markdown-mode"
								@click="switchMode"
								id="switch-f-mode"
							>
								Switch to Fancy Pants Editor
							</div>
							<base-button class="mark-down" @click="cancelEditing" id="cancel2"
								>Cancel</base-button
							>
							<base-button
								@click="saveEditing"
								class="comment-button"
								:disable-button="noComment"
								id="comment"
								>Save Edits</base-button
							>
						</div>
					</div>
				</div>
				<div class="replies">
					<nested-reply
						v-for="reply in comment.replies"
						:key="reply.userName + reply.duration"
						:comment="reply"
					></nested-reply>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import NestedReply from './NestedReply.vue';
export default {
	components: {
		NestedReply,
	},
	computed: {
		//@vuese
		//chceks if there is a written text in text area or not to edit the comment
		noComment() {
			if (this.edittedComment == '') return true;
			return false;
		},
	},
	props: {
		//@vuese
		//the comment data object that will get displayed in this component
		comment: {
			type: Object,
			required: true,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			upClicked: true,
			downClicked: false,
			voteCounter: 1,
			newComment: this.comment.content,
			edittedComment: '',
			editing: false,
			display: false,
			deleted: false,
		};
	},
	methods: {
		//@vuese
		//show services submenu of comments
		displaySubmenu() {
			this.display = !this.display;
		},
		//@vuese
		//called when upvote is clicked to change the style of upvote icon and increment vote counter
		upClick() {
			if (this.downClicked) this.downClick();
			this.upClicked = !this.upClicked;
			if (this.upClicked) this.voteCounter++;
			else this.voteCounter--;
		},
		//@vuese
		//called when downvote is clicked to change the style of downvote icon and decrement vote counter
		downClick() {
			if (this.upClicked) this.upClick();
			this.downClicked = !this.downClicked;
			if (this.downClicked) this.voteCounter--;
			else this.voteCounter++;
		},
		//@vuese
		//sets comment in editting mode (stlye is changed)
		edit() {
			this.editing = true;
			this.edittedComment = this.newComment;
		},
		//@vuese
		//cancel editting done to comment and assign comment's old value back to it
		cancelEditing() {
			this.editing = false;
		},
		//@vuese
		//save edittings done to comment
		saveEditing() {
			this.editing = false;
			this.newComment = this.edittedComment;
		},
		//@vuese
		//delete comment
		deleteComment() {
			this.deleted = true;
		},
	},
};
</script>
<style scoped>
.comment {
	display: flex;
	margin: 2px 2px 0 2px;
}
.left {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.right {
	margin: 7px 7px 0 7px;
}
.image img {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	margin: 6px 0 6px 0;
}
.vertical-line {
	width: 2.2px;
	background-color: var(--color-grey-light-8);
	height: fill-available;
}
.vertical-line:hover {
	background-color: var(--color-pink);
}
.user-name a {
	color: black;
	font-weight: 500;
	text-decoration: none;
	font-size: 12px;
	line-height: 33px;
}
.user-name a:hover {
	text-decoration: underline;
}
.user-name span {
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	color: var(--color-grey-light-5);
	margin-left: 2px;
}
.content p {
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	word-break: break-word;
	color: black;
}
.services > ul {
	margin: 0;
	padding: 0;
}
.services > ul > li {
	list-style: none;
	display: inline-block;
	height: 24px;
	padding: 0 4px;
	border-radius: 2px;
	text-align: center;
	font-size: 12.2px;
	font-weight: 700;
	margin: 0 4px;
	line-height: 24px;
}
.services > ul > li svg.vote {
	font-weight: 400;
	height: 20px;
	line-height: 20px;
	width: 20px;
	fill: var(--color-grey-dark-9);
}
.services > ul > li:first-of-type:hover svg,
.services > ul > li:first-of-type svg.icon-arrow-up {
	fill: var(--color-red-dark-2);
}
.services > ul > li:nth-of-type(3):hover svg,
.services > ul > li:nth-of-type(3) svg.icon-arrow-down {
	fill: var(--color-blue);
}
.services > ul > li:not(:nth-of-type(2)):hover,
.services > ul > li.clicked {
	background-color: #e8e8e8;
}
.services > ul li:not(:nth-of-type(2)) {
	cursor: pointer;
}
.services > ul > li:nth-of-type(3) .icon-shift {
	transform: rotate(180deg);
}
.services > ul > li:nth-of-type(2) {
	color: black;
}
.services > ul > li:nth-of-type(2).up {
	color: var(--color-red-dark-2);
}
.services > ul > li:nth-of-type(2).down {
	color: var(--color-blue);
}
.big-box * {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
.big-box {
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
	padding: 0px 5px;
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
	font-size: 14px;
	font-weight: 400;
	line-height: 30px;
	width: 100%;
	border-radius: 4px;
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
.text-area-in-markdown-mode {
	font-family: 'Noto Mono,Menlo,Monaco,Consolas,monospace';
	word-spacing: 7px;
}
.text-area-in-fancy-mode {
	font-family: 'Noto Sans', Arial, sans-serif;
}
.icons {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	line-height: 0;
	outline: none;
	padding: 3px;
	position: relative;
	flex-wrap: nowrap;
}
.icons {
	color: black;
	display: flex;
	align-items: center;
	width: 30px;
	height: 32px;
	border-radius: 4px;
	background-color: #f6f7f8;
}
.icons:hover {
	background-color: #ccc;
}
.icon {
	font-size: 16px;
	color: grey;
	width: 100%;
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
.tool-tip:hover .tool-tip-text {
	top: -40px;
	visibility: visible;
	opacity: 1;
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
.mark-down:hover {
	background-color: #ccc;
}
.comment-button {
	width: 100px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	color: white;
	background-color: var(--color-pink);
	display: block;
	margin-left: auto;
}
.comment-submit {
	padding: 24px 0px;
}
.big-box-fancy-mode {
	width: fit-content;
}
.big-box-markdown-mode {
	margin-right: 40px;
}
.tool-tip:last-of-type {
	position: relative;
}
.tool-tip:last-of-type ul {
	position: absolute;
	border: 1px solid var(--color-grey-light-10);
	border-radius: 4px;
	box-shadow: var(--shadow-menu);
	padding: 2px 5px;
	background-color: white;
	list-style: none;
	display: flex;
	align-items: center;
	height: 37px;
}
.tool-tip:last-of-type li.icons {
	background-color: white;
	display: none;
}
.tool-tip:last-of-type li.icons:hover {
	background-color: #ccc;
}
.menu-split {
	background-color: var(--color-grey-light-10);
	box-sizing: border-box;
	height: 100%;
	margin: 0 6px;
	width: 1px;
	display: none;
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
.question-icon {
	margin-left: 12px;
	cursor: pointer;
	display: flex;
}
.question-icon svg {
	fill: var(--color-grey-dark-8);
	height: 12px;
	width: 12px;
}
.text-in-markdown-mode {
	color: var(--color-pink);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	margin-left: 8px;
	width: auto;
	cursor: pointer;
}
.sub-menu {
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: white;
	padding: 0px;
	left: -0.5rem;
	top: 2rem;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
	z-index: 10;
	width: max-content;
}
.sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: var(--line);
	width: 100%;
}
.sub-menu li:hover {
	background-color: var(--color-blue-light-2);
	color: var(--color-dark-1);
}
.sub-menu li {
	padding: 0px 10px;
	height: 34px;
}
.sub-menu li.clicked {
	color: var(--color-blue-2);
}
.sub-menu li:last-of-type {
	border-radius: 0 0 5px 5px;
}
.sub-menu li .submenu-icon {
	margin-right: 5px;
}
.services > ul > li:last-of-type {
	position: relative;
}
</style>
