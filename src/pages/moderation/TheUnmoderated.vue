<template>
	<div>
		<queue-bar :title="'Unmoderated'"></queue-bar>
		<clean-queue></clean-queue>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import QueueBar from '../../components/moderation/QueueBar.vue';
export default {
	components: { CleanQueue, QueueBar },
	beforeMount() {
		this.Unmoderate();
	},
	computed: {
		// @vuese
		//return Unmoderated post
		// @type string
		UnmoderatedPosts() {
			return this.$store.getters['moderation/Unmoderated'];
		},
	},
	methods: {
		async Unmoderate() {
			try {
				await this.$store.dispatch('moderation/unModerated', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style></style>
