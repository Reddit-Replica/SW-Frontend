<template>
	<div style="position: relative">
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 53%; top: 188px"
			></the-spinner>
		</div>
		<empty-page
			:page-title="`hmm... looks like you haven't downvoted anything yet`"
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

		this.loading = true;
		const reqStatus = await this.RequestUserPostData(sortType, t);
		this.requestStatusHandler(reqStatus, `user ${sortType} posts`);
		this.loading = false;
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
		getUserPostData() {
			// console.log(this.$store.getters['userposts/getUserData']);
			return this.$store.getters['userposts/getUserPostData'];
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
				await this.RequestMoreUserPostData(sortType, t);
				if (this.getUserPostData.postData.after == '') this.MoreFetch = false;
				this.busyRequestMore = false;
				console.log('bottom2');
			}
		},
		emitPopup(id, message) {
			this.$emit('emitPopup', id, message);
		},
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
		async sortBarClickedTime(t) {
			this.$router.push({
				path: `/user/${this.$route.params.userName}/submitted`,
				query: { sort: `top`, time: t },
			});
			console.log(t);
			this.loading = true;
			const reqStatus = await this.RequestUserPostData('top', t);
			this.requestStatusHandler(reqStatus, `user ${t} posts`);
			this.loading = false;
			console.log('f', t);
		},
		async RequestUserPostData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserDownVotedPostData',
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
			console.log('req', requestStatus);
			return requestStatus;
		},
		async RequestMoreUserPostData(sortType, t) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserMoreDownVotedPostData',
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
