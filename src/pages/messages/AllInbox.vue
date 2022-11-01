<template>
	<allinbox-component
		v-for="message in messages"
		:key="message"
		:message="message"
	></allinbox-component>
</template>

<script>
import AllinboxComponent from '../../components/MessageComponents/AllinboxComponent.vue';
export default {
	components: {
		AllinboxComponent,
	},
	data() {
		return {
			// messages: [],
			// messages: [
			// 	{
			// 		text: 'hello world',
			// 		senderUsername: '/u/norhan_reda',
			// 		receiverUsername: '',
			// 		sendAt: '6 days ago',
			// 		subject: 'hi',
			// 	},
			// 	{
			// 		text: 'hello asmaa',
			// 		senderUsername: '/u/hoda_gamal',
			// 		receiverUsername: '',
			// 		sendAt: '5 days ago',
			// 		subject: 'hiiiii',
			// 	},
			// ],
		};
	},
	created() {
		document.title = 'messages: inbox';
		this.loadAllMessages();
	},
	// watch: {
	// 	messages() {
	// 		console.log(this.messages);
	// 	},
	// },
	computed: {
		messages() {
			return this.$store.getters['messages/allMessages'];
		},
	},
	methods: {
		async loadAllMessages() {
			try {
				await this.$store.dispatch('messages/loadAllMessages', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		load() {
			this.messages = this.$store.getters['messages/allMessages'];
		},
	},
};
</script>

<style scoped></style>
