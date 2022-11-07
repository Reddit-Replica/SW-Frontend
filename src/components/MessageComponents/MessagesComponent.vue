<template>
	<div class="message">
		<li>
			<p class="subject-text">
				<a
					href=""
					:id="'message-sender-' + index"
					class="sender-box"
					v-if="ifMessageRecieved"
					>{{ message.senderUsername }}</a
				>
				<a
					href=""
					:id="'message-receiver-' + index"
					class="reciever-box"
					v-else
					>{{ message.receiverUsername }}</a
				>
				<span>{{ message.subject }}</span>
			</p>
			<p class="expand-p">
				<span
					class="expand"
					:id="'expand-all-' + index"
					@click="expand('expand')"
					>expand all</span
				>
				<span
					class="expand"
					:id="'collapse-all-' + index"
					@click="expand('collapse')"
					>collapse all</span
				>
			</p>
			<div class="box" :class="!isRead ? 'box-unread' : ''">
				<p class="md-details">
					<span class="sign" :id="'sign-' + index" @click="expand('')"
						>[<span v-if="!expandAll">+</span><span v-else>-</span>]</span
					>
					<span v-if="ifMessageRecieved">
						<span>from&nbsp;</span>
						<span class="sender"
							><a href="" :id="'message-sender-2-' + index">{{
								message.senderUsername
							}}</a>
						</span>
					</span>
					<span v-else>
						<span>to&nbsp;</span>
						<span class="reciever"
							><a href="" :id="'message-reciever-2-' + index">{{
								message.receiverUsername
							}}</a>
						</span>
					</span>
					&nbsp;sent&nbsp;<time> {{ message.sendAt }}</time>
				</p>
				<div v-if="expandAll">
					<p class="md">{{ message.text }}</p>
					<ul class="flat-list ul-messages">
						<li :id="'permalink-' + index">
							<a href="" :id="'permalink-linl-' + index">Permalink</a>
						</li>
						<li v-if="ifMessageRecieved">
							<form action="#">
								<input
									type="hidden"
									name="deleted"
									:id="'delete-message-' + index"
									value="deleted"
								/>
							</form>
							<span
								class="sure-block"
								v-if="deleteUser"
								:id="'delete-message-span-' + index"
								>are you sure?
								<span class="link" :id="'yes-delete-message-' + index"
									>Yes</span
								>
								/
								<span
									class="link"
									@click="deleteAction()"
									:id="'no-delete-message-' + index"
									>No</span
								></span
							>
							<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
							<span
								class="link"
								v-else
								@click="deleteAction()"
								:id="'click-delete-' + index"
								>Delete</span
							>
						</li>
						<li v-if="ifMessageRecieved" :id="'report-' + index">
							<a href="" :id="'report-a-' + index">Report</a>
						</li>
						<li v-if="ifMessageRecieved">
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
								:id="'no-block-user-' + index"
								>Block User</span
							>
						</li>
						<li
							v-if="ifMessageRecieved && isRead"
							@click="unreadAction()"
							:id="'unread-' + index"
						>
							<span class="link" :id="'mark-un-read-' + index"
								>Mark Unread</span
							>
						</li>
						<li v-if="ifMessageRecieved" :id="'reply-box-' + index">
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
	// @vuese
	//details of message
	props: {
		message: {
			type: Object,
			required: true,
			default: () => ({
				id: '',
				text: '',
				type: '',
				senderUsername: '',
				receiverUsername: '',
				sendAt: '',
				subject: '',
				isReply: '',
				isRead: '',
			}),
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
			deleteUser: false,
			blockUser: false,
			expandAll: true,
			isRead: this.message.isRead,
		};
	},
	computed: {
		// @vuese
		//get username from store
		getUserName() {
			return this.$store.getters.getUserName;
		},
		// @vuese
		//check if user is reciever or sender
		ifMessageRecieved() {
			return this.getUserName == this.message.receiverUsername;
		},
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
		// @vuese
		//expand or collapse message details
		expand(action) {
			if (action == 'expand') {
				this.expandAll = true;
			} else if (action == 'collapse') {
				this.expandAll = false;
			} else {
				this.expandAll = !this.expandAll;
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
.message:nth-child(odd) {
	background-color: var(--color-grey-light-9);
}
.message:nth-child(even) {
	background-color: var(--color-white-1);
}
.box {
	display: flex;
	flex-direction: column;
	margin: 0;
	border-left: var(--line-dashed-3);
}
.box-unread {
	margin: 1rem;
	background-color: var(--color-grey-light-10);
	border-color: var(--color-grey-light-10);
}
.sender-box,
.reciever-box {
	color: var(--color-blue);
	border: var(--line-9);
	text-decoration: none;
	border-radius: 0.5rem;
	padding: 0.4rem;
	margin: 0.5rem;
}
.sender-box:hover,
.reciever-box:hover {
	text-decoration: none;
}
.expand-p {
	margin: 1rem;
	color: var(--color-blue-2);
	font-weight: bold;
	font-size: 1.1rem;
}
.expand {
	margin-right: 1rem;
	cursor: pointer;
}
.sign {
	color: var(--color-blue);
	margin-right: 0.3rem;
	font-size: 1.4rem;
	cursor: pointer;
}
a:hover,
.link:hover {
	text-decoration: underline;
}
.sender a,
.reciever a {
	color: var(--color-blue);
	font-size: 1.1rem;
	font-weight: bold;
}
</style>
