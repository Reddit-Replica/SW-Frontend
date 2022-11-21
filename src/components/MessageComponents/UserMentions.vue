<template>
	<div
		class="message"
		:class="[
			backcolor == 'grey' ? 'message-grey' : 'message-white',
			disappear == true ? 'hide-message' : '',
		]"
	>
		<li>
			<p class="subject-text">
				<span class="post-reply">username mention</span>
				<span>{{ message.subject }}</span>
			</p>
			<div class="d-flex flex-row big-box">
				<div class="d-flex flex-column vote-box">
					<div class="upvote" @click="upvote" :id="'up-vote-box-' + index">
						<svg
							class="icon p-1"
							:class="upClicked ? 'up-clicked' : ''"
							:id="'up-vote-' + index"
						>
							<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
						</svg>
					</div>
					<div
						class="downvote"
						@click="downvote"
						:id="'down-vote-box-' + index"
					>
						<svg
							class="icon p-1"
							:class="downClicked ? 'down-clicked' : ''"
							:id="'down-vote-' + index"
						>
							<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
						</svg>
					</div>
				</div>
				<div :class="!isRead ? 'box-unread' : ''">
					<p class="md-details">
						<span :class="!isRead ? 'unread' : ''">from&nbsp;</span>
						<span class="sender"
							><a href="" :id="'message-sender-' + index">{{
								message.senderUsername
							}}</a>
							<span
								><span :class="!isRead ? 'unread' : ''">&nbsp;via&nbsp;</span>
								<a href="" :id="'message-receiver-' + index">{{
									message.subredditName
								}}</a>
							</span></span
						><span :class="!isRead ? 'unread' : ''">&nbsp;sent&nbsp;</span
						><time :class="!isRead ? 'unread' : ''"> {{ message.sendAt }}</time>
					</p>
					<!-- <p class="md">{{ message.text }}</p> -->
					<Markdown class="md" :source="message.text" />
					<ul class="flat-list ul-messages">
						<li :id="'context-link-' + index">
							<a href="" :id="'context-a-' + index">context</a>
						</li>
						<li :id="'full-comment-link-' + index">
							<a href="" :id="'full-comment-a-' + index">Full Comments(5)</a>
						</li>
						<li :id="'spam-box-' + index">
							<div v-if="!spammed">
								<span
									class="sure-block"
									v-if="spamUser"
									:id="'spam-user-span-' + index"
									>are you sure?
									<span
										class="link"
										:id="'yes-spam-user-' + index"
										@click="spamAction('yes')"
										>Yes</span
									>
									/
									<span
										class="link"
										@click="spamAction()"
										:id="'no-spam-user-' + index"
										>No</span
									></span
								>
								<span
									class="link"
									v-else
									@click="spamAction()"
									:id="'click-spam-' + index"
									>spam</span
								>
							</div>
							<div v-if="spammed">spammed</div>
						</li>
						<li :id="'block-' + index">
							<span
								class="sure-block"
								v-if="blockUser"
								:id="'block-user-span-' + index"
								>are you sure?
								<span
									class="link"
									:id="'yes-block-user-' + index"
									@click="blockAction('yes')"
									>Yes</span
								>
								/
								<span
									class="link"
									@click="blockAction()"
									:id="'no-block-user-' + index"
									>No</span
								></span
							>
							<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
							<span
								class="link"
								v-else
								@click="blockAction()"
								:id="'block-user-' + index"
								>Block User</span
							>
						</li>
						<li @click="unreadAction()" v-if="isRead" :id="'unread-' + index">
							<span class="link" :id="'mark-un-read-' + index"
								>Mark Unread</span
							>
						</li>
						<li :id="'reply-box-' + index">
							<span
								class="link"
								:id="'reply-' + index"
								@click="replyFunction('show')"
								>Reply</span
							>
						</li>
					</ul>
					<div class="no-messages" v-if="errorResponse">
						{{ errorResponse }}
					</div>
				</div>
			</div>
		</li>
		<div class="child-reply" v-if="showReplyBox">
			<form action="#" class="form-reply">
				<div class="user-text-reply">
					<div class="md">
						<textarea
							name="text"
							cols="1"
							rows="1"
							class="text-area"
						></textarea>
					</div>
				</div>
				<div class="markdown-links">
					<a
						href="https://www.redditinc.com/policies/content-policy"
						target="__blank"
						id="content-policy-link"
						>content policy</a
					>
					<button
						class="markdown-link"
						href=""
						@click="changeTitle()"
						id="formatting-button"
					>
						{{ formatting }} help
					</button>
				</div>
				<button class="submit-form" id="submit-form">Save</button>
				<button
					class="submit-form"
					id="cancel-form"
					@click="replyFunction('hide')"
				>
					Cancel
				</button>
				<div class="formatting-help" v-if="formatting == 'hide'">
					<p>
						reddit uses a slightly-customized version of
						<a
							href="https://daringfireball.net/projects/markdown/syntax"
							id="markdown-link"
							>Markdown</a
						>
						for formatting. See below for some basics, or check
						<a
							href="https://www.reddit.com/wiki/commenting/?utm_source=reddit&utm_medium=usertext&utm_name=frontpage&utm_content="
							id="the-commenting-wiki-page-link"
							>the commenting wiki page</a
						>
						for more detailed help and solutions to common issues.
					</p>
					<table>
						<tr>
							<th>You type</th>
							<th>You see</th>
						</tr>
						<tr>
							<td>*italic*</td>
							<td><i>italic</i></td>
						</tr>
						<tr>
							<td>**bold**</td>
							<td><strong>bold</strong></td>
						</tr>
						<tr>
							<td>[reddit!](https://reddit.com)</td>
							<td><router-link to="/">reddit!</router-link></td>
						</tr>
						<tr>
							<td>
								* item 1 <br />
								* item 2 <br />
								* item 3
							</td>
							<td>
								<li>item 1</li>
								<li>item 2</li>
								<li>item 3</li>
							</td>
						</tr>
						<tr>
							<td>> quoted text</td>
							<td>
								<blockquote class="block-quote">&nbsp;quoted text</blockquote>
							</td>
						</tr>
						<tr>
							<td>
								Lines starting with four spaces are treated like code:<br />
								&nbsp;&nbsp;&nbsp;&nbsp;if 1 * 2 &lt; 3: <br />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print "hello,
								world!"
							</td>
							<td>
								Lines starting with four spaces are treated like code:<br />
								<pre>if 1 * 2 &lt; 3:<br/> &nbsp;&nbsp;&nbsp;&nbsp; print "hello, world!"</pre>
							</td>
						</tr>
						<tr>
							<td>~~strikethrough~~</td>
							<td><strike>strikethrough</strike></td>
						</tr>
						<tr>
							<td>super script</td>
							<td>super<sup>script</sup></td>
						</tr>
					</table>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
export default {
	components: {
		Markdown,
	},
	props: {
		// @vuese
		//details of message
		message: {
			type: Object,
			required: true,
			default: () => ({
				id: '',
				text: '',
				type: '',
				senderUsername: '',
				receiverUsername: '',
				subredditName: '',
				postTitle: '',
				subject: '',
				sendAt: '',
				isReply: '',
				isRead: '',
			}),
		},
		// @vuese
		//index to handle unique ids and background color
		index: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	data() {
		return {
			blockUser: false,
			spamUser: false,
			upClicked: false,
			downClicked: false,
			backcolor: 'grey',
			spammed: false,
			disappear: false,
			isRead: this.message.isRead,
			errorResponse: null,
			formatting: 'formatting',
			showReplyBox: false,
		};
	},

	// @vuese
	//decide if background color in  white or grey depends on if index even or odd
	beforeMount() {
		if (this.index % 2 == 0) {
			this.backcolor = 'white';
		} else this.backcolor = 'grey';
	},
	methods: {
		// @vuese
		//handle block action
		// @arg The argument is a string value representing if user click ok
		async blockAction(action) {
			this.blockUser = !this.blockUser;
			if (action == 'yes') {
				try {
					this.$store.dispatch('messages/blockUser', {
						block: true,
						username: this.message.senderUsername,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/blockSuccessfully']) {
						this.disappear = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.disappear = false;
				}
			}
		},
		// @vuese
		//handle unread action
		// @arg no argument
		unreadAction() {
			this.isRead = false;
		},
		// @vuese
		//handle spam action
		// @arg The argument is a string value representing if user click ok
		async spamAction(action) {
			this.spamUser = !this.spamUser;
			if (action == 'yes') {
				try {
					this.$store.dispatch('messages/spamMessage', {
						id: this.message.id,
						type: 'comment',
						reason: '',
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/markSpamSuccessfully']) {
						this.spammed = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.spammed = false;
				}
			}
		},
		// @vuese
		//handle upvote action
		// @arg no argument
		async upvote() {
			if (this.upClicked == false) {
				try {
					this.$store.dispatch('messages/voteComment', {
						id: this.message.id,
						direction: 1,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/votedSuccessfully']) {
						this.upClicked = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.upClicked = false;
				}
			} else {
				this.upClicked = false;
			}
			if (this.downClicked) {
				this.downClicked = false;
			}
		},
		// @vuese
		//handle downvote action
		// @arg no argument
		async downvote() {
			if (this.downClicked == false) {
				try {
					this.$store.dispatch('messages/voteComment', {
						id: this.message.id,
						direction: -1,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/votedSuccessfully']) {
						this.downClicked = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.downClicked = false;
				}
			} else {
				this.downClicked = false;
			}
			if (this.upClicked) {
				this.upClicked = false;
			}
		},
		// @vuese
		//change title to formatting or hide
		// @arg no argument
		changeTitle() {
			if (this.formatting == 'formatting') this.formatting = 'hide';
			else this.formatting = 'formatting';
		},
		// @vuese
		//show reply box or hide it
		// @arg no argument
		replyFunction(title) {
			if (title == 'show') {
				this.showReplyBox = true;
			} else if (title == 'hide') {
				this.showReplyBox = false;
			}
		},
	},
};
</script>

<style scoped>
a:hover,
.link:hover {
	text-decoration: underline;
}
.big-box {
	width: 100%;
}
.child-reply {
	display: block;
}
.form-reply {
	margin-top: 1rem;
	margin-left: 1.2rem;
	font-size: small;
}
.user-text-reply {
	clear: left;
	margin-top: 1.5em;
	font-size: 1.2rem;
	padding: 0 1px;
	unicode-bidi: isolate;
}
.text-area {
	font: normal small verdana, arial, helvetica, sans-serif;
	line-height: 1.5em;
	width: 70%;
	height: 10rem;
	margin-top: 0;
	background-color: var(--color-white-1);
	color: black;
	display: block;
	padding: 3px 6px;
	box-sizing: border-box;
	border: var(--line-7);
	font-size: 1em;
	margin-bottom: 0.2rem;
}
.markdown-links {
	text-align: right;
	width: 70%;
}
.markdown-links a,
.markdown-link {
	margin-left: 1rem;
	font-size: smaller;
}
.submit-form {
	background-color: var(--color-blue-2);
	border-radius: 1rem;
	padding: 0rem;
	color: var(--color-white-1);
	border-color: var(--color-blue-2);
	font-weight: bolder;
	font-size: small;
	width: 8rem;
	text-transform: uppercase;
	margin-left: 1rem;
}
.markdown-link {
	border: none;
	color: #0d6efd;
	background-color: var(--color-white-1);
}
.formatting-help {
	border-top: var(--line-dashed-2);
	margin: 0.5rem 2rem;
	width: 56%;
}
table {
	width: 100%;
	margin: 5px 0px;
	font-size: 1.2rem;
	font-weight: 400;
	max-width: 60em;
	border-collapse: collapse;
	display: table;
	box-sizing: border-box;
	text-indent: initial;
	border-spacing: 2px;
	border-color: grey;
	clear: left;
	margin-top: 1.5em;
}
table td {
	text-align: left;
}
tr:first-child {
	width: 50%;
	border: 1px solid #c0c0c0;
	background-color: #ffff99;
}
td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
.block-quote {
	margin-left: 5px;
	border-left: 2px solid #c5c1ad;
}
</style>
