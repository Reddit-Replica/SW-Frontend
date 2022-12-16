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
							><a href="" :id="'message-sender-' + index">{{
								message.senderUsername
							}}</a>
							<span
								>&nbsp;via&nbsp;
								<a href="" :id="'message-receiver-' + index">{{
									message.receiverUsername
								}}</a>
							</span></span
						><span :class="!isRead ? 'unread' : ''">&nbsp;sent&nbsp;</span
						><time :class="!isRead ? 'unread' : ''" :id="'time-' + index">
							{{ handleTime }}</time
						>
					</p>
					<!-- <p class="md">{{ message.text }}</p> -->
					<Markdown class="md" :source="message.text" />
					<ul class="ul-messages flat-list">
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
						<li>
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
		<ReplyComponent
			:show-reply-box="showReplyBox"
			:index="index"
			@hide-reply-box="replyFunction('hide')"
		></ReplyComponent>
	</div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
import ReplyComponent from './ReplyComponent.vue';
export default {
	components: {
		Markdown,
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
				subject: '',
				type: '',
				subredditName: '',
				postTitle: '',
				postId: '',
				commentId: '',
				numOfComments: '',
				isSenderUser: '',
				isReceiverUser: '',
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
			upClicked: false,
			downClicked: false,
			backcolor: 'grey',
			disappear: false,
			spammed: false,
			errorResponse: null,
			showReplyBox: false,
		};
	},
	// @vuese
	//decide if background color in  white or grey depends on if count even or odd
	beforeMount() {
		if (this.index % 2 == 0) {
			this.backcolor = 'white';
		} else this.backcolor = 'grey';
		this.calculateTime();
	},
	computed: {
		// @vuese
		//return handled time after calculated it
		// @type object
		handleTime() {
			return this.$store.getters['moderation/handleTime'];
		},
	},
	methods: {
		// @vuese
		//calculate time
		// @type object
		calculateTime() {
			this.$store.dispatch('moderation/handleTime', {
				time: this.message.sendAt,
			});
		},
		// @vuese
		//toggle remove action
		// @arg The argument is a string value representing if user click ok
		async removeAction(action) {
			this.removeUser = !this.removeUser;
			if (action == 'yes') {
				try {
					this.$store.dispatch('messages/deleteMessage', {
						id: this.message.id,
						type: 'comment',
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/deleteMessageSuccessfully']) {
						this.disappear = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.disappear = false;
				}
			}
		},
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
</style>
