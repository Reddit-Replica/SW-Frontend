<template>
	<div style="position: relative">
		<sortposts-bar @title="sortBarClicked"></sortposts-bar>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 53%; top: 188px"
			></the-spinner>
		</div>
		<empty-page
			:page-title="`hmm... u/${this.$route.params.userName} hasn't commented on anything`"
			v-else-if="
				errorLoading ||
				!getUserCommentsData.commentsData ||
				!getUserCommentsData.commentsData.children ||
				getUserCommentsData.commentsData.children.length == 0
			"
		></empty-page>
		<div v-else>
			<base-user-comments
				v-for="commentData in getUserCommentsData.commentsData.children"
				:key="commentData.id"
				:comment-data="commentData"
				:id="commentData.id"
			></base-user-comments>
		</div>
	</div>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import BaseUserComments from '../../../components/UserComponents/BaseUserComponents/BaseUserComents.vue';
import EmptyPage from '../../../components/UserComponents/BaseUserComponents/PostComponents/EmptyPage.vue';
export default {
	components: {
		SortpostsBar,
		BaseUserComments,
		EmptyPage,
	},
	data() {
		return {
			loading: false,
			errorLoading: false,
		};
	},
	async created() {
		let sortType;
		if (!this.$route.query.sort || this.$route.query.sort == 'new') {
			sortType = 'new';
		} else {
			sortType = this.$route.query.sort;
		}
		// this.loading = true;
		// const requestStatus = await this.RequestUserCommentsData(sortType);
		// this.requestStatusHandler(requestStatus, `user ${sortType} comments`);
		// this.loading = false;
		this.loading = true;
		let reqStatus = -1;
		try {
			reqStatus = await this.RequestUserCommentsData(sortType);
		} catch (error) {
			console.log(error);
		}
		this.requestStatusHandler(reqStatus, `user ${sortType} comments`);
		this.loading = false;
		// if (requestStatus == 200) console.log('Successfully fetched data');
		// else if (requestStatus == 404) console.log('not found');
		// else if (requestStatus == 500) console.log(' internal server error');
	},
	computed: {
		getUserCommentsData() {
			// console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserCommentsData'];
		},
	},
	methods: {
		requestStatusHandler(requestStatus, st) {
			this.loading = false;
			if (requestStatus == 200) console.log(`Successfully fetched ${st} data`);
			else if (requestStatus == 404) {
				this.errorLoading = true;
				console.log(`Not found  ${st} `);
			} else if (requestStatus == 500) {
				this.errorLoading = true;
				console.log(' internal server error');
			} else if (requestStatus == 401) {
				this.errorLoading = true;
				console.log(' access denied');
			} else {
				this.errorLoading = true;
				console.log(`Error !!!!  ${st} !!!!!`);
			}
		},
		async sortBarClicked(sortType) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/comments`,
				query: { sort: `${sortType}` },
			});
			console.log(sortType);
			this.loading = true;
			const reqStatus = await this.RequestUserCommentsData(sortType);
			this.requestStatusHandler(reqStatus, `user ${sortType} comments`);
			this.loading = false;
		},
		async RequestUserCommentsData(sortType) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch('user/getUserCommentsData', {
					baseurl: this.$baseurl,
					username: this.$route.params.userName,
					params: {
						sort: `${sortType}`,
						time: 'all',
						before: '',
						after: '',
						limit: '25',
					},
				});
			} catch (error) {
				this.loading = false;
				this.error = error.message || 'Something went wrong';
			}
			console.log('req', requestStatus);
			this.loading = false;
			return requestStatus;
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
