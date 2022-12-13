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
				<span>{{ message.subject }}:</span>
			</p>
			<div>
				<p class="md-details">
					<span>from&nbsp;</span>
					<span class="sender"
						><a
							v-if="message.isSenderUser"
							:href="'/user/' + message.senderUsername"
							:id="'message-sender-' + index"
							>{{ message.senderUsername }}</a
						>
						<a
							v-else
							:href="'/r/' + message.senderUsername"
							:id="'message-sender-' + index"
							>/r/{{ message.senderUsername }}</a
						>
						<span v-if="message.receiverUsername != ''"
							><span>&nbsp;via&nbsp;</span>
							<a
								v-if="message.isReceiverUser"
								:href="'/user/' + message.receiverUsername"
								:id="'message-receiver-' + index"
								>{{ message.receiverUsername }}</a
							><a
								v-else
								:href="'/r/' + message.receiverUsername"
								:id="'message-receiver-' + index"
								>/r/{{ message.receiverUsername }}</a
							>
						</span></span
					><span>&nbsp;sent&nbsp;</span
					><time :id="'time-' + index"> {{ handleTime }}</time>
				</p>

				<Markdown class="md" id="md" :source="message.text" />
				<!-- <p class="md">{{ message.text }}</p> -->
				<ul
					class="flat-list ul-messages"
					v-if="message.isSenderUser && !sendByMe"
				>
					<!-- <li :id="'permalink-link-' + index">
						<a href="" :id="'permalink-a-' + index">Permalink</a>
					</li> -->
					<li :id="'delete-message-li-' + index">
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
						<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
						<span
							class="link"
							v-else
							@click="deleteAction()"
							:id="'click-delete-' + index"
							>Delete</span
						>
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
					<li @click="unreadAction()" :id="'unread-' + index">
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
				isModerator: '',
				postTitle: '',
				postID: '',
				commentID: '',
				numOfComments: '',
				isSenderUser: '',
				isReceiverUser: '',
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
			deleteUser: false,
			spamUser: false,
			blockUser: false,
			backcolor: 'grey',
			disappear: false,
			spammed: false,
			errorResponse: null,
			showReplyBox: false,
			handleTime: '',
		};
	},
	// @vuese
	//decide if background color in  white or grey depends on if index even or odd
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
		sendByMe() {
			return this.message.senderUsername == localStorage.getItem('userName');
		},
	},
	methods: {
		// @vuese
		//calculate time
		// @type object
		calculateTime() {
			// this.$store.dispatch('moderation/handleTime', {
			// 	time: this.message.sendAt,
			// });
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
		//handle delete action
		// @arg The argument is a string value representing if user click ok
		async deleteAction(action) {
			this.deleteUser = !this.deleteUser;
			if (action == 'yes') {
				try {
					await this.$store.dispatch('messages/deleteMessage', {
						id: this.message.id,
						type: 'message',
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/deleteMessageSuccessfully']) {
						this.disappear = true;
						this.$emit('doneSuccessfully');
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
			let name = '';
			if (this.senderUsername == localStorage.getItem('userName')) {
				name = this.receiverUsername;
			} else {
				name = this.senderUsername;
			}
			if (action == 'yes') {
				try {
					this.$store.dispatch('messages/blockUser', {
						block: true,
						username: name,
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
					await this.$store.dispatch('messages/spamMessage', {
						id: this.message.id,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/markSpamSuccessfully']) {
						this.spammed = true;
						this.$emit('doneSuccessfully');
					}
				} catch (err) {
					this.errorResponse = err;
					this.spammed = false;
				}
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
.hide-message {
	display: none;
}
</style>
