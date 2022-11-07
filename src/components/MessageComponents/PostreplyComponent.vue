<template>
	<div
		class="message"
		:class="backcolor == 'grey' ? 'message-grey' : 'message-white'"
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
						><time :class="!isRead ? 'unread' : ''"> {{ message.sendAt }}</time>
					</p>
					<p class="md">{{ message.text }}</p>
					<ul class="ul-messages flat-list">
						<li :id="'context-link-' + index">
							<a href="" :id="'context-a-' + index">context</a>
						</li>
						<li :id="'full-comment-link-' + index">
							<a href="" :id="'full-comment-a-' + index">Full Comments(5)</a>
						</li>
						<li>
							<form action="#">
								<input
									type="hidden"
									name="spam"
									:id="'spam-message-' + index"
									value="spam"
								/>
							</form>
							<span
								class="sure-block"
								v-if="spamUser"
								:id="'spam-message-span-' + index"
								>are you sure?
								<span class="link" :id="'yes-spam-message-' + index">Yes</span>
								/
								<span
									class="link"
									@click="spamAction()"
									:id="'no-spam-message-' + index"
									>No</span
								></span
							>
							<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
							<span
								class="link"
								v-else
								@click="spamAction()"
								:id="'click-spam-' + index"
								>Spam</span
							>
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
								<span class="link" :id="'yes-remove-message-' + index"
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
						<li :id="'report-box-' + index">
							<a href="" :id="'report-' + index">Report</a>
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
							<span class="link" :id="'reply-' + index">Reply</span>
						</li>
					</ul>
				</div>
			</div>
		</li>
	</div>
</template>

<script>
export default {
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
		//counter to handle background color
		count: {
			type: Number,
			required: true,
			default: 1,
		},
		// @vuese
		//index to handle unique ids
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
			isRead: this.message.isRead,
		};
	},
	beforeMount() {
		if (this.count % 2 == 0) {
			this.backcolor = 'white';
		} else this.backcolor = 'grey';
	},
	methods: {
		// @vuese
		//toggle remove action
		removeAction() {
			this.removeUser = !this.removeUser;
		},
		// @vuese
		//handle block action
		blockAction(action) {
			this.blockUser = !this.blockUser;
			if (action == 'yes') {
				this.$store.dispatch('messages/blockUser', {
					block: true,
					username: this.message.senderUsername,
					baseurl: this.$baseurl,
				});
			}
		},
		// @vuese
		//toggle spam action
		spamAction() {
			this.spamUser = !this.spamUser;
		},
		// @vuese
		//handle upvote action
		upvote() {
			if (this.upClicked == false) {
				this.upClicked = true;
			} else {
				this.upClicked = false;
			}
			if (this.downClicked) {
				this.downClicked = false;
			}
		},
		// @vuese
		//handle downvote action
		downvote() {
			if (this.downClicked == false) {
				this.downClicked = true;
			} else {
				this.downClicked = false;
			}
			if (this.upClicked) {
				this.upClicked = false;
			}
		},
		// @vuese
		//handle unread action
		unreadAction() {
			this.isRead = false;
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
