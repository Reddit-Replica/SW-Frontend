<template>
	<div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 53%; top: 270px"
			></the-spinner>
		</div>
		<div>
			<user-mentions
				v-for="(message, index) in userMentions"
				:key="message"
				:message="message"
				:index="index"
				@done-successfully="doneSuccessfully()"
			></user-mentions>
		</div>
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
	</div>
</template>

<script>
import UserMentions from '../../components/MessageComponents/UserMentions.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: {
		UserMentions,
		TheSpinner,
	},
	// @vuese
	//change title name and load mentions
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			document.title = 'messages: mentions';
			await this.loadUserMentions();
			this.loading = false;
		}
	},
	data() {
		return {
			noMessages: false,
			errorResponse: null,
			loading: false,
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
		// @vuese
		//reload compose messages from the store
		// @arg no argument
		doneSuccessfully() {
			this.loadUserMentions();
		},
	},
};
</script>

<style scoped></style>
