<template>
	<div style="position: relative">
		<sortposts-bar
			initial-title="new"
			@title="sortBarClicked"
			@time="sortBarClickedTime"
		></sortposts-bar>
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
				:state="state"
				@emit-popup="emitPopup"
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
			busyRequestMore: false,
			MoreFetch: true,
		};
	},
	props: {
		// @vuese
		// sate to know you authenticated or not
		state: {
			type: String,
			required: true,
		},
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
		// this.loading = true;
		// const requestStatus = await this.RequestUserCommentsData(sortType);
		// this.requestStatusHandler(requestStatus, `user ${sortType} comments`);
		// this.loading = false;
		this.loading = true;
		let reqStatus = -1;
		try {
			reqStatus = await this.RequestUserCommentsData(sortType, t);
		} catch (error) {
			console.log(error);
		}
		this.requestStatusHandler(reqStatus, `user ${sortType} comments`);
		this.loading = false;
		//console.log(this.getUserCommentsData);

		this.scroll();
		this.$nextTick(() => {
			window.addEventListener('scroll', this.scroll);
		});
	},
	/**
	 * @vuese
	 * at un mounting we remove scroll event
	 * @arg no arg
	 */
	unmounted() {
		window.removeEventListener('scroll', this.scroll);
	},
	// @vuese
	// emits popup action to show it
	emits: ['emitPopup'],
	computed: {
		/**
		 * @vuese
		 * get user comment data from the store
		 * @arg no arg
		 */
		getUserCommentsData() {
			// //console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserCommentsData'];
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
				//console.log('bottom1');
				let sortType, t;
				sortType = this.routeSortTypeAndTime().sortType;
				t = this.routeSortTypeAndTime().t;
				this.busyRequestMore = true;
				await this.RequestUserMoreCommentsData(sortType, t);
				if (this.getUserCommentsData.commentsData.after == '')
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
		 * handel the response from the request
		 * @arg no arg
		 */
		requestStatusHandler(requestStatus, st) {
			this.loading = false;
			if (requestStatus == 200) console.log(`Successfully fetched ${st} data`);
			else if (requestStatus == 404) {
				this.errorLoading = true;
				//console.log(`Not found  ${st} `);
			} else if (requestStatus == 500) {
				this.errorLoading = true;
				//console.log(' internal server error');
			} else if (requestStatus == 401) {
				this.errorLoading = true;
				//console.log(' access denied');
			} else {
				this.errorLoading = true;
				//console.log(`Error !!!!  ${st} !!!!!`);
			}
		},
		/**
		 * @vuese
		 * handel  when you clicked on the sort bar
		 * @arg no arg
		 */
		async sortBarClicked(sortType) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/comments`,
				query: { sort: `${sortType}` },
			});
			//console.log(sortType);
			this.loading = true;
			const reqStatus = await this.RequestUserCommentsData(sortType);
			this.requestStatusHandler(reqStatus, `user ${sortType} comments`);
			this.loading = false;
		},
		/**
		 * @vuese
		 * handel a click of time when click on the sort bar
		 * @arg no arg
		 */
		async sortBarClickedTime(t) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/comments`,
				query: { sort: `top`, time: t },
			});
			//console.log(t);
			this.loading = true;
			const reqStatus = await this.RequestUserCommentsData('top', t);
			this.requestStatusHandler(reqStatus, `user ${t} posts`);
			this.loading = false;
			//console.log('f', t);
		},
		/**
		 * @vuese
		 * request comment data from the store
		 * @arg no arg
		 */
		async RequestUserCommentsData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch('user/getUserCommentsData', {
					baseurl: this.$baseurl,
					username: this.$route.params.userName,
					params: {
						sort: `${sortType}`,
						time: `${t}`,
						before: '',
						after: ``,
						limit: 10,
					},
				});
			} catch (error) {
				this.loading = false;
				this.error = error.message || 'Something went wrong';
			}
			//console.log('req', requestStatus);
			this.loading = false;
			return requestStatus;
		},
		/**
		 * @vuese
		 * request more comment data in case you at the bottom of the page
		 * @arg no arg
		 */
		async RequestUserMoreCommentsData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'user/getUserMoreCommentsData',
					{
						baseurl: this.$baseurl,
						username: this.$route.params.userName,
						params: {
							sort: `${sortType}`,
							time: `${t}`,
							before: '',
							after: `${this.getUserCommentsData.commentsData.after}`,
							limit: 10,
						},
					}
				);
			} catch (error) {
				this.loading = false;
				this.error = error.message || 'Something went wrong';
			}
			//console.log('req', requestStatus);
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
