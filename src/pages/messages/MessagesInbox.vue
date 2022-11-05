<template>
	<div>
		<div>
			<messages-component
				v-for="message in userMessages"
				:key="message"
				:message="message"
			></messages-component>
		</div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
	</div>
</template>

<script>
import MessagesComponent from '../../components/MessageComponents/MessagesComponent.vue';
export default {
	components: {
		MessagesComponent,
	},
	// @vuese
	//change title name and load messages
	beforeMount() {
		document.title = 'messages: messages';
		this.loadUserMessages();
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		// @vuese
		//return all messages sent or recieved
		userMessages() {
			return this.$store.getters['messages/userMessages'];
		},
	},
	watch: {
		// @vuese
		//watch messages if it's empty
		userMessages() {
			if (this.userMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load messages from the store
		async loadUserMessages() {
			try {
				await this.$store.dispatch('messages/loadUserMessages', {
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
