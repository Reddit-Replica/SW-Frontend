<template>
	<div
		:class="[
			!isRead ? 'box-unread' : '',
			disappear == true ? 'hide-message' : '',
		]"
	>
		<p class="md-details">
			<span class="sign" :id="'sign-' + index" @click="expand('')"
				>[<span v-if="!expandAll">+</span><span v-else>-</span>]</span
			>
			<span v-if="getUserName == childMessage.receiverUsername">
				<span :class="!isRead ? 'unread' : ''">from&nbsp;</span>
				<span class="sender"
					><a
						v-if="childMessage.isSenderUser"
						:href="'/user/' + childMessage.senderUsername + '/'"
						:id="'message-sender-2-' + index"
						>/u/{{ childMessage.senderUsername }}</a
					>
					<a
						v-else
						:href="'/r/' + childMessage.senderUsername"
						:id="'message-sender-2-' + index"
						>/r/{{ childMessage.senderUsername }}</a
					>
				</span>
				<!-- <span class="sender"
					><a href="" :id="'message-sender-2-' + index">{{
						childMessage.senderUsername
					}}</a>
				</span> -->
			</span>
			<span v-else>
				<span :class="!isRead ? 'unread' : ''">to&nbsp;</span>
				<span class="receiver"
					><a
						v-if="childMessage.isReceiverUser"
						:href="'/user/' + childMessage.receiverUsername + '/'"
						:id="'message-receiver-2-' + index"
						>/u/{{ childMessage.receiverUsername }}</a
					>
					<a
						v-else
						:href="'/r/' + childMessage.receiverUsername"
						:id="'message-receiver-2-' + index"
						>/r/{{ childMessage.receiverUsername }}</a
					>
				</span>
			</span>
			&nbsp;sent&nbsp;<time
				:id="'time-' + index"
				:class="!isRead ? 'unread' : ''"
			>
				{{ handleTime }}</time
			>
		</p>
		<div v-if="expandAll">
			<!-- <p class="md">{{ message.text }}</p> -->
			<Markdown class="md" :source="childMessage.text" />
			<ul
				class="flat-list ul-messages"
				v-if="getUserName == childMessage.receiverUsername && !isInvitation"
			>
				<!-- <li :id="'permalink-' + index">
							<a href="" :id="'permalink-link-' + index">Permalink</a>
						</li> -->
				<li>
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
						<span
							class="link"
							:id="'yes-delete-message-' + index"
							@click="deleteAction('yes')"
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
					<span
						class="link"
						v-else
						@click="deleteAction()"
						:id="'click-delete-' + index"
						>Delete</span
					>
				</li>
				<li
					:id="'spam-box-' + index"
					v-if="getUserName == childMessage.receiverUsername"
				>
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
					<span
						class="link"
						v-else
						@click="blockAction()"
						:id="'click-block-' + index"
						>Block User</span
					>
				</li>
				<li v-if="isRead" @click="unreadAction()" :id="'unread-' + index">
					<span class="link" :id="'mark-un-read-' + index">Mark Unread</span>
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
		<ReplyComponent
			:show-reply-box="showReplyBox"
			:index="index"
			@hide-reply-box="replyFunction('hide')"
			:receiver-username="childMessage.receiverUsername"
			:sender-username="childMessage.senderUsername"
			:id="childMessage.msgID"
			:subject="subject"
			:subreddit-name="childMessage.subredditName"
			@done-successfully="doneSuccessfully()"
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
	emits: ['doneSuccessfully'],
	props: {
		// @vuese
		//details of message
		// @type object
		childMessage: {
			type: Object,
			required: true,
			default: () => ({
				msgID: '',
				senderUsername: '',
				text: '',
				receiverUsername: '',
				sendAt: '',
				subredditName: '',
				isSenderUser: '',
				isReceiverUser: '',
			}),
		},
		// @vuese
		//index to handle unique ids
		// @type number
		index: {
			type: Number,
			required: true,
			default: 0,
		},
		// @vuese
		//if it is an invitation or not
		// @type boolean
		isInvitation: {
			type: Boolean,
			required: true,
			default: false,
		},
		// @vuese
		//if it is expand or collapse
		// @type boolean
		expandd: {
			type: Boolean,
			required: true,
			default: true,
		},
		// @vuese
		//the subject of the message
		// @type string
		subject: {
			type: String,
			required: true,
			default: '',
		},
	},
	computed: {
		// @vuese
		//get username from local storage
		// @type string
		getUserName() {
			return localStorage.getItem('userName');
		},
	},
	data() {
		return {
			deleteUser: false,
			blockUser: false,
			expandAll: true,
			disappear: false,
			spammed: false,
			spamUser: false,
			isRead: true,
			errorResponse: null,
			showReplyBox: false,
			handleTime: '',
		};
	},
	beforeMount() {
		this.calculateTime();
	},
	watch: {
		expandd() {
			this.expandAll = this.expandd;
		},
	},
	methods: {
		// @vuese
		//handle reload messages
		// @arg no argument
		doneSuccessfully() {
			this.$emit('doneSuccessfully');
		},
		// @vuese
		//calculate time
		// @arg no argument
		calculateTime() {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.childMessage.sendAt);
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
		//handle delete action
		// @arg The argument is a string value representing if user click ok
		async deleteAction(action) {
			this.deleteUser = !this.deleteUser;
			if (action == 'yes') {
				try {
					this.$store.dispatch('messages/deleteMessage', {
						id: this.childMessage.msgID,
						type: 'message',
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
						username: this.childMessage.senderUsername,
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
						id: this.childMessage.msgID,
						type: 'message',
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
		//expand or collapse message details
		// @arg The argument is a string value representing if its expand or collapse
		expand(action) {
			if (action == 'expand') {
				this.expandAll = true;
			} else if (action == 'collapse') {
				this.expandAll = false;
			} else {
				this.expandAll = !this.expandAll;
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
.box {
	display: flex;
	flex-direction: column;
	margin: 0;
	border-left: var(--line-dashed-3);
}
.box-unread {
	margin: 1rem;
	background-color: var(--color-grey-light-10) !important;
	border-color: red !important;
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
.hide-message {
	display: none;
}
</style>
