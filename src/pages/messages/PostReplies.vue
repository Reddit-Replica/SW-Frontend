<template>
	<div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
		<div>
			<postreply-component
				v-for="(message, index) in postReplies"
				:key="message"
				:message="message"
				:index="index"
				@done-successfully="doneSuccessfully()"
			></postreply-component>
		</div>
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
	</div>
</template>

<script>
import PostreplyComponent from '../../components/MessageComponents/PostreplyComponent.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: {
		PostreplyComponent,
		TheSpinner,
	},
	// @vuese
	//change title name and load replies
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			document.title = 'messages: selfreply';
			await this.loadPostReplies();
			this.loading = false;
		}
	},
	data() {
		return {
			noMessages: false,
			loading: false,
		};
	},
	computed: {
		// @vuese
		//return post replies
		// @type object
		postReplies() {
			return this.$store.getters['messages/postReplies'];
		},
	},
	watch: {
		// @vuese
		//watch post replies if it's empty
		// @arg no argument
		postReplies() {
			if (this.postReplies.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load post replies from the store
		// @arg no argument
		async loadPostReplies() {
			try {
				await this.$store.dispatch('messages/loadPostReplies', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},

		// @vuese
		//reload post replies from the store
		// @arg no argument
		doneSuccessfully() {
			this.loadPostReplies();
		},
	},
};
</script>

<style></style>
