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
				<span>{{ message.subject }}</span>
			</p>
			<div :class="!isRead ? 'box-unread' : ''">
				<p class="md-details">
					<span :class="!isRead ? 'unread' : ''">from&nbsp;</span>
					<span class="sender"
						><a href="" :id="'message-sender-' + index">{{
							message.senderUsername
						}}</a>
						<span v-if="message.receiverUsername != ''"
							><span :class="!isRead ? 'unread' : ''">&nbsp;via&nbsp;</span>
							<a href="" :id="'message-receiver-' + index">{{
								message.receiverUsername
							}}</a>
						</span></span
					><span :class="!isRead ? 'unread' : ''">&nbsp;sent&nbsp;</span
					><time :class="!isRead ? 'unread' : ''" :id="'time-' + index">
						{{ message.sendAt }}</time
					>
				</p>

				<Markdown class="md" :source="message.text" />
				<!-- <p class="md">{{ message.text }}</p> -->
				<ul class="flat-list ul-messages">
					<li :id="'permalink-link-' + index">
						<a href="" :id="'permalink-a-' + index">Permalink</a>
					</li>
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
					<li @click="unreadAction()" v-if="isRead" :id="'unread-' + index">
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
			deleteUser: false,
			spamUser: false,
			blockUser: false,
			backcolor: 'grey',
			disappear: false,
			spammed: false,
			isRead: this.message.isRead,
			errorResponse: null,
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
