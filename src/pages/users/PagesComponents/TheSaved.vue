<template>
	<div style="position: relative">
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 53%; top: 188px"
			></the-spinner>
		</div>
		<empty-page
			:page-title="`hmm... looks like you haven't saved anything yet`"
			v-else-if="
				!getUserSavedData.savedData ||
				!getUserSavedData.savedData.children ||
				getUserSavedData.savedData.children.length == 0
			"
		></empty-page>
		<div
			v-else
			v-for="(savedPostData, index) in getUserSavedData.savedData.children"
			:key="savedPostData.id"
		>
			<comments-overview-page
				v-if="
					savedPostData.type == 'comment' &&
					savedPostData.data.comments.length != 0
				"
				:key="savedPostData.id"
				:comment-data="savedPostData"
				:id="savedPostData.id"
				:state="state"
				type="summarypost"
			>
			</comments-overview-page>
			<base-user-post
				v-else-if="savedPostData.type == 'post'"
				:key="index"
				:post-data="{ data: savedPostData.data.post, id: savedPostData.id }"
				:state="state"
				:page="'overview'"
			></base-user-post>
			<div v-else-if="savedPostData.type == 'postAndComment'">
				<base-user-post
					:key="index"
					:post-data="{ data: savedPostData.data.post, id: savedPostData.id }"
					:state="state"
					:page="'overview'"
				></base-user-post>
				<comments-overview-page
					:key="savedPostData.id"
					:comment-data="savedPostData"
					:id="savedPostData.id"
					:state="state"
					type="fullpost"
				>
				</comments-overview-page>
			</div>
		</div>
	</div>
</template>

<script>
import CommentsOverviewPage from '../../../components/UserComponents/BaseUserComponents/CommentsComponents/CommentsOverviewPage.vue';
import BaseUserPost from '../../../components/UserComponents/BaseUserComponents/BaseUserPost.vue';
// import EmptyPage from '../../../components/UserComponents/BaseUserComponents/PostComponents/EmptyPage.vue';

// import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		CommentsOverviewPage,
		BaseUserPost,
		// EmptyPage,
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
		console.log('in saved', this.state);
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
			reqStatus = await this.RequestUserSavedData(sortType);
		} catch (error) {
			console.log(error);
			this.loading = false;
		}
		this.loading = false;
		this.requestStatusHandler(reqStatus, `user ${sortType} ovverview data`);

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
		getUserSavedData() {
			// console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['userposts/getUserSavedData'];
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
			const reqStatus = await this.RequestUserSavedData(sortType);
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
		async RequestUserSavedData(sortType) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserSavedData',
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
.sort-post-content {
	margin-top: 2px !important;
}
</style>
