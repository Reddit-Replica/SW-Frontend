<template>
	<div>
		<div>
			<postreply-component
				v-for="message in postReplies"
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
	beforeMount() {
		document.title = 'messages: selfreply';
		this.loadPostReplies();
	},
	data() {
		return {
			noMessages: false,
		};
	},
	computed: {
		postReplies() {
			return this.$store.getters['messages/postReplies'];
		},
	},
	watch: {
		postReplies() {
			if (this.postReplies.length == 0) this.noMessages = true;
		},
	},
	methods: {
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
