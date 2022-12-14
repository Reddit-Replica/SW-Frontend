<template>
	<pinned-posts
		:pinned-posts-data="getUserPinnedPostData.pinnedPostData"
	></pinned-posts>
	<sortposts-bar @title="sortBarClicked"></sortposts-bar>
	<div
		v-for="overviewPostData in getUserOverviewData.overviewData.children"
		:key="overviewPostData.id"
	>
		<comments-overview-page
			v-if="overviewPostData.type == 'summaryPost'"
			:key="overviewPostData.id"
			:comment-data="overviewPostData"
			:id="overviewPostData.id"
			:state="state"
		>
		</comments-overview-page>
	</div>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import PinnedPosts from '../../../components/UserComponents/BaseUserComponents/PinnedPosts.vue';
import CommentsOverviewPage from '../../../components/UserComponents/BaseUserComponents/CommentsComponents/CommentsOverviewPage.vue';
// import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		SortpostsBar,
		PinnedPosts,
		CommentsOverviewPage,
		// BasePost,
	},
	props: {
		state: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			loading: false,
		};
	},
	mounted() {
		console.log('in overview', this.state);
	},
	async created() {
		let sortType;
		if (!this.$route.query.sort || this.$route.query.sort == 'new') {
			sortType = 'new';
		} else {
			sortType = this.$route.query.sort;
		}
		this.loading = true;
		let reqStatus = -1;
		try {
			reqStatus = await this.RequestUserOverviewData(sortType);
		} catch (error) {
			console.log(error);
		}
		this.requestStatusHandler(reqStatus, `user ${sortType} ovverview data`);
		this.loading = false;

		const requestStatus = await this.RequestUserPinnedPostData();
		this.requestStatusHandler(requestStatus, 'pinned posts');
		console.log(this.$store.getters['userposts/getUserPinnedPostData']);
		console.log(this.getUserOverviewData);
		// let sortType;
		// if (!this.$route.query.sort || this.$route.query.sort == 'new') {
		// 	sortType = 'new';
		// } else {
		// 	sortType = this.$route.query.sort;
		// }
		// this.loading = true;
		// let reqStatus = -1;
		// try {
		// 	reqStatus = await this.RequestUserOverviewData(sortType);
		// } catch (error) {
		// 	console.log(error);
		// }
		// this.requestStatusHandler(reqStatus, `user ${sortType} ovverview data`);
		// this.loading = false;
		// // if (requestStatus == 200) console.log('Successfully fetched data');
		// // else if (requestStatus == 404) console.log('not found');
		// // else if (requestStatus == 500) console.log(' internal server error');
	},
	computed: {
		getUserPinnedPostData() {
			// console.log(this.$store.getters['userposts/getUserPinnedData']);
			return this.$store.getters['userposts/getUserPinnedPostData'];
		},
		getUserOverviewData() {
			// console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['user/getUserOverviewData'];
		},
	},
	methods: {
		async sortBarClicked(sortType) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/submitted`,
				query: { sort: `${sortType}` },
			});
			console.log(sortType);
			this.loading = true;
			const reqStatus = await this.RequestUserOverviewData(sortType);
			this.requestStatusHandler(reqStatus, `user ${sortType} posts`);
			this.loading = false;
		},
		requestStatusHandler(requestStatus, st) {
			if (requestStatus == 200) console.log(`Successfully fetched ${st} data`);
			else if (requestStatus == 404) console.log(`Not found  ${st} `);
			else if (requestStatus == 500) console.log(' internal server error');
			else if (requestStatus == 401) console.log(' access denied');
			else console.log(`Error !!!!  ${st} !!!!!`);
		},
		async RequestUserPinnedPostData() {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserPinnedPostData',
					{
						baseurl: this.$baseurl,
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log('req', requestStatus);
			return requestStatus;
		},
		async RequestUserOverviewData(sortType) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch('user/getUserOverviewData', {
					baseurl: this.$baseurl,
					userName: this.$route.params.userName,
					params: {
						sort: `${sortType}`,
						time: 'all',
						before: '',
						after: '',
						limit: '25',
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log('req', requestStatus);
			return requestStatus;
		},
	},
};
</script>
<style scoped>
.sort-post-content {
	margin-top: 2px !important;
}
</style>
