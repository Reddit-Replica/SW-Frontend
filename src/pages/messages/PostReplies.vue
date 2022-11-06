<template>
	<div>
		<div>
			<postreply-component
				v-for="message in postReplies"
				:count="++count"
				:key="message"
				:message="message"
			></postreply-component>
		</div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
	</div>
</template>

<script>
import PostreplyComponent from '../../components/MessageComponents/PostreplyComponent.vue';
export default {
	components: {
		PostreplyComponent,
	},
	// @vuese
	//change title name and load replies
	beforeMount() {
		document.title = 'messages: selfreply';
		this.loadPostReplies();
	},
	data() {
		return {
			noMessages: false,
			count: 0,
		};
	},
	computed: {
		// @vuese
		//return post replies
		postReplies() {
			return this.$store.getters['messages/postReplies'];
		},
	},
	watch: {
		// @vuese
		//watch post replies if it's empty
		postReplies() {
			if (this.postReplies.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load post replies from the store
		async loadPostReplies() {
			try {
				await this.$store.dispatch('messages/loadPostReplies', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style></style>
