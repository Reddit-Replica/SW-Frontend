<template>
	<div style="position: relative">
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 53%; top: 188px"
			></the-spinner>
		</div>
		<empty-page
			:page-title="`hmm...looks like you haven't recently viewed anything`"
			v-else-if="
				!getUserPostData.postData ||
				!getUserPostData.postData.children ||
				getUserPostData.postData.children.length == 0
			"
		></empty-page>
		<div v-else>
			<base-user-post
				v-for="(postData, index) in getUserPostData.postData.children"
				:key="index"
				:post-data="postData"
			></base-user-post>
		</div>
	</div>
</template>

<script>
import BaseUserPost from '../../../components/UserComponents/BaseUserComponents/BaseUserPost.vue';
import EmptyPage from '../../../components/UserComponents/BaseUserComponents/PostComponents/EmptyPage.vue';
export default {
	components: {
		BaseUserPost,
		EmptyPage,
	},
	data() {
		return {
			counter: 0,
			upClicked: false,
			downClicked: false,
			loading: false,
		};
	},

	async created() {
		let sortType;
		if (!this.$route.query.sort || this.$route.query.sort == 'new') {
			sortType = 'new';
		} else {
			sortType = this.$route.query.sort;
		}

		this.loading = true;
		const reqStatus = await this.RequestUserPostData(sortType);
		this.requestStatusHandler(reqStatus, `user ${sortType} posts`);
		this.loading = false;
		// if (requestStatus == 200) console.log('Successfully fetched data');
		// else if (requestStatus == 404) console.log('not found');
		// else if (requestStatus == 500) console.log(' internal server error');
	},
	computed: {
		getUserPostData() {
			// console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['userposts/getUserPostData'];
		},
	},
	methods: {
		requestStatusHandler(requestStatus, st) {
			if (requestStatus == 200) console.log(`Successfully fetched ${st} data`);
			else if (requestStatus == 404) console.log(`Not found  ${st} `);
			else if (requestStatus == 500) console.log(' internal server error');
			else if (requestStatus == 401) console.log(' access denied');
			else console.log(`Error !!!!  ${st} !!!!!`);
		},
		async sortBarClicked(sortType) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/submitted`,
				query: { sort: `${sortType}` },
			});
			console.log(sortType);
			this.loading = true;
			const reqStatus = await this.RequestUserPostData(sortType);
			this.requestStatusHandler(reqStatus, `user ${sortType} posts`);
			this.loading = false;
		},
		async RequestUserPostData(sortType) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserHistoryPostData',
					{
						baseurl: this.$baseurl,
						userName: this.$route.params.userName,
						params: {
							sort: `${sortType}`,
							time: 'all',
							before: '',
							after: '',
							limit: '25',
						},
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
#best-sort {
	display: none !important;
}
.sort-post-content {
	margin-top: 2px !important;
	margin-bottom: 16px;
}
</style>
