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
			<div
				style="margin-bottom: 4px"
				v-if="
					savedPostData.type == 'comment' &&
					savedPostData.data.comments.length != 0
				"
			>
				<comments-overview-page
					:key="savedPostData.id"
					:comment-data="savedPostData"
					:id="savedPostData.id"
					:state="state"
					type="summarypost"
					@emit-popup="emitPopup"
				>
				</comments-overview-page>
			</div>
			<base-user-post
				v-else-if="savedPostData.type == 'post'"
				:key="index"
				:post-data="{ data: savedPostData.data.post, id: savedPostData.id }"
				:state="state"
				:page="'overview'"
				@emit-popup="emitPopup"
			></base-user-post>
			<div
				style="margin-bottom: 4px"
				v-else-if="savedPostData.type == 'postAndComment'"
			>
				<base-user-post
					:key="index"
					:post-data="{ data: savedPostData.data.post, id: savedPostData.id }"
					:state="state"
					:page="'overview'"
					@emit-popup="emitPopup"
				></base-user-post>
				<comments-overview-page
					:key="savedPostData.id"
					:comment-data="savedPostData"
					:id="savedPostData.id"
					:state="state"
					type="fullpost"
					@emit-popup="emitPopup"
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
import EmptyPage from '@/components/UserComponents/BaseUserComponents/PostComponents/EmptyPage.vue';

// import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		CommentsOverviewPage,
		BaseUserPost,
		EmptyPage,
		// EmptyPage,
		// BasePost,
	},
	props: {
		// @vuese
		// sate to know you authenticated or not
		state: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			loading: false,
			busyRequestMore: false,
			MoreFetch: true,
		};
	},
	mounted() {
		//console.log('in saved', this.state);
	},
	/**
	 * @vuese
	 * at creation we set an scroll event , and get the query from the route ti know which sort
	 * you want at make the request to get the downvoted posts data
	 * @arg no arg
	 */
	async created() {
		let sortType, t;
		sortType = this.routeSortTypeAndTime().sortType;
		t = this.routeSortTypeAndTime().t;
		this.loading = true;
		let reqStatus = -1;
		try {
			reqStatus = await this.RequestUserSavedData(sortType, t);
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
		// // if (requestStatus == 200) //console.log('Successfully fetched data');
		// // else if (requestStatus == 404) //console.log('not found');
		// // else if (requestStatus == 500) //console.log(' internal server error');
		this.scroll();
		this.$nextTick(() => {
			window.addEventListener('scroll', this.scroll);
		});
	},
	// @vuese
	// emits popup action to show it
	emits: ['emitPopup'],
	computed: {
		/**
		 * @vuese
		 * get user saved post data from the store
		 * @arg no arg
		 */
		getUserSavedData() {
			// //console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['userposts/getUserSavedData'];
		},
	},
	/**
	 * @vuese
	 * at un mounting we remove scroll event
	 * @arg no arg
	 */
	unmounted() {
		window.removeEventListener('scroll', this.scroll);
	},
	methods: {
		/**
		 * @vuese
		 * get the query from the route
		 * @arg no arg
		 */
		routeSortTypeAndTime() {
			let sortType, t;
			if (!this.$route.query.sort || this.$route.query.sort == 'new') {
				sortType = 'new';
			} else {
				sortType = this.$route.query.sort;
			}
			if (sortType == 'top') {
				if (!this.$route.query.t || this.$route.query.t == 'new') {
					t = 'all';
				} else {
					t = this.$route.query.t;
				}
			}
			return { sortType, t };
		},
		/**
		 * @vuese
		 * fetch more contents when get at the bottom of the page
		 * @arg no arg
		 */
		async scroll() {
			if (
				window.innerHeight + window.scrollY >= document.body.offsetHeight &&
				!this.busyRequestMore &&
				this.MoreFetch
			) {
				//console.log('bottom1');
				let sortType, t;
				sortType = this.routeSortTypeAndTime().sortType;
				t = this.routeSortTypeAndTime().t;
				this.busyRequestMore = true;
				await this.RequestMoreUserSavedData(sortType, t);
				if (this.getUserOverviewData.overviewData.after == '')
					this.MoreFetch = false;
				this.busyRequestMore = false;
				//console.log('bottom2');
			}
		},
		/**
		 * @vuese
		 * emitts actions to show a popup
		 * @arg no arg
		 */
		emitPopup(id, message) {
			this.$emit('emitPopup', id, message);
		},
		/**
		 * @vuese
		 * handel  when you clicked on the sort bar
		 * @arg no arg
		 */
		async sortBarClicked(sortType) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/submitted`,
				query: { sort: `${sortType}` },
			});
			//console.log(sortType);
			this.loading = true;
			const reqStatus = await this.RequestUserSavedData(sortType);
			this.requestStatusHandler(reqStatus, `user ${sortType} posts`);
			this.loading = false;
		},
		/**
		 * @vuese
		 * handel a click of time when click on the sort bar
		 * @arg no arg
		 */
		async sortBarClickedTime(t) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/`,
				query: { sort: `top`, time: t },
			});
			//console.log(t);
			this.loading = true;
			const reqStatus = await this.RequestUserOverviewData('top', t);
			this.requestStatusHandler(reqStatus, `user ${t} posts`);
			this.loading = false;
			//console.log('f', t);
		},
		/**
		 * @vuese
		 * handel the response from the request
		 * @arg no arg
		 */
		requestStatusHandler(requestStatus, st) {
			if (requestStatus == 200) console.log(`Successfully fetched ${st} data`);
			else if (requestStatus == 404) console.log(`Not found  ${st} `);
			else if (requestStatus == 500) console.log(' internal server error');
			else if (requestStatus == 401) console.log(' access denied');
			else console.log(`Error !!!!  ${st} !!!!!`);
		},
		/**
		 * @vuese
		 * request saved posts from the store
		 * @arg no arg
		 */
		async RequestUserSavedData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserSavedData',
					{
						baseurl: this.$baseurl,
						userName: this.$route.params.userName,
						params: {
							sort: `${sortType}`,
							time: `${t}`,
							before: '',
							after: '',
							limit: 20,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			//console.log('req', requestStatus);
			return requestStatus;
		},
		/**
		 * @vuese
		 * request more saved posts in case you at the bottom of the page
		 * @arg no arg
		 */
		async RequestMoreUserSavedData(sortType, t) {
			let requestStatus = -1;
			if (this.getUserOverviewData.overviewData.after != 'noMore') {
				try {
					requestStatus = await this.$store.dispatch(
						'userposts/getUserMoreSavedData',
						{
							baseurl: this.$baseurl,
							userName: this.$route.params.userName,
							params: {
								sort: `${sortType}`,
								time: `${t}`,
								before: '',
								after: `${this.getUserOverviewData.overviewData.after}`,
								limit: 10,
							},
						}
					);
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
				//console.log('req', requestStatus);
				return requestStatus;
			}
		},
	},
};
</script>
<style scoped>
.sort-post-content {
	margin-top: 2px !important;
}
</style>
