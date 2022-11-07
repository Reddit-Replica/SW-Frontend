<template>
	<div>
		<div>
			<sent-messages
				v-for="(message, index) in sentMessages"
				:count="++count"
				:key="message"
				:message="message"
				:index="index"
			></sent-messages>
		</div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
	</div>
</template>

<script>
import SentMessages from '../../components/MessageComponents/SentMessages.vue';
export default {
	components: {
		SentMessages,
	},
	// @vuese
	//change title name and load messages
	beforeMount() {
		document.title = 'messages: sent';
		this.loadSentMessages();
	},
	data() {
		return {
			noMessages: false,
			count: 0,
		};
	},
	computed: {
		// @vuese
		//return all messages sent or recieved
		sentMessages() {
			return this.$store.getters['messages/sentMessages'];
		},
	},
	watch: {
		// @vuese
		//watch messages if it's empty
		sentMessages() {
			if (this.sentMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load messages from the store
		async loadSentMessages() {
			try {
				await this.$store.dispatch('messages/loadSentMessages', {
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
