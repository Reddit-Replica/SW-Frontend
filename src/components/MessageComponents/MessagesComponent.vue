<template>
	<div class="message" :class="[disappear == true ? 'hide-message' : '']">
		<li>
			<p class="subject-text">
				<a
					:href="'/user/' + message.subjectTitle"
					:id="'message-sender-' + index"
					class="sender-box"
					v-if="message.isUser"
					>/u/{{ message.subjectTitle }}</a
				>
				<a
					:href="'/r/' + message.subjectTitle"
					:id="'message-sender-' + index"
					class="sender-box"
					v-else
					>/r/{{ message.subjectTitle }}</a
				>
				<!-- <a
					href=""
					:id="'message-receiver-' + index"
					class="reciever-box"
					v-else
					>{{ message.receiverUsername }}</a
				> -->

				<a
					:href="
						'/r/' + message.subredditName + '/about/accept-moderator-invite'
					"
					v-if="isInvitation"
					>link: {{ message.subjectContent }}:</a
				>
				<span v-else>{{ message.subjectContent }}</span>
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
				<child-message
					v-for="(childMessage, index1) in message.messages"
					:key="childMessage"
					:index="index1"
					:expandd="expandAll"
					:child-message="childMessage"
					:is-invitation="isInvitation"
					:subject="subjectContent"
					@done-successfully="doneSuccessfully()"
				></child-message>
				<!-- <div
					v-for="(childMessage, index1) in message.messages"
					:key="childMessage"
				>
					<p class="md-details">
						<span class="sign" :id="'sign-' + index" @click="expand('')"
							>[<span v-if="!expandAll">+</span><span v-else>-</span>]</span
						>
						<span v-if="getUserName == childMessage.receiverUsername">
							<span>from&nbsp;</span>
							<span class="sender"
								><a href="" :id="'message-sender-2-' + index">{{
									childMessage.senderUsername
								}}</a>
							</span>
						</span>
						<span v-else>
							<span>to&nbsp;</span>
							<span class="reciever"
								><a href="" :id="'message-reciever-2-' + index">{{
									childMessage.receiverUsername
								}}</a>
							</span>
						</span>
						&nbsp;sent&nbsp;<time :id="'time-' + index">
							{{ handleTime[index1] }}</time
						>
					</p>
					<div v-if="expandAll">
						<Markdown class="md" :source="childMessage.text" />
						<ul class="flat-list ul-messages">
							<li v-if="getUserName == childMessage.receiverUsername">
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
							<li v-if="getUserName == childMessage.receiverUsername">
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
							<li
								v-if="getUserName == childMessage.receiverUsername && isRead"
								@click="unreadAction()"
								:id="'unread-' + index"
							>
								<span class="link" :id="'mark-un-read-' + index"
									>Mark Unread</span
								>
							</li>
							<li
								v-if="getUserName == childMessage.receiverUsername"
								:id="'reply-box-' + index"
							>
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
				</div> -->
			</div>
		</li>
		{{ expandAll }}
	</div>
</template>

<script>
// import Markdown from 'vue3-markdown-it';
// import ReplyComponent from './ReplyComponent.vue';
import ChildMessage from './ChildMessage.vue';
export default {
	components: {
		// Markdown,
		// ReplyComponent,
		ChildMessage,
	},
	// @vuese
	//details of message
	props: {
		message: {
			type: Object,
			required: true,
			default: () => ({
				id: '',
				isUser: '',
				subjectContent: '',
				subjectTitle: '',
				messages: [],
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
			disappear: false,
			spammed: false,
			spamUser: false,
			isRead: false,
			errorResponse: null,
			showReplyBox: false,
			handleTime: [],
			// sender: this.message.messages[0].senderUsername,
			// reciever: this.message.messages[0].receiverUsername,
		};
	},
	beforeMount() {
		this.calculateTime();
	},
	computed: {
		// @vuese
		//get username from store
		// @type string
		getUserName() {
			return this.$store.getters.getUserName;
		},

		// @vuese
		//if it's invitaion or not
		// @arg no argument
		isInvitation() {
			if (this.message.subjectContent.includes('invitation to moderate')) {
				return true;
			} else {
				return false;
			}
		},
		// @vuese
		//check if user is reciever or sender
		// @type boolean
		// ifMessageRecieved() {
		// 	return this.getUserName == this.message.receiverUsername;
		// },
	},
	methods: {
		// @vuese
		//handle reload messages
		// @type object
		doneSuccessfully() {
			this.$emit('doneSuccessfully');
		},
		// @vuese
		//calculate time
		// @type object
		calculateTime() {
			var currentDate = new Date();
			var returnValue = '';
			for (let i = 0; i < this.message.messages.length; i++) {
				var myTime = new Date(this.message.messages[i].sendAt);
				if (currentDate.getFullYear() != myTime.getFullYear()) {
					returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
				} else if (currentDate.getMonth() != myTime.getMonth()) {
					returnValue =
						currentDate.getMonth() - myTime.getMonth() + ' Month ago';
				} else if (currentDate.getDate() != myTime.getDate()) {
					returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
				} else if (currentDate.getHours() != myTime.getHours()) {
					returnValue =
						currentDate.getHours() - myTime.getHours() + ' Hours ago';
				} else if (currentDate.getMinutes() != myTime.getMinutes()) {
					returnValue =
						currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
				} else {
					returnValue = 'Just now';
				}
				this.handleTime[i] = returnValue;
			}
		},
		// @vuese
		//handle delete action
		// @arg The argument is a string value representing if user click ok
		async deleteAction(action) {
			this.deleteUser = !this.deleteUser;
			if (action == 'yes') {
				try {
					this.$store.dispatch('messages/deleteMessage', {
						id: this.message.id,
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
			console.log('ss');
			if (action == 'expand') {
				this.expandAll = true;
			} else if (action == 'collapse') {
				this.expandAll = false;
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
	border-color: var(--color-grey-light-10) !important;
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
