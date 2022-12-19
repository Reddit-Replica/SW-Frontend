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
		state: {
			type: String,
			required: true,
		},
	},
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
		console.log(this.getUserCommentsData);

		this.scroll();
		this.$nextTick(() => {
			window.addEventListener('scroll', this.scroll);
		});
	},
	unmounted() {
		window.removeEventListener('scroll', this.scroll);
	},
	emits: ['emitPopup'],
	computed: {
		getUserCommentsData() {
			// console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserCommentsData'];
		},
	},
	methods: {
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
				await this.RequestUserMoreCommentsData(sortType, t);
				if (this.getUserCommentsData.commentsData.after == '')
					this.MoreFetch = false;
				this.busyRequestMore = false;
				console.log('bottom2');
			}
		},
		emitPopup(id, message) {
			this.$emit('emitPopup', id, message);
		},
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
		async sortBarClickedTime(t) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/comments`,
				query: { sort: `top`, time: t },
			});
			console.log(t);
			this.loading = true;
			const reqStatus = await this.RequestUserCommentsData('top', t);
			this.requestStatusHandler(reqStatus, `user ${t} posts`);
			this.loading = false;
			console.log('f', t);
		},
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
			console.log('req', requestStatus);
			this.loading = false;
			return requestStatus;
		},
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
