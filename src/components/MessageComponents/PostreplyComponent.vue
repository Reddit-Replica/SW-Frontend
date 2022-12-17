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
				<span class="post-reply">post reply</span>
				<span>{{ message.subject }}</span>
			</p>
			<div class="d-flex flex-row">
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
							><a
								:href="'/user/' + message.senderUsername"
								:id="'message-sender-' + index"
								>/u/{{ message.senderUsername }}</a
							>
							<span
								>&nbsp;via&nbsp;
								<a
									:href="'/user/' + message.receiverUsername"
									:id="'message-receiver-' + index"
									>/u/{{ message.receiverUsername }}</a
								>
							</span></span
						><span :class="!isRead ? 'unread' : ''">&nbsp;sent&nbsp;</span
						><time :class="!isRead ? 'unread' : ''" :id="'time-' + index">
							{{ handleTime }}</time
						>
					</p>
					<!-- <p class="md">{{ message.text }}</p> -->
					<!-- <Markdown class="md" :source="message.text" /> -->
					<div class="md" v-html="data"></div>
					<ul class="ul-messages flat-list">
						<!-- <li :id="'context-link-' + index">
							<a href="" :id="'context-a-' + index">context</a>
						</li> -->
						<!-- <li :id="'full-comment-link-' + index">
							<a href="" :id="'full-comment-a-' + index">Full Comments(5)</a>
						</li> -->
						<li :id="'context-link-' + index">
							<!-- <a href="#" :id="'context-a-' + index">context</a> -->
							<span class="link" @click="goContext()" id="'context-a-' + index"
								>context</span
							>
						</li>
						<li :id="'full-comment-link-' + index">
							<span
								class="link"
								@click="goFullComments()"
								:id="'full-comment-a-' + index"
								>Full Comments({{ message.numOfComments }})</span
							>
							<!-- <a href="" :id="'full-comment-a-' + index"
								>Full Comments({{ message.numOfComments }})</a
							> -->
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
						<!-- <li>
							<form action="#">
								<input
									type="hidden"
									name="remove"
									:id="'remove-message-' + index"
									value="deleted"
								/>
							</form>
							<span
								class="sure-block"
								v-if="removeUser"
								:id="'remove-message-span-' + index"
								>are you sure?
								<span
									class="link"
									:id="'yes-remove-message-' + index"
									@click="removeAction('yes')"
									>Yes</span
								>
								/
								<span
									class="link"
									@click="removeAction()"
									:id="'no-remove-message-' + index"
									>No</span
								></span
							>
							<span
								class="link"
								v-else
								@click="removeAction()"
								:id="'click-remove-' + index"
								>Remove</span
							>
						</li> -->
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
		<ReplyComponent
			:show-reply-box="showReplyBox"
			:index="index"
			@hide-reply-box="replyFunction('hide')"
			:is-mention="true"
			@done-successfully="doneSuccessfully()"
			:post-id="message.postId"
			:parent-id="message.commentId"
			:parent-type="'comment'"
			:level="1"
			:subreddit-name="message.subredditName"
		></ReplyComponent>
	</div>
</template>

<script>
// import Markdown from 'vue3-markdown-it';
import ReplyComponent from './ReplyComponent.vue';
export default {
	components: {
		// Markdown,
		ReplyComponent,
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
				senderUsername: '',
				receiverUsername: '',
				sendAt: '',
				subredditName: '',
				postTitle: '',
				postId: '',
				commentId: '',
				numOfComments: '',
				isRead: '',
				vote: '',
				postOwner: '',
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
			removeUser: false,
			blockUser: false,
			spamUser: false,
			upClicked: this.message.vote == 1 ? true : false,
			downClicked: this.message.vote == -1 ? true : false,
			backcolor: 'grey',
			disappear: false,
			spammed: false,
			errorResponse: null,
			showReplyBox: false,
			data: '',
			handleTime: '',
			isRead: this.message.isRead,
		};
	},
	// @vuese
	//decide if background color in  white or grey depends on if count even or odd
	beforeMount() {
		if (this.index % 2 == 0) {
			this.backcolor = 'white';
		} else this.backcolor = 'grey';
		this.calculateTime();
		this.renderContent();
	},
	methods: {
		// @vuese
		//calculate time
		// @type object
		calculateTime() {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.message.sendAt);
			if (currentDate.getFullYear() != myTime.getFullYear()) {
				returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			} else if (currentDate.getMonth() != myTime.getMonth()) {
				returnValue = currentDate.getMonth() - myTime.getMonth() + ' Month ago';
			} else if (currentDate.getDate() != myTime.getDate()) {
				returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
			} else if (currentDate.getHours() != myTime.getHours()) {
				returnValue = currentDate.getHours() - myTime.getHours() + ' Hours ago';
			} else if (currentDate.getMinutes() != myTime.getMinutes()) {
				returnValue =
					currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
			} else {
				returnValue = 'Just now';
			}
			this.handleTime = returnValue;
		},
		// @vuese
		//toggle remove action
		// // @arg The argument is a string value representing if user click ok
		// async removeAction(action) {
		// 	this.removeUser = !this.removeUser;
		// 	if (action == 'yes') {
		// 		try {
		// 			this.$store.dispatch('messages/deleteMessage', {
		// 				id: this.message.commentId,
		// 				type: 'comment',
		// 				baseurl: this.$baseurl,
		// 			});
		// 			if (this.$store.getters['messages/deleteMessageSuccessfully']) {
		// 				this.disappear = true;
		// 			}
		// 		} catch (err) {
		// 			this.errorResponse = err;
		// 			this.disappear = false;
		// 		}
		// 	}
		// },
		// @vuese
		//handle block action
		// @arg The argument is a string value representing if user click ok
		async blockAction(action) {
			this.blockUser = !this.blockUser;
			if (action == 'yes') {
				try {
					await this.$store.dispatch('messages/blockUser', {
						block: true,
						username: this.message.senderUsername,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/blockSuccessfully']) {
						this.disappear = true;
						// this.$emit('doneSuccessfully');
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
					await this.$store.dispatch('messages/spamComment', {
						id: this.message.commentId,
						type: 'comment',
						reason: '',
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/spamCommentSuccessfully']) {
						this.spammed = true;
						// this.$emit('doneSuccessfully');
					}
				} catch (err) {
					this.errorResponse = err;
					this.spammed = false;
				}
			}
		},
		// @vuese
		//handle delete action
		// @arg The argument is a string value representing if user click ok
		// async deleteAction(action) {
		// 	this.deleteUser = !this.deleteUser;
		// 	if (action == 'yes') {
		// 		try {
		// 			this.$store.dispatch('messages/deleteMessage', {
		// 				id: this.message.commentId,
		// 				type: 'comment',
		// 				baseurl: this.$baseurl,
		// 			});
		// 			if (this.$store.getters['messages/deleteMessageSuccessfully']) {
		// 				this.disappear = true;
		// 			}
		// 		} catch (err) {
		// 			this.errorResponse = err;
		// 			this.disappear = false;
		// 		}
		// 	}
		// },
		//@vuese
		//upvote on post
		async upvote() {
			if (this.downClicked) {
				this.downClicked = false;
				// this.counter++;
			}
			if (this.upClicked == false) {
				this.upClicked = true;
				// this.counter++;
			} else {
				this.upClicked = false;
				// this.counter--;
			}
			try {
				await this.$store.dispatch('postCommentActions/vote', {
					baseurl: this.$baseurl,
					id: this.message.commentId,
					type: 'comment',
					direction: 1,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		//@vuese
		//down vote on post
		async downvote() {
			if (this.upClicked) {
				this.upClicked = false;
				// this.counter--;
			}
			if (this.downClicked == false) {
				this.downClicked = true;
				// this.counter--;
			} else {
				this.downClicked = false;
				// this.counter++;
			}
			try {
				await this.$store.dispatch('postCommentActions/vote', {
					baseurl: this.$baseurl,
					id: this.message.commentId,
					type: 'comment',
					direction: -1,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
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
		// @vuese
		//handle rendering html code
		// @arg no argument
		renderContent() {
			var QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;
			var deltaOps = this.message.text.ops;

			var cfg = {};

			var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

			this.data = converter.convert();
		},
		// @vuese
		// Used to go to full comments page
		// @arg no argument
		goFullComments() {
			let route =
				'/user/' +
				this.message.postOwner +
				'/comments/' +
				this.message.postId +
				'/' +
				this.message.postTitle;
			this.$router.push(route);
		},
		// @vuese
		// Used to go context page
		// @arg no argument
		goContext() {
			let route = '/user/' + this.message.postOwner;
			this.$router.push(route);
		},
		// @vuese
		// handle load messages instead of refreshing
		// @arg no argument
		doneSuccessfully() {
			this.$emit('doneSuccessfully');
		},
	},
};
</script>

<style scoped>
a:hover,
.link:hover {
	text-decoration: underline;
}
</style>
