<template>
	<div
		class="message"
		:class="backcolor == 'grey' ? 'message-grey' : 'message-white'"
	>
		<li>
			<p class="subject-text">
				<span>{{ message.subject }}</span>
			</p>
			<div :class="!isRead ? 'box-unread' : ''">
				<p class="md-details">
					<span :class="!isRead ? 'unread' : ''">from&nbsp;</span>
					<span class="sender"
						><a href="" id="message-sender">{{ message.senderUsername }}</a>
						<span v-if="message.receiverUsername != ''"
							><span :class="!isRead ? 'unread' : ''">&nbsp;via&nbsp;</span>
							<a href="" id="message-receiver">{{
								message.receiverUsername
							}}</a>
						</span></span
					><span :class="!isRead ? 'unread' : ''">&nbsp;sent&nbsp;</span
					><time :class="!isRead ? 'unread' : ''"> {{ message.sendAt }}</time>
				</p>
				<p class="md">{{ message.text }}</p>
				<ul class="flat-list">
					<li><a href="">Permalink</a></li>
					<li>
						<form action="#">
							<input
								type="hidden"
								name="deleted"
								id="delete-message"
								value="deleted"
							/>
						</form>
						<span class="sure-block" v-if="deleteUser"
							>are you sure?
							<span class="link" id="yes-delete-message">Yes</span> /
							<span class="link" @click="deleteAction()" id="no-delete-message"
								>No</span
							></span
						>
						<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
						<span class="link" v-else @click="deleteAction()" id="click-delete"
							>Delete</span
						>
					</li>
					<li><a href="" id="report">Report</a></li>
					<li>
						<span class="sure-block" v-if="blockUser"
							>are you sure?
							<span class="link" id="yes-block-user" @click="blockAction('yes')"
								>Yes</span
							>
							/
							<span class="link" @click="blockAction()" id="no-block-user"
								>No</span
							></span
						>
						<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
						<span class="link" v-else @click="blockAction()" id="block-user"
							>Block User</span
						>
					</li>
					<li @click="unreadAction()" v-if="isRead">
						<span class="link" id="mark-un-read">Mark Unread</span>
					</li>
					<li><span class="link" id="reply">Reply</span></li>
				</ul>
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
			require: true,
			default: () => ({
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
		//counter to handel background color
		count: {
			type: Number,
			require: true,
			default: 1,
		},
	},
	data() {
		return {
			deleteUser: false,
			blockUser: false,
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
		//toggle delete action
		deleteAction() {
			this.deleteUser = !this.deleteUser;
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
