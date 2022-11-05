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
	// @vuese
	//change title name and load mentions
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
		// @vuese
		//return user mentions
		userMentions() {
			return this.$store.getters['messages/userMentions'];
		},
	},
	watch: {
		// @vuese
		//watchmentions if it's empty
		userMentions() {
			if (this.userMentions.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load user mentions from the store
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
