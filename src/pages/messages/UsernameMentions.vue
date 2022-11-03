<template>
	<div>
		<div>
			<allinbox-component
				v-for="message in userMentions"
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
		document.title = 'messages: mentions';
		this.loadUserMentions();
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		userMentions() {
			return this.$store.getters['messages/userMentions'];
		},
	},
	watch: {
		userMentions() {
			if (this.userMentions.length == 0) this.noMessages = true;
		},
	},
	methods: {
		async loadUserMentions() {
			try {
				await this.$store.dispatch('messages/loadUserMentions', {
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
