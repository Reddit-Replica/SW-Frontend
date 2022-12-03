<template>
	<!-- header component -->
	<div>
		<div :class="showPostComments ? 'back' : ''">
			<the-header :header-title="'Home'"></the-header>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6">
						<div class="left-col">
							<createpost-bar></createpost-bar>
							<sortposts-bar @title="changeRoute"></sortposts-bar>
							<base-post
								v-for="post in posts"
								:key="post.id"
								:post="post"
								@show-comments="showPostComments"
								@saved="savePost"
								@unsaved="unsavePost"
							></base-post>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="right-col">
							<div class="component">
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
					v-for="message in savedUnsavedPosts"
					:key="message.id"
					:type="message.type"
					:state="message.state"
					:typeid="message.postid"
					@undo-action="undoSaveUnsave"
				></SaveUnsavePopupMessage>
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
export default {
	beforeMount() {
		let title = this.$route.params.title;
		if (title == null) title = 'best';
		this.fetchPosts(title);
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
	},
	computed: {
		showPostComments() {
			if (this.$route.path.split('/')[3] == 'comments') return true;
			return false;
		},
	},
	created() {
		document.title = 'Reddit - Dive into anything';
	},
	data() {
		return {
			colorGreyDark2: '#0099CC',
			posts: [],
			showComments: false,
			savedUnsavedPosts: [],
		};
	},
	methods: {
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
		savePost(id) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: id,
				type: 'post',
				state: 'saved',
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
		unsavePost(id) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: id,
				type: 'post',
				state: 'unsaved',
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
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
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.posts = this.$store.getters['listing/getPosts'];
		},
		changeRoute(title) {
			this.$router.push('/main/' + title);
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

@media only screen and (max-width: 75em) {
	.right-col {
		margin-left: 12rem;
	}
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
