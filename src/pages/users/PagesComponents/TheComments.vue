<template>
	<sortposts-bar @title="sortBarClicked"></sortposts-bar>
	<base-user-comments
		v-for="commentData in getUserCommentsData.commentsData.children"
		:key="commentData.id"
		:comment-data="commentData.data"
		:id="commentData.id"
	></base-user-comments>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import BaseUserComments from '../../../components/UserComponents/BaseUserComponents/BaseUserComents.vue';
export default {
	components: {
		SortpostsBar,
		BaseUserComments,
	},

	async created() {
		this.loading = true;
		const requestStatus = await this.RequestUserCommentsData();
		this.loading = false;
		if (requestStatus == 200) console.log('Successfully fetched data');
		else if (requestStatus == 404) console.log('not found');
		else if (requestStatus == 500) console.log(' internal server error');
	},
	computed: {
		getUserCommentsData() {
			// console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserCommentsData'];
		},
	},
	methods: {
		sortBarClicked(sortType) {
			console.log(sortType);
			this.RequestUserPostData(sortType);
		},
		async RequestUserCommentsData(sortType) {
			try {
				await this.$store.dispatch('user/getUserCommentsData', {
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
		},
	},
};
</script>

<style scoped>
.sort-post-content {
	margin-top: 2px !important;
	margin-bottom: 16px;
}
</style>
