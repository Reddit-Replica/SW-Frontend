<template>
	<div>
		<div>
			<sent-messages
				v-for="(message, index) in sentMessages"
				:key="message"
				:message="message"
				:index="index"
			></sent-messages>
		</div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
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
			errorResponse: null,
		};
	},
	computed: {
		// @vuese
		//return all messages sent or recieved
		// @type object
		sentMessages() {
			return this.$store.getters['messages/sentMessages'];
		},
	},
	watch: {
		// @vuese
		//watch messages if it's empty
		// @arg no argument
		sentMessages() {
			if (this.sentMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load messages from the store
		// @arg no argument
		async loadSentMessages() {
			try {
				await this.$store.dispatch('messages/loadSentMessages', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.errorResponse = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style scoped></style>
