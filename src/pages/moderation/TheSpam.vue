<template>
	<div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
		<queue-bar :title="'Spam'"></queue-bar>
		<clean-queue v-if="listOfSpams && listOfSpams.length == 0"></clean-queue>
		<div v-else>
			<div v-for="value in listOfSpams" :key="value.id">
				<new-base-post :spam="value" :index="value.id"></new-base-post>
			</div>
			<!-- <base-post
				v-for="value in listOfSpams"
				:key="value.id"
				:spam="value"
				:index="index"
			></base-post> -->
		</div>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import NewBasePost from '../../components/moderation/NewBasePost.vue';
import QueueBar from '../../components/moderation/QueueBar.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: { CleanQueue, NewBasePost, QueueBar, TheSpinner },
	async created() {
		this.loading = true;
		if (localStorage.getItem('accessToken')) {
			await this.loadListOfSpams();
		}
		this.loading = false;
	},
	data() {
		return {
			loading: false,
		};
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
			//console.log(this.$store.getters['moderation/listOfSpams']);
			return this.$store.getters['moderation/listOfSpams'];
		},
	},
	methods: {
		// @vuese
		//load spam list from the store
		// @arg no argument
		async loadListOfSpams() {
			// let beforeMod = '',
			// 	afterMod = '';
			// if (title == 'before') {
			// 	beforeMod = this.before;
			// } else if (title == 'after') {
			// 	afterMod = this.after;
			// }
			try {
				await this.$store.dispatch('moderation/loadListOfSpams', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					// beforeMod: beforeMod,
					// afterMod: afterMod,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style></style>
