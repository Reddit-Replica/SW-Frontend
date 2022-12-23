<template>
	<pinned-posts
		v-if="
			getUserPinnedPostData.pinnedPostData != null &&
			getUserPinnedPostData.pinnedPostData.length != null &&
			getUserPinnedPostData.pinnedPostData.length != 0
		"
		:pinned-posts-data="getUserPinnedPostData.pinnedPostData"
		:state="state"
	></pinned-posts>
	<div style="margin-bottom: 16px">
		<sortposts-bar
			initial-title="new"
			@title="sortBarClicked"
			@time="sortBarClickedTime"
		></sortposts-bar>
	</div>
	<empty-page
		:page-title="`hmm...looks like you haven't recently viewed anything`"
		v-if="
			!getUserOverviewData.overviewData ||
			!getUserOverviewData.overviewData.children ||
			getUserOverviewData.overviewData.children.length == 0
		"
	></empty-page>
	<div
		v-else
		style="margin-bottom: 10px"
		v-for="(overviewPostData, index) in getUserOverviewData.overviewData
			.children"
		:key="index"
	>
		<comments-overview-page
			v-if="
				overviewPostData != null &&
				overviewPostData.type == 'summaryPost' &&
				!(overviewPostData.data.comments.length == 0)
			"
			:key="overviewPostData.id"
			:comment-data="overviewPostData"
			:id="overviewPostData.id"
			:state="state"
			type="summarypost"
		>
		</comments-overview-page>
		<div v-else-if="overviewPostData != null">
			<overview-post
				:key="index"
				:post-data="{
					data: overviewPostData.data.post,
					id: overviewPostData.id,
				}"
				:state="state"
				:page="'overview'"
				@emit-popup="emitPopup"
			></overview-post>

			<comments-overview-page
				:key="overviewPostData.id"
				v-if="!(overviewPostData.data.comments.length == 0)"
				:comment-data="overviewPostData"
				:id="overviewPostData.id"
				:state="state"
				type="fullpost"
				@emit-popup="emitPopup"
			>
			</comments-overview-page>
		</div>
	</div>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import PinnedPosts from '../../../components/UserComponents/BaseUserComponents/PinnedPosts.vue';
import CommentsOverviewPage from '../../../components/UserComponents/BaseUserComponents/CommentsComponents/CommentsOverviewPage.vue';
import OverviewPost from '../../../components/UserComponents/BaseUserComponents/OverviewPost.vue';
import EmptyPage from '@/components/UserComponents/BaseUserComponents/PostComponents/EmptyPage.vue';
export default {
	components: {
		SortpostsBar,
		PinnedPosts,
		CommentsOverviewPage,
		OverviewPost,
		EmptyPage,
	},
	props: {
		// @vuese
		// state to know you authenticated or not
		state: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			loading: false,
			lastAfterFetch: '',
			busyRequestMore: false,
			MoreFetch: true,
		};
	},
	mounted() {
		console.log('in overview', this.state);
		// this.scroll();
	},
	/**
	 * @vuese
	 * at un mounting we remove scroll event
	 * @arg no arg
	 */
	unmounted() {
		window.removeEventListener('scroll', this.scroll);
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
		// if (!this.$route.query.sort || this.$route.query.sort == 'new') {
		// 	sortType = 'new';
		// } else {
		// 	sortType = this.$route.query.sort;
		// }
		// if (sortType == 'top') {
		// 	if (!this.$route.query.t || this.$route.query.t == 'new') {
		// 		t = 'all';
		// 	} else {
		// 		t = this.$route.query.t;
		// 	}
		// }
		this.loading = true;
		let reqStatus = -1;
		try {
			reqStatus = await this.RequestUserOverviewData(sortType, t);
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
		 * get user pinned post data from the store
		 * @arg no arg
		 */
		getUserPinnedPostData() {
			// console.log(this.$store.getters['userposts/getUserPinnedData']);
			return this.$store.getters['userposts/getUserPinnedPostData'];
		},
		/**
		 * @vuese
		 * get user overview post data from the store
		 * @arg no arg
		 */
		getUserOverviewData() {
			// console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['userposts/getUserOverviewData'];
		},
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
				console.log('bottom1');
				let sortType, t;
				sortType = this.routeSortTypeAndTime().sortType;
				t = this.routeSortTypeAndTime().t;
				this.busyRequestMore = true;
				await this.RequestMoreUserOverviewData(sortType, t);
				if (this.getUserOverviewData.overviewData.after == '')
					this.MoreFetch = false;
				this.busyRequestMore = false;
				console.log('bottom2');
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
		async sortBarClicked(sortType, t) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/`,
				query: { sort: `${sortType}`, time: t },
			});
			console.log(sortType);
			this.loading = true;
			const reqStatus = await this.RequestUserOverviewData(sortType, 'all');
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
			console.log(t);
			this.loading = true;
			const reqStatus = await this.RequestUserOverviewData('top', t);
			this.requestStatusHandler(reqStatus, `user ${t} posts`);
			this.loading = false;
			console.log('f', t);
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
		 * request pinned posts from the store
		 * @arg no arg
		 */
		async RequestUserPinnedPostData() {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserPinnedPostData',
					{
						baseurl: this.$baseurl,
						body: {
							username: this.$route.params.userName,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log('req', requestStatus);
			return requestStatus;
		},
		/**
		 * @vuese
		 * request overview posts from the store
		 * @arg no arg
		 */
		async RequestUserOverviewData(sortType, t = 'all') {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserOverviewData',
					{
						baseurl: this.$baseurl,
						userName: this.$route.params.userName,
						params: {
							sort: `${sortType}`,
							time: `${t}`,
							before: '',
							after: '',
							limit: 10,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
				console.log('req', this.error);
			}
			console.log('req', requestStatus);
			// if(requestStatus == 200)
			// {
			// 	this.lastAfterFetch = this.getUserOverviewData.overviewData.after
			// }
			return requestStatus;
		},
		/**
		 * @vuese
		 * request more more overview posts in case you at the bottom of the page
		 * @arg no arg
		 */
		async RequestMoreUserOverviewData(sortType, t) {
			let requestStatus = -1;
			if (this.getUserOverviewData.overviewData.after != 'noMore') {
				try {
					requestStatus = await this.$store.dispatch(
						'userposts/getUserMoreOverviewData',
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
				console.log('req', requestStatus);
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
