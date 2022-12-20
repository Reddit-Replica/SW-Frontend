<template>
	<div class="info">
		<about-community-bar
			v-if="subreddit.isModerator"
			:subreddit-name="subreddit.title"
			:subreddit-nickname="subreddit.nickname"
			:subreddit-image-url="subreddit.picture"
			:joined="subreddit.isMember"
			:subreddit-id="subreddit.subredditId"
		></about-community-bar>
		<subreddit-card :subreddit="subreddit" v-else></subreddit-card>
		<div class="rules" v-if="rules.length != 0">
			<subreddit-rules
				:rules="subreddit.rules"
				:subreddit-name="subredditName"
				:blue="subreddit.isModerator"
			></subreddit-rules>
		</div>
		<div class="moderators" v-if="moderators.length != 0">
			<subreddit-moderators
				:moderators="moderators"
				:is-moderator="subreddit.isModerator"
			/>
		</div>
	</div>
	<!-- <button @click="click"></button> -->
</template>
<script>
import AboutCommunityBar from '../CommunityComponents/AboutCommunityBar.vue';
import SubredditCard from './SubredditCard.vue';
import SubredditRules from './SubredditRules.vue';
import SubredditModerators from './SubredditModerators.vue';
export default {
	components: {
		SubredditCard,
		SubredditRules,
		SubredditModerators,
		AboutCommunityBar,
	},
	props: {
		subredditName: {
			type: String,
			default: '',
			required: true,
		},
	},
	data() {
		return {
			subreddit: {},
			isJoined: false,
			hoverButtonText: 'Join',
			moderators: [],
			rules: [],
		};
	},
	beforeMount() {
		this.loadSubredditInfo();
		this.loadListOfRules();
		this.loadSubredditModerators();
	},
	methods: {
		click() {
			console.log(this.subreddit);
		},
		async loadSubredditInfo() {
			try {
				await this.$store.dispatch('community/getSubreddit', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.subreddit = this.$store.getters['community/getSubreddit'];
			console.log('here');
			console.log(this.subreddit);
		},
		async loadSubredditModerators() {
			try {
				await this.$store.dispatch('moderation/loadListOfModerators', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.moderators = this.$store.getters['moderation/listOfModerators'];
		},
		// @vuese
		//load Rules list from the store
		// @arg no argument
		async loadListOfRules() {
			try {
				await this.$store.dispatch('moderation/loadListOfRules', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.rules = this.$store.getters['moderation/listOfRules'];
		},
	},
};
</script>
<style scoped>
.info {
	display: flex;
	flex-direction: column;
}
</style>
