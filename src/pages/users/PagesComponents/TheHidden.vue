<template>
	<div style="position: relative">
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 53%; top: 188px"
			></the-spinner>
		</div>
		<empty-page
			:page-title="`hmm... looks like you haven't hidden anything yet`"
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
				:page="'hidden'"
				:state="state"
				@emit-popup="emitPopup"
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
			busyRequestMore: false,
			MoreFetch: true,
		};
	},
	/**
	 * @vuese
	 * at creation we set an scroll event , and get the query from the route ti know which sort
	 * you want at make the request to get the hidden posts data
	 * @arg no arg
	 */
	async created() {
		let sortType, t;
		sortType = this.routeSortTypeAndTime().sortType;
		t = this.routeSortTypeAndTime().t;

		this.loading = true;
		const reqStatus = await this.RequestUserPostData(sortType, t);
		this.requestStatusHandler(reqStatus, `user ${sortType} posts`);
		this.loading = false;
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
		 * get user post hidden data from the store
		 * @arg no arg
		 */
		getUserPostData() {
			// //console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['userposts/getUserPostData'];
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
				await this.RequestMoreUserPostData(sortType, t);
				if (this.getUserPostData.postData.after == '') this.MoreFetch = false;
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
		// requestStatusHandler(requestStatus, st) {
		// 	if (requestStatus == 200) //console.log(`Successfully fetched ${st} data`);
		// 	else if (requestStatus == 404) //console.log(`Not found  ${st} `);
		// 	else if (requestStatus == 500) //console.log(' internal server error');
		// 	else if (requestStatus == 401) //console.log(' access denied');
		// 	else //console.log(`Error !!!!  ${st} !!!!!`);
		// },
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
			const reqStatus = await this.RequestUserPostData(sortType);
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
				path: `/user/${this.$route.params.userName}/submitted`,
				query: { sort: `top`, time: t },
			});
			//console.log(t);
			this.loading = true;
			const reqStatus = await this.RequestUserPostData('top', t);
			this.requestStatusHandler(reqStatus, `user ${t} posts`);
			this.loading = false;
			//console.log('f', t);
		},
		/**
		 * @vuese
		 * request the hidden posts from the store
		 * @arg no arg
		 */
		async RequestUserPostData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserHiddenPostData',
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
		 * request more hidden posts in case you at the bottom of the page
		 * @arg no arg
		 */
		async RequestMoreUserPostData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserMoreHiddenPostData',
					{
						baseurl: this.$baseurl,
						userName: this.$route.params.userName,
						params: {
							sort: `${sortType}`,
							time: `${t}`,
							before: '',
							after: `${this.getUserPostData.postData.after}`,
							limit: 10,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			//console.log('req', requestStatus);
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
