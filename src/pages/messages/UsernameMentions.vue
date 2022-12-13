<template>
	<div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
		<div>
			<user-mentions
				v-for="(message, index) in userMentions"
				:key="message"
				:message="message"
				:index="index"
			></user-mentions>
		</div>
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
	</div>
</template>

<script>
import UserMentions from '../../components/MessageComponents/UserMentions.vue';
export default {
	components: {
		UserMentions,
	},
	// @vuese
	//change title name and load mentions
	beforeMount() {
		if (localStorage.getItem('accessToken')) {
			document.title = 'messages: mentions';
			this.loadUserMentions();
		}
	},
	data() {
		return {
			noMessages: false,
			errorResponse: null,
		};
	},
	computed: {
		// @vuese
		//return user mentions
		// @type object
		userMentions() {
			return this.$store.getters['messages/userMentions'];
		},
	},
	watch: {
		// @vuese
		//watchmentions if it's empty
		// @arg no argument
		userMentions() {
			if (this.userMentions.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load user mentions from the store
		// @arg no argument
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
