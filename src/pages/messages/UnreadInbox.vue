<template>
	<div>
		<div>
			<allinbox-component
				v-for="message in unreadMessages"
				:key="message"
				:message="message"
			></allinbox-component>
		</div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
	</div>
</template>

<script>
import AllinboxComponent from '../../components/MessageComponents/AllinboxComponent.vue';
export default {
	components: {
		AllinboxComponent,
	},
	beforeMount() {
		document.title = 'messages: unread';
		this.loadUnreadMessages();
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		unreadMessages() {
			return this.$store.getters['messages/unreadMessages'];
		},
	},
	watch: {
		unreadMessages() {
			if (this.unreadMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
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
