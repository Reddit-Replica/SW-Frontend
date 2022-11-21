<template>
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<subreddit-top
			:subreddit-name="subredditName"
			:subreddit-image-url="subreddit.picture"
			:joined="subreddit.isMember"
		></subreddit-top>
		<div class="subreddit-page">
			<div class="subreddit-page-left">
				<createpost-bar></createpost-bar>
				<!-- <sortposts-bar></sortposts-bar> -->
				<sort-bar-subreddit
					:subreddit-name="subredditName"
				></sort-bar-subreddit>
				<grow-community></grow-community>
				<community-post></community-post>
				<base-post
					v-for="post in posts"
					:key="post.id"
					:post="post"
				></base-post>
			</div>
			<div class="subreddit-page-right">
				<about-community-bar
					:subreddit-name="subredditName"
					:topics="topics"
					:members-count="subreddit.members"
					:online-members-count="subreddit.online"
					:community-date="subreddit.dateOfCreation"
					:community-type="subreddit.type"
					:community-description-prop="subreddit.description"
					:community-topic-prop="subreddit.mainTopic"
				></about-community-bar>
				<moderators-bar :moderators="subreddit.moderators"></moderators-bar>
				<backtotop-button id="back-to-top-subreddit"></backtotop-button>
			</div>
		</div>
		<div id="first-time-subreddit">
			<base-dialog
				:show="toBeShown"
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
import SortBarSubreddit from '../../components/bars/SortBarSubreddit.vue';
import AboutCommunityBar from '../../components/CommunityComponents/AboutCommunityBar.vue';
import GrowCommunity from '../../components/CommunityComponents/GrowCommunity.vue';
import CommunityPost from '../../components/CommunityComponents/CommunityPost.vue';
import ModeratorsBar from '../../components/CommunityComponents/ModeratorsBar.vue';
import BacktotopButton from '../../components/BaseComponents/BacktotopButton.vue';
import BasePost from '../../components/BaseComponents/BasePost.vue';

export default {
	components: {
		SubredditTop,
		CreatepostBar,
		SortBarSubreddit,
		AboutCommunityBar,
		GrowCommunity,
		CommunityPost,
		ModeratorsBar,
		BacktotopButton,
		BasePost,
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
			topics: [
				// { id: 0, name: 'Art' },
				// { id: 1, name: 'Anime' },
				// { id: 2, name: 'Beauty' },
				// { id: 3, name: 'Cars' },
				// { id: 4, name: 'Fashion' },
				// { id: 5, name: 'Music' },
				// { id: 6, name: 'Sports' },
				// { id: 7, name: 'Travel' },
				'Art',
				'Anime',
				'Beauty',
				'Cars',
				'Fashion',
				'Music',
				'Sports',
				'Travel',
			],
			moderators: [
				{ id: 0, name: 'HodaGamal' },
				{ id: 1, name: 'AsmaaAdel' },
			],
			showFirstDialog: true,
			subreddit: {},
			posts: [],
		};
	},
	computed: {
		toBeShown() {
			return this.firstCreated && this.showFirstDialog;
		},
	},
	beforeMount() {
		let title = this.$route.params.title;
		if (title == null) title = 'hot';
		this.fetchSubredditPosts(title);
	},
	watch: {
		'$route.params.title': {
			handler: function () {
				this.fetchSubredditPosts(this.$route.params.title);
			},
		},
	},

	async created() {
		const accessToken = localStorage.getItem('accessToken');
		await this.$store.dispatch('community/getSubreddit', {
			subredditName: this.subredditName,
			baseurl: this.$baseurl,
			token: accessToken,
		});
		this.subreddit = this.$store.getters['community/getSubreddit'];
	},
	methods: {
		hideFirstDialog() {
			this.showFirstDialog = false;
		},
		createPost() {
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
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}

			this.posts = this.$store.getters['community/getPosts'];
		},
	},
};
</script>

<style scoped>
.subreddit-page {
	max-width: 100%;
	height: 100%;
	min-height: 2000px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	box-sizing: border-box;
	margin: 0 auto;
}
.subreddit-page-left {
	width: 64rem;
	height: 100%;
}
.subreddit-page-right {
	width: 31.2rem;
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
	padding: 16px;
	margin: 16px -16px -16px;
	border-bottom-right-radius: 4px;
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
@media only screen and (max-width: 850px) {
	.subreddit-page-right {
		display: none;
	}
}
</style>
