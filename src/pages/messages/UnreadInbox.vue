<template>
	<div>
		<div>
			<unread-message
				v-for="(message, index) in unreadMessages"
				:key="message"
				:message="message"
				:index="index"
			></unread-message>
		</div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
	</div>
</template>

<script>
import UnreadMessage from '../../components/MessageComponents/UnreadMessage.vue';
export default {
	components: {
		UnreadMessage,
	},
	// @vuese
	//change title name and load messages
	beforeMount() {
		if (localStorage.getItem('accessToken')) {
			document.title = 'messages: unread';
			this.loadUnreadMessages();
		}
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		// @vuese
		//return unread messages
		// @type object
		unreadMessages() {
			return this.$store.getters['messages/unreadMessages'];
		},
	},
	watch: {
		// @vuese
		//watch unread messages if it's empty
		// @arg no argument
		unreadMessages() {
			if (this.unreadMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load unread messages from the store
		// @arg no argument
		async loadUnreadMessages() {
			try {
				await this.$store.dispatch('messages/loadUnreadMessages', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style scoped></style>
