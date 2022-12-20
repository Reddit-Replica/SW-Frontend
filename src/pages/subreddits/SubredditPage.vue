<template>
	<div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 30%; top: 50%"
			></the-spinner>
		</div>
		<the-header
			:header-title="'r/' + subreddit.title"
			:header-img="subreddit.picture"
			:is-subreddit="true"
		></the-header>
		<subreddit-top
			@reload="reloadPage"
			:subreddit-name="subreddit.title"
			:subreddit-nickname="subreddit.nickname"
			:subreddit-image-url="subreddit.image"
			:subreddit-banner-url="subreddit.banner"
			:joined="subreddit.isMember"
			:subreddit-id="subreddit.subredditId"
			id="community-header"
		></subreddit-top>
		<div class="subreddit-page">
			<div class="subreddit-page-left">
				<createpost-bar id="create-post-bar-subreddit"></createpost-bar>
				<sortposts-bar
					@title="changeRoute"
					@time="changeRouteQueryParam"
					:initial-title="$route.params.title"
					:best="false"
					id="sort-posts-bar-subreddit"
				></sortposts-bar>
				<grow-community id="grow-community-comp"></grow-community>
				<!-- <community-post id="pinned-post-comp"></community-post> -->
				<overview-post
					class="posts"
					v-for="(post, index) in posts"
					:key="index"
					@subreddit-page-handler="reloadPosts"
					:post-data="{
						data: post.data,
						id: post.id,
					}"
				></overview-post>
			</div>
			<div class="subreddit-page-right">
				<about-community-bar
					@reload="reloadPage"
					id="abot-comm-comp"
					:subreddit-name="subreddit.title"
					:is-moderator="subreddit.isModerator"
					:is-favourite="subreddit.isFavorite"
					:topics="topics"
					:members-count="subreddit.members"
					:community-date="subreddit.dateOfCreation"
					:community-type="subreddit.type"
					:community-description-prop="subreddit.description"
					:community-topic-prop="subreddit.mainTopic"
					:community-subtopics-prop="subreddit.subTopics"
				></about-community-bar>
				<subreddit-rules
					:rules="rules"
					:subreddit-name="subreddit.title"
					:blue="true"
				></subreddit-rules>
				<moderators-bar
					:moderators="moderators"
					:subreddit-name="subreddit.title"
				></moderators-bar>
				<backtotop-button id="back-to-top-subreddit"></backtotop-button>
			</div>
		</div>
		<div id="first-time-subreddit">
			<base-dialog
				:show="showDialog"
				@close="hideFirstDialog"
				title="Create your first post"
			>
				<div class="first-time-subreddit">
					<div class="text">
						Welcome to your new community, r/{{ subredditName }}! Set the tone
						for your community and welcome new members with a post.
					</div>
					<div class="box-buttons">
						<base-button
							class="button-white-2 text"
							@click="hideFirstDialog"
							id="continue-to-subreddit-button"
							>Continue</base-button
						>
						<base-button
							class="button-blue-2 text"
							@click="createPost"
							id="create-first-post-subreddit-button"
							>Create A Post</base-button
						>
					</div>
				</div>
			</base-dialog>
		</div>
	</div>
</template>

<script>
import SubredditTop from '../../components/CommunityComponents/SubredditTop.vue';
import CreatepostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
import AboutCommunityBar from '../../components/CommunityComponents/AboutCommunityBar.vue';
import GrowCommunity from '../../components/CommunityComponents/GrowCommunity.vue';
import ModeratorsBar from '../../components/CommunityComponents/ModeratorsBar.vue';
import BacktotopButton from '../../components/BaseComponents/BacktotopButton.vue';
import SubredditRules from '../../components/PostComponents/SubredditRules.vue';
import OverviewPost from '../../components/UserComponents/BaseUserComponents/OverviewPost.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';

export default {
	components: {
		SubredditTop,
		CreatepostBar,
		SortpostsBar,
		AboutCommunityBar,
		GrowCommunity,
		ModeratorsBar,
		BacktotopButton,
		SubredditRules,
		OverviewPost,
		TheSpinner,
	},
	props: {
		subredditName: {
			type: String,
			default: '',
		},
		firstCreated: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			topics: [],
			showFirstDialog: true,
			firstTimeCreated: false,
			subreddit: {},
			moderators: [],
			rules: [],
			posts: [],
			loading: false,
		};
	},
	computed: {
		showDialog() {
			return this.firstTimeCreated && this.showFirstDialog;
		},
		nickname() {
			if (!this.subreddit.nickname) return this.subreddit.title;
			else return this.subreddit.nickname;
		},
		userName() {
			return localStorage.getItem('userName');
		},
	},
	async beforeMount() {
		//fetch subreddit details
		this.loading = true;
		this.firstTimeCreated =
			this.$store.getters['community/createdSuccessfully'];
		await this.getSubreddit();
		await this.getModerators();
		await this.getTopics();
		await this.getRules();
		document.title = 'r/ ' + this.nickname;

		//set listing as hot by default
		let title = this.$route.params.title;
		if (title == null) title = 'hot';
		await this.fetchSubredditPosts(title);
		this.loading = false;
	},
	watch: {
		'$route.params.title': {
			handler: function () {
				this.fetchSubredditPosts(this.$route.params.title);
			},
		},
	},
	methods: {
		reloadPosts() {
			let title = this.$route.params.title;
			if (title == null) title = 'hot';
			this.fetchSubredditPosts(title);
		},
		async getSubreddit() {
			const accessToken = localStorage.getItem('accessToken');
			try {
				await this.$store.dispatch('community/getSubreddit', {
					subredditName: this.subredditName,
					baseurl: this.$baseurl,
					token: accessToken,
				});
				this.subreddit = this.$store.getters['community/getSubreddit'];
			} catch (err) {
				console.log(err);
				if (this.$store.getters['community/notFound']) {
					this.$router.push('/notFound');
				}
			}
		},
		async getTopics() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/getsuggestedTopics', {
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.topics = this.$store.getters['community/getTopics'];
		},
		async getModerators() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('moderation/loadListOfModerators', {
				subredditName: this.subreddit.title,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.moderators = this.$store.getters['moderation/listOfModerators'];
		},
		async getRules() {
			const accessToken = localStorage.getItem('accessToken');
			try {
				await this.$store.dispatch('moderation/loadListOfRules', {
					baseurl: this.$baseurl,
					subredditName: this.subreddit.title,
					token: accessToken,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.rules = this.$store.getters['moderation/listOfRules'];
			console.log(this.rules);
		},
		reloadPage() {
			this.getSubreddit();
			this.getRules();
			this.getModerators();
			// this.fetchSubredditPosts(this.$route.params.title);
		},
		hideFirstDialog() {
			this.showFirstDialog = false;
		},
		createPost() {
			this.hideFirstDialog();
			this.$router.push({
				name: 'submit',
				params: { subredditName: this.subredditName },
			});
		},
		async fetchSubredditPosts(title) {
			try {
				const accessToken = localStorage.getItem('accessToken');
				await this.$store.dispatch('community/fetchSubredditPosts', {
					subredditName: this.subredditName,
					baseurl: this.$baseurl,
					title: title,
					token: accessToken,
					query: this.$route.query.t,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}

			this.posts = this.$store.getters['community/getPosts'];
		},

		checkIfModerator() {
			const username = localStorage.getItem('userName');
			const moderators = this.subreddit['moderators'];
			const user = moderators.findIndex(
				(moderator) => moderator.username === username
			);
			//not in subreddit moderators list
			if (user === -1) {
				this.isModerator = false;
			} else {
				this.isModerator = true;
			}
		},
		changeRoute(title) {
			this.$router.push(`/r/${this.subreddit.title}/${title}`);
		},
		async changeRouteQueryParam(title) {
			await this.$router.push({
				path: `top`,
				query: { t: title },
			});
			this.fetchSubredditPosts('top');
		},
	},
};
</script>

<style scoped>
.subreddit-page {
	max-width: 100%;
	height: 100%;
	min-height: 200rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	box-sizing: border-box;
	margin: 0 auto;
}
.subreddit-page-left {
	/* width: 64rem; */
	height: 100%;
}
.subreddit-page-right {
	/* width: 31.2rem; */
	height: 100%;
	margin-left: 2.4rem;
	margin-top: 1.5rem;
}
.first-time-subreddit {
	max-width: 41rem;
}
.text {
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.8rem;
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 1.6rem;
	margin: 1.6rem -1.6rem -1.6rem;
	border-bottom-right-radius: 0.4rem;
	display: flex;
	justify-content: flex-end;
	box-sizing: border-box;
}
.button-white-2 {
	border: var(--line-5);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
	margin-left: 0.8rem;
}
.button-blue-2 {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
	border: none;
	padding: 0.4rem 1.6rem;
	margin-left: 0.8rem;
}
@media only screen and (max-width: 800px) {
	.subreddit-page {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
	}
	.subreddit-page-right {
		width: 75%;
	}
	.subreddit-page-left {
		width: 75%;
	}
}
@media only screen and (max-width: 500px) {
	.subreddit-page {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
	}
	.subreddit-page-right {
		width: 100%;
		margin-left: 0;
		margin-right: 0;
	}
	.subreddit-page-left {
		width: 100%;
		margin-left: 0;
		margin-right: 0;
	}
}
#pinned-post-comp {
	margin-top: 1.2rem;
}
.posts {
	margin-bottom: 1rem;
	margin-top: 1rem;
}
</style>
