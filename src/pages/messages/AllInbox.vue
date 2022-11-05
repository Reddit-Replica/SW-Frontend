<template>
	<div>
		<div>
			<allinbox-component
				v-for="message in composeMessages"
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
	// @vuese
	//change title name and load messages
	beforeMount() {
		document.title = 'messages: inbox';
		this.loadComposeMessages();
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		// @vuese
		//return compose messages
		composeMessages() {
			return this.$store.getters['messages/composeMessages'];
		},
	},
	watch: {
		// @vuese
		//watch compose messages if it's empty
		composeMessages() {
			if (this.composeMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load compose messages from the store
		async loadComposeMessages() {
			try {
				await this.$store.dispatch('messages/loadComposeMessages', {
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
