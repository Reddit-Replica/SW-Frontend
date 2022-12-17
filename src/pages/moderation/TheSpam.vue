<template>
	<div>
		<queue-bar :title="'Spam'"></queue-bar>
		<clean-queue v-if="listOfSpams && listOfSpams.length == 0"></clean-queue>
		<div v-else>
			<base-post
				v-for="(spam, index) in listOfSpams"
				:key="spam"
				:spam="spam"
				:index="index"
			></base-post>
		</div>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import BasePost from '../../components/moderation/BasePost.vue';
import QueueBar from '../../components/moderation/QueueBar.vue';
export default {
	components: { CleanQueue, BasePost, QueueBar },
	beforeMount() {
		this.loadListOfSpams();
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//return list of spams
		// @type object
		listOfSpams() {
			return this.$store.getters['moderation/listOfSpams'];
		},
	},
	methods: {
		// @vuese
		//load spam list from the store
		// @arg no argument
		async loadListOfSpams(title) {
			let beforeMod = '',
				afterMod = '';
			if (title == 'before') {
				beforeMod = this.before;
			} else if (title == 'after') {
				afterMod = this.after;
			}
			try {
				await this.$store.dispatch('moderation/loadListOfSpams', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					beforeMod: beforeMod,
					afterMod: afterMod,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style></style>
