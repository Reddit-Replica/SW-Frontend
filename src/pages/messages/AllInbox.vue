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
		// load() {
		// 	this.messages = this.$store.getters['messages/allMessages'];
		// },
	},
};
</script>

<style scoped></style>
