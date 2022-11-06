<template>
	<div
		class="message"
		:class="backcolor == 'grey' ? 'message-grey' : 'message-white'"
	>
		<li>
			<p class="subject-text">
				<span>{{ message.subject }}</span>
			</p>
			<div>
				<p class="md-details">
					from&nbsp;
					<span class="sender"
						><a href="" id="message-sender">{{ message.senderUsername }}</a>
						<span v-if="message.receiverUsername != ''"
							>&nbsp;via&nbsp;
							<a href="" id="message-receiver">{{
								message.receiverUsername
							}}</a>
						</span></span
					>&nbsp;sent&nbsp;<time> {{ message.sendAt }}</time>
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
					<li @click="unreadAction('unread')">
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
		unreadAction(state) {
			if (state == 'unread') {
				this.$store.dispatch('messages/unreadMessage', {
					id: this.message.text,
					baseurl: this.$baseurl,
				});
			}
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	display: flex;
	flex-flow: row wrap;
}
.message {
	margin: 0;
	padding: 1rem 1.5rem;
	color: #373c3f;
	list-style: none;
}
.message-grey {
	background-color: var(--color-grey-light-2);
}
.message-white {
	background-color: var(--color-white-1);
}
.subject-text {
	font-weight: bold;
	font-size: 1.3rem;
}
.subject-text:after {
	content: ':';
}
.md-details {
	margin-left: 2.6rem;
	color: var(--color-grey-dark-2);
}
.md {
	margin-left: 2.6rem;
	font-size: 1.5rem;
}
.flat-list {
	font: normal x-small verdana, arial, helvetica, sans-serif;
	display: block;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
}
.flat-list li {
	margin: 1rem;
	font-size: 1rem;
	font-weight: bold;
}
.flat-list li a,
.link {
	color: var(--color-grey-dark-2);
	cursor: pointer;
}
a:hover,
.link:hover {
	text-decoration: underline;
}
.sure-block {
	color: var(--color-red-dark-1);
}
</style>
