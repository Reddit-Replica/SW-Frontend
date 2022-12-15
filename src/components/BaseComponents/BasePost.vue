<template>
	<div class="post-card d-flex flex-row" v-if="!postHidden">
		<!-- section to display votes -->
		<div class="d-flex flex-column vote-box">
			<div class="upvote" @click="upvote" id="upvote">
				<svg class="icon icon-arrow-down p-1 up-clicked" v-if="upClicked">
					<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
				</svg>
				<svg class="icon icon-shift" v-else>
					<use xlink:href="../../../img/shift.svg#icon-shift"></use>
				</svg>
			</div>
			<div
				class="p-2 vote-count"
				:class="upClicked ? 'up-clicked' : downClicked ? 'down-clicked' : ''"
			>
				{{ counter }}
			</div>
			<div class="downvote" @click="downvote" id="downvote">
				<svg
					class="icon icon-arrow-down p-1"
					:class="downClicked ? 'down-clicked' : ''"
					v-if="downClicked"
				>
					<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
				</svg>
				<svg class="icon icon-shift" v-else>
					<use xlink:href="../../../img/shift.svg#icon-shift"></use>
				</svg>
			</div>
		</div>

		<!-- section to display post information -->
		<div class="post-content" @click="showPostComments">
			<router-link
				:to="
					post.subreddit != undefined
						? {
								name: 'comments',
								params: {
									postName: post.title,
									subredditName: post.subreddit,
									postId: id,
								},
						  }
						: {
								name: 'userPostComments',
								params: {
									userName: post.postedBy,
									postName: post.title,
									postId: id,
								},
						  }
				"
				id="post-router-comment"
			>
				<post-content :post="post"></post-content>
			</router-link>
			<div class="post-services">
				<span class="vote-services vote-box">
					<span class="upvote" @click="upvote" id="upvote-service">
						<svg class="icon icon-arrow-down p-1 up-clicked" v-if="upClicked">
							<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
						</svg>
						<svg class="icon icon-shift" v-else>
							<use xlink:href="../../../img/shift.svg#icon-shift"></use>
						</svg>
					</span>
					<span
						class="p-2 vote-count"
						:class="
							upClicked ? 'up-clicked' : downClicked ? 'down-clicked' : ''
						"
						>{{ counter }}</span
					>
					<span class="downvote" @click="downvote" id="downvote-service">
						<svg
							class="icon icon-arrow-down p-1"
							:class="downClicked ? 'down-clicked' : ''"
							v-if="downClicked"
						>
							<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
						</svg>
						<svg class="icon icon-shift" v-else>
							<use xlink:href="../../../img/shift.svg#icon-shift"></use>
						</svg>
					</span>
				</span>
				<ul class="services">
					<li>
						<router-link
							:to="
								post.subreddit != undefined
									? {
											name: 'comments',
											params: {
												postName: post.title,
												subredditName: post.subreddit,
												postId: id,
											},
									  }
									: {
											name: 'userPostComments',
											params: {
												userName: post.postedBy,
												postName: post.title,
												postId: id,
											},
									  }
							"
							id="post-router-comment"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-chat-square"
								viewBox="0 0 16 16"
							>
								<path
									d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
								/>
							</svg>
							{{ post.comments }} Comments
						</router-link>
					</li>
					<li @click="showShareSubMenu" id="share">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-arrow-90deg-right"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
							/>
						</svg>
						Share
						<ul class="sub-menu" v-if="shareSubMenuDisplay">
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-signpost-2"
									viewBox="0 0 16 16"
								>
									<path
										d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z"
									/>
								</svg>
								Crosspost
							</li>
						</ul>
					</li>

					<li id="post-direct-save">
						<div v-if="!saved" @click="savePost" id="save">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-bookmark"
								viewBox="0 0 16 16"
							>
								<path
									d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
								/>
							</svg>
							Save
						</div>
						<div v-else @click="savePost" id="unsave">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-bookmarks"
								viewBox="0 0 16 16"
							>
								<path
									d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
								/>
								<path
									d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
								/>
							</svg>
							Unsave
						</div>
					</li>
					<li @click="showSubMenu" id="submenu">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-three-dots"
							viewBox="0 0 16 16"
						>
							<path
								d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
							/>
						</svg>
						<ul class="sub-menu" v-if="subMenuDisplay">
							<li
								v-if="!saved"
								@click="savePost"
								class="post-sub-save"
								id="sub-save"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-bookmark"
									viewBox="0 0 16 16"
								>
									<path
										d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
									/>
								</svg>
								Save
							</li>
							<li
								v-else
								@click="savePost"
								class="post-sub-save"
								id="sub-unsave"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-bookmarks"
									viewBox="0 0 16 16"
								>
									<path
										d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
									/>
									<path
										d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
									/>
								</svg>
								Unsave
							</li>
							<li @click="hidePost" id="hide">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-eye-slash"
									viewBox="0 0 16 16"
								>
									<path
										d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
									/>
									<path
										d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
									/>
									<path
										d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
									/>
								</svg>
								Hide
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-flag"
									viewBox="0 0 16 16"
								>
									<path
										d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"
									/>
								</svg>
								Report
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import PostContent from '../PostComponents/PostContent.vue';
export default {
	emits: [
		'showComments',
		'saved',
		'unsaved',
		//@vuese
		//show comments of emitting post
	],
	data() {
		return {
			counter: this.post.votes,
			upClicked: this.post.votingType == 1 ? true : false,
			downClicked: this.post.votingType == -1 ? true : false,
			subMenuDisplay: false,
			shareSubMenuDisplay: false,
			postHidden: false,
			saved: this.post.saved,
		};
	},
	props: {
		//@vuese
		//post object that will get displayed in this base post component
		post: {
			type: Object,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	watch: {
		savedUnsavedInMainID(newID) {
			if (newID == this.post.id)
				this.saved = this.$store.state.latestSavedUnsavedPost.saved;
			console.log('newvalue= ' + newID);
		},
		savedUnsavedInMainState(newState) {
			if (this.$store.state.latestSavedUnsavedPost.id == this.post.id)
				this.saved = newState;
			console.log('newvalue= ' + newState);
		},
		post(newValue) {
			this.counter = newValue.votes;
			this.upClicked = newValue.votingType == 1 ? true : false;
			this.downClicked = newValue.votingType == -1 ? true : false;
			this.saved = newValue.saved;
		},
	},
	computed: {
		savedUnsavedInMainID: function () {
			{
				return this.$store.state.latestSavedUnsavedPost.id;
			}
		},
		savedUnsavedInMainState: function () {
			{
				return this.$store.state.latestSavedUnsavedPost.saved;
			}
		},
	},
	methods: {
		//@vuese
		//show post comments
		showPostComments() {
			// Fire when the post is clicked
			this.$emit('showComments');
		},
		//@vuese
		//upvote on post
		async upvote() {
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
			} else {
				this.upClicked = false;
				this.counter--;
			}
			try {
				await this.$store.dispatch('postCommentActions/vote', {
					baseurl: this.$baseurl,
					id: this.id,
					type: 'post',
					direction: 1,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		//@vuese
		//down vote on post
		async downvote() {
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
			} else {
				this.downClicked = false;
				this.counter++;
			}
			try {
				await this.$store.dispatch('postCommentActions/vote', {
					baseurl: this.$baseurl,
					id: this.id,
					type: 'post',
					direction: -1,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		//@vuese
		//show services submenu
		showSubMenu() {
			this.subMenuDisplay = !this.subMenuDisplay;
			this.shareSubMenuDisplay = false;
		},
		//@vuese
		//hide post action
		hidePost() {
			this.postHidden = true;
		},
		//@vuese
		//save post
		async savePost() {
			this.saved = !this.saved;
			if (this.saved == true) {
				this.$emit('saved', this.post.id);
				try {
					await this.$store.dispatch('postCommentActions/save', {
						baseurl: this.$baseurl,
						id: this.post.id,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.$emit('unsaved', this.post.id);
				try {
					await this.$store.dispatch('postCommentActions/unsave', {
						baseurl: this.$baseurl,
						id: this.post.id,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		//@vuese
		//show share submenu
		showShareSubMenu() {
			this.shareSubMenuDisplay = !this.shareSubMenuDisplay;
			this.subMenuDisplay = false;
		},
	},
	components: {
		PostContent,
	},
};
</script>
<style scoped>
.post-card {
	background-color: white;
	border-radius: 5px;
	margin: 20px 0px;
}

.post-card:hover {
	outline: 1px solid;
}

.post-card div.vote-box {
	background-color: var(--color-grey-light-2);
	text-align: center;
	border-radius: 5px 0px 0px 5px;
	width: 40px;
	padding-top: 10px;
}

.vote-box .downvote svg,
.vote-box .upvote svg {
	width: 22px;
	height: 22px;
	fill: var(--color-grey-dark-2);
}
.downvote .icon-shift {
	transform: rotate(180deg);
}
.post-services .vote-services {
	display: none;
}
.vote-box .downvote:hover svg,
.vote-box .upvote:hover svg,
.vote-box .upvote svg.up-clicked,
.vote-box .downvote svg.down-clicked,
.post-services .downvote:hover svg,
.post-services .upvote:hover svg,
.post-services .upvote svg.up-clicked,
.post-services .downvote svg.down-clicked {
	background-color: var(--color-grey-light-4);
}
.vote-box .downvote:hover svg {
	fill: var(--color-blue);
}
.vote-box .upvote:hover svg {
	fill: var(--color-orange);
}
.vote-box svg.up-clicked {
	fill: var(--color-orange);
}
.vote-box .vote-count {
	color: black;
	font-weight: 700;
}
.vote-box .vote-count.up-clicked {
	color: var(--color-orange);
}

.vote-box svg.down-clicked {
	fill: var(--color-blue);
}

.vote-box .vote-count.down-clicked {
	color: var(--color-blue);
}
.post-services .services {
	padding: 0px;
	margin: 0px;
	display: inline;
}

.post-services .services > li {
	display: inline-block;
	list-style: none;
	height: 40px;
	text-align: center;
	line-height: 40px;
	padding: 0px 12px;
	border-radius: 5px;
	color: var(--color-grey-dark-2);
	font-weight: bold;
	font-size: 11px;
	position: relative;
}

.post-services .services > li:hover {
	background-color: var(--color-grey-light-2);
}

.post-services .services > li > svg {
	width: 20px;
	height: 20px;
	fill: var(--color-grey-dark-2);
	padding: 2px;
}

a {
	text-decoration: none;
}
.post-card .post-content .post-services .services .sub-menu {
	position: absolute;
	background-color: white;
	padding: 0px;
	left: 0px;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
	z-index: 2;
}

.post-card .post-content .post-services .services .sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
}

.post-card .post-content .post-services .services .sub-menu li:hover {
	color: black;
	background-color: var(--color-blue-light-2);
}

.post-card
	.post-content
	.post-services
	.services
	.sub-menu
	li:first-of-type:hover {
	border-radius: 5px 5px 0px 0px;
}

.post-card
	.post-content
	.post-services
	.services
	.sub-menu
	li:last-of-type:hover {
	border-radius: 0px 0px 5px 5px;
}

.post-card .post-content .post-services .services .sub-menu li svg {
	fill: var(--color-grey-dark-2);
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

.post-card .post-content .post-services .services .sub-menu li:hover svg {
	fill: black;
}

.post-card .post-content .post-services .services .sub-menu li {
	padding: 0px 10px;
}

.post-card
	.post-content
	.post-services
	.services
	.sub-menu
	li:not(:last-of-type) {
	border-bottom: 1px solid var(--color-grey-light-3);
}
.post-card .post-content .post-services .services .sub-menu li#unsave {
	color: var(--color-blue);
}
.post-card .post-content .post-services .services .sub-menu li#unsave svg {
	fill: var(--color-blue);
}
.post-content .post-services .services .sub-menu li.post-sub-save,
.post-content .post-services .services .sub-menu li.share-items-in-sub-menu,
.post-content .post-services .services .sub-menu li.awards-item-in-sub-menu {
	display: none;
}

@media (max-width: 1079px) {
	.post-card .post-content .post-services .services .sub-menu li.post-sub-save {
		display: flex;
	}
	#post-direct-save {
		display: none;
	}
}
@media (max-width: 767px) {
	.vote-box {
		display: none !important;
	}

	.post-services .vote-services {
		display: inline !important;
	}
}
@media (max-width: 519px) {
	#share {
		display: none;
	}
	.share-items-in-sub-menu {
		display: flex !important;
	}
}
@media (max-width: 495px) {
	.awards-item-in-sub-menu {
		display: flex !important;
	}
	#awards {
		display: none;
	}
}
.services li {
	cursor: pointer;
}
#post-router-comment {
	color: var(--color-grey-dark-2);
}
.post-content {
	padding: 8px 8px 3px 5px;
	width: 100%;
	overflow: auto;
	height: 100%;
	word-break: break-all;
}
</style>
