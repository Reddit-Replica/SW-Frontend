<template>
	<div>
		<div>
			<messages-component
				v-for="message in unreadMessages"
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
	beforeMount() {
		document.title = 'messages: messages';
		this.loadInboxMessages();
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		unreadMessages() {
			return this.$store.getters['messages/userMessages'];
		},
	},
	watch: {
		unreadMessages() {
			if (this.unreadMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		async loadInboxMessages() {
			try {
				await this.$store.dispatch('messages/loadInboxMessages', {
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
