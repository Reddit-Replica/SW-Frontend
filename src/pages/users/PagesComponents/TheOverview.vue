<template>
	<pinned-posts
		:pinned-posts-data="getUserPinnedPostData.pinnedPostData"
	></pinned-posts>
	<sortposts-bar @title="sortBarClicked"></sortposts-bar>
	<comments-overview-page></comments-overview-page>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import PinnedPosts from '../../../components/UserComponents/BaseUserComponents/PinnedPosts.vue';
import CommentsOverviewPage from '@/components/UserComponents/BaseUserComponents/CommentsComponents/CommentsOverviewPage.vue';
// import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		SortpostsBar,
		PinnedPosts,
		CommentsOverviewPage,
		// BasePost,
	},
	data() {
		return {};
	},
	async created() {
		const requestStatus = await this.RequestUserPinnedPostData();
		this.requestStatusHandler(requestStatus, 'pinned posts');
		console.log(this.$store.getters['userposts/getUserPinnedPostData']);
	},
	computed: {
		getUserPinnedPostData() {
			// console.log(this.$store.getters['userposts/getUserPinnedData']);
			return this.$store.getters['userposts/getUserPinnedPostData'];
		},
	},
	methods: {
		sortBarClicked(sortType) {
			console.log(sortType);
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
	},
};
</script>
<style scoped>
.sort-post-content {
	margin-top: 2px !important;
}
</style>
