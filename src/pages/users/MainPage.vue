<template>
	<!-- header component -->
	<div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 30%; top: 50%"
			></the-spinner>
		</div>
		<div :class="showPostComments ? 'back' : ''">
			<the-header :header-title="'Home'"></the-header>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6">
						<div class="left-col">
							<createpost-bar></createpost-bar>
							<sortposts-bar
								@title="changeRoute"
								@time="changeRouteQueryParam"
								:initial-title="$route.params.title"
							></sortposts-bar>
							<base-post
								v-for="post in posts"
								:key="post.id"
								:id="post.id"
								:post="post.data"
								@show-comments="showPostComments"
								@saved="savePost"
								@unsaved="unsavePost"
							></base-post>
						</div>
					</div>
					<div class="col-lg-3 margin">
						<div class="right-col">
							<div class="component" v-if="isLogedIn">
								<top-communities-bar></top-communities-bar>
							</div>
							<div class="component">
								<createpost-sidebar></createpost-sidebar>
							</div>
							<div class="component">
								<rightside-footer></rightside-footer>
							</div>
							<backtotop-button @click="test()"></backtotop-button>
						</div>
					</div>
				</div>
			</div>
			<div class="positioning">
				<SaveUnsavePopupMessage
					v-for="action in savedUnsavedPosts"
					:key="action"
					>{{ action }}</SaveUnsavePopupMessage
				>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import CreatepostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
import BasePost from '../../components/BaseComponents/BasePost.vue';
import TopCommunitiesBar from '../../components/TopCommunities/TopCommunitiesBar.vue';
import CreatepostSidebar from '../../components/BaseComponents/CreatepostSidebar.vue';
import RightsideFooter from '../../components/BaseComponents/RightsideFooter.vue';
import BacktotopButton from '../../components/BaseComponents/BacktotopButton.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	async beforeMount() {
		let title = this.$route.params.title;
		if (title == null) title = 'best';
		this.loading = true;
		await this.fetchPosts(title);
		this.loading = false;
	},
	watch: {
		'$route.params.title': {
			handler: function () {
				this.fetchPosts(this.$route.params.title);
			},
		},
	},
	components: {
		CreatepostBar,
		SortpostsBar,
		BasePost,
		TopCommunitiesBar,
		CreatepostSidebar,
		RightsideFooter,
		BacktotopButton,
		SaveUnsavePopupMessage,
		TheSpinner,
	},
	unmounted() {
		window.removeEventListener('scroll', this.scroll);
	},
	computed: {
		showPostComments() {
			if (this.$route.path.split('/')[3] == 'comments') return true;
			return false;
		},
		// @vuese
		// Get usename
		// @type string
		userName() {
			// return this.$store.getters.getUserName;
			return localStorage.getItem('userName');
		},
		savedUnsavedPosts() {
			return this.$store.getters['postCommentActions/getActions'];
		},
		isLogedIn() {
			if (localStorage.getItem('accessToken')) {
				return true;
			}
			return false;
		},
	},
	created() {
		document.title = 'Reddit - Dive into anything';
		this.scroll();
		this.$nextTick(() => {
			window.addEventListener('scroll', this.scroll);
		});
	},
	data() {
		return {
			colorGreyDark2: '#0099CC',
			posts: [],
			showComments: false,
			loading: false,
			afterMod: '',
			MoreFetch: false,
			busyRequestMore: false,
		};
	},
	methods: {
		async scroll() {
			if (
				window.innerHeight + window.scrollY >= document.body.offsetHeight &&
				!this.busyRequestMore &&
				this.MoreFetch
			) {
				console.log('bottom1');
				let title = this.$route.params.title;
				if (title == null) title = 'best';
				this.loading = true;
				await this.fetchPosts(title);
				this.loading = false;
				this.busyRequestMore = true;
				if (this.afterMod == '') this.MoreFetch = false;
				this.busyRequestMore = false;
				console.log('bottom2');
			}
		},
		test() {
			fetch(this.$baseurl + '/users')
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		// savePost(id) {
		// 	this.savedUnsavedPosts.push({
		// 		id: this.savedUnsavedPosts.length,
		// 		postid: id,
		// 		type: 'post',
		// 		state: 'saved',
		// 	});
		// 	setTimeout(() => {
		// 		this.savedUnsavedPosts.shift();
		// 	}, 10000);
		// },
		// unsavePost(id) {
		// 	this.savedUnsavedPosts.push({
		// 		id: this.savedUnsavedPosts.length,
		// 		postid: id,
		// 		type: 'post',
		// 		state: 'unsaved',
		// 	});
		// 	setTimeout(() => {
		// 		this.savedUnsavedPosts.shift();
		// 	}, 10000);
		// },
		async undoSaveUnsave(state, typeid) {
			if (state == 'saved') {
				this.unsavePost(typeid);
				this.$store.state.latestSavedUnsavedPost.id = typeid;
				this.$store.state.latestSavedUnsavedPost.saved = false;
				try {
					await this.$store.dispatch('postCommentActions/unsave', {
						baseurl: this.$baseurl,
						id: typeid,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.savePost(typeid);
				this.$store.state.latestSavedUnsavedPost.id = typeid;
				this.$store.state.latestSavedUnsavedPost.saved = true;
				try {
					await this.$store.dispatch('postCommentActions/save', {
						baseurl: this.$baseurl,
						id: typeid,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		async fetchPosts(title) {
			try {
				await this.$store.dispatch('listing/fetchPosts', {
					baseurl: this.$baseurl,
					title: title,
					afterMod: this.afterMod,
					query: this.$route.query.t,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.posts = this.$store.getters['listing/getPosts'].children;
			this.afterMod = this.$store.getters['listing/getPosts'].after;
			console.log(this.posts);
		},
		changeRoute(title) {
			this.$router.push('/main/' + title);
		},
		async changeRouteQueryParam(title) {
			console.log(title);
			await this.$router.push({ path: '/main/top', query: { t: title } });
			this.fetchPosts('top');
		},
	},
};
</script>

<style scoped>
/* .wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
} */
.left-col {
	margin-top: 6.5rem;
}
.positioning {
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.back {
	position: fixed;
	left: 0;
	right: 0;
	background-color: var(--color-grey-light-13);
}
.right-col {
	margin: 1.2rem;
	margin-top: 1.5rem;
	margin-left: 8rem;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	-ms-flex-direction: column;
	flex-direction: column;
	height: 100%;
	display: flex;
}

.component {
	margin-bottom: 1.3rem;
}
.component-top {
	margin-top: 5rem;
}

@media only screen and (max-width: 75em) {
	.right-col {
		margin-left: 12rem;
	}
}
.margin {
	margin-top: 5rem;
}

@media only screen and (max-width: 991px) {
	.container {
		max-width: 100%;
	}

	.right-col {
		display: none;
	}
}
</style>
