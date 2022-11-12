<template>
	<div class="base-profile-post">
		<div class="box">
			<div class="box-items">
				<!-- <div class="voting-box"></div> -->
				<div class="vote-box">
					<div class="d-flex flex-column vote-box">
						<div class="upvote" @click="upvote">
							<svg class="icon icon-arrow-down p-1 up-clicked" v-if="upClicked">
								<use xlink:href="../../../../img/vote.svg#icon-arrow-up"></use>
							</svg>
							<svg class="icon icon-shift" v-else>
								<use xlink:href="../../../../img/shift.svg#icon-shift"></use>
							</svg>
						</div>
						<div
							class="p-2 vote-count"
							:class="
								upClicked ? 'up-clicked' : downClicked ? 'down-clicked' : ''
							"
						>
							{{ counter }}
						</div>
						<div class="downvote" @click="downvote">
							<svg
								class="icon icon-arrow-down p-1"
								:class="downClicked ? 'down-clicked' : ''"
								v-if="downClicked"
							>
								<use
									xlink:href="../../../../img/vote.svg#icon-arrow-down"
								></use>
							</svg>
							<svg class="icon icon-shift" v-else>
								<use xlink:href="../../../../img/shift.svg#icon-shift"></use>
							</svg>
						</div>
					</div>
				</div>
				<div class="main-box">
					<div class="post-pic-box"></div>
					<div class="post-content">
						<div class="post-header">
							<span class="post-title"><h3>fdf</h3></span>
							<span class="post-spoiler"><p>spoiler</p></span>
							<span class="post-nsfw"><p>nsfw</p></span>
							<span class="post-oc"><p>OC</p></span>
						</div>
						<div class="post-user-information">
							<div class="post-user-name"><a>u/Creative-dentist1095</a></div>
							<div class="posted-by">
								posted by
								<a style="margin-left: 3px" href="">u/Creative-dentist1095 </a>
							</div>
							<div>2 days ago</div>
						</div>
						<div class="post-options" margin-top="8px">
							<ul class="services">
								<li>
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
									{{ post.commentsCount }} Comments
								</li>
								<li id="awards">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-gift"
										viewBox="0 0 16 16"
									>
										<path
											d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"
										/>
									</svg>
									Awards
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
												class="bi bi-link-45deg"
												viewBox="0 0 16 16"
											>
												<path
													d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
												/>
												<path
													d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
												/>
											</svg>
											Copy Link
										</li>
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
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-code-square"
												viewBox="0 0 16 16"
											>
												<path
													d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
												/>
												<path
													d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
												/>
											</svg>
											Embed
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-chat-dots"
												viewBox="0 0 16 16"
											>
												<path
													d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
												/>
												<path
													d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
												/>
											</svg>
											Share&nbsp;To&nbsp;Chat
										</li>
									</ul>
								</li>

								<li id="post-direct-save">
									<div v-if="!saved" @click="savePost">
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
									<div v-else @click="savePost">
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
								<li @click="showSubMenu">
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
										<li class="awards-item-in-sub-menu">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-gift"
												viewBox="0 0 16 16"
											>
												<path
													d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"
												/>
											</svg>
											Awards
										</li>
										<li class="share-items-in-sub-menu">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-link-45deg"
												viewBox="0 0 16 16"
											>
												<path
													d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
												/>
												<path
													d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
												/>
											</svg>
											Copy&nbsp;Link
										</li>
										<li class="share-items-in-sub-menu">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-code-square"
												viewBox="0 0 16 16"
											>
												<path
													d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
												/>
												<path
													d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
												/>
											</svg>
											Embed
										</li>
										<li v-if="!saved" @click="savePost" class="post-sub-save">
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
											id="unsave"
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
										<li @click="hidePost">
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
			</div>
		</div>
	</div>
</template>

<script>
export default {
	emits: ['showComments'],
	data() {
		return {
			id: '1',
			counter: this.post.voteCount,
			upClicked: false,
			downClicked: false,
			subMenuDisplay: false,
			shareSubMenuDisplay: false,
			postHidden: false,
			saved: false,
		};
	},
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	methods: {
		showPostComments() {
			this.$emit('showComments');
		},
		async upvote() {
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
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
			} else {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
		},
		async downvote() {
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
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
			} else {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
		},
		showSubMenu() {
			this.subMenuDisplay = !this.subMenuDisplay;
			this.shareSubMenuDisplay = false;
		},
		hidePost() {
			this.postHidden = true;
		},
		async savePost() {
			this.saved = !this.saved;
			if (this.saved == true) {
				try {
					await this.$store.dispatch('postCommentActions/save', {
						baseurl: this.$baseurl,
						id: this.id,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				try {
					await this.$store.dispatch('postCommentActions/unsave', {
						baseurl: this.$baseurl,
						id: this.id,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		showShareSubMenu() {
			this.shareSubMenuDisplay = !this.shareSubMenuDisplay;
			this.subMenuDisplay = false;
		},
	},
};
</script>
<style scoped>
/* .sort-post-content {
	margin-top: 2px !important;
} */
.base-profile-post .box {
	border: thin solid #ccc;
	border-radius: 5px;
	margin-bottom: -1px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
	cursor: pointer;
	background-color: #ffffff;
	transition: color 0.5s, fill 0.5s, box-shadow 0.5s;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom-width: 1px;
	padding-bottom: 0;
}
.base-profile-post .box:hover {
	outline: 1px solid;
}
.box-items {
	display: flex;
	flex-direction: flex-start;
}
.vote-box {
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ccc;
	/* background-color: rgba(255, 255, 255, 0.8); */
	background-color: var(--color-grey-light-2);
	/* opacity: 0.4; */
}
.post-card div.vote-box {
	/* background-color: var(--color-grey-light-2); */
	text-align: center;
	border-radius: 5px 0px 0px 5px;
	background-color: var(--color-grey-light-2);
	/* width: 40px; */
	/* padding-top: 10px; */
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

.main-box {
	display: flex;
	position: relative;
	flex-direction: row;
	padding: 8px 8px 0;
}
.post-pic-box {
	width: 96px;
	height: 72px;
	background-color: rgba(28, 28, 28, 0.03);
}
.post-content {
	margin-left: 8px;
}
.post-header {
	display: flex;
	align-items: center;
}
span {
	display: inline-block;
}
.post-title h3 {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	padding-right: 5px;
	word-wrap: break-word;
}

.post-header span:not(:first-child) {
	border: 1px solid #a4a7a8;
	color: #a4a7a8;
	display: inline-block;
	height: 16px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	border-radius: 2px;
	margin-right: 5px;
	line-height: 14px;
	padding: 0 4px;
}
.post-user-information {
	display: flex;
	align-items: center;
}
.post-user-information div {
	margin-right: 3px;
}
.post-user-name a {
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: #1c1c11;
	display: inline-block;
	line-height: 20px;
	text-decoration: none;
	margin-right: 3px;
}
span.post-nsfw {
	border: 1px solid rgb(255, 88, 91) !important;
	color: rgb(255, 88, 91) !important;
}
span.post-oc {
	border: none !important;
	background-color: rgb(0, 121, 211) !important;
	color: rgb(255, 255, 255) !important;
	text-align: center;
}

.posted-by,
.posted-by a {
	display: flex;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	align-items: center;
	color: inherit;
	flex-wrap: wrap;
}
.posted-by a:hover {
	text-decoration: underline;
}
.post-user-name a:hover {
	color: #1c1c11;
	text-decoration: underline;
}

.services {
	padding: 0px;
	margin: 0px;
	display: inline;
}

.services > li {
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

.services > li:hover {
	background-color: var(--color-grey-light-2);
}

.services > li > svg {
	width: 20px;
	height: 20px;
	fill: var(--color-grey-dark-2);
	padding: 2px;
}

a {
	text-decoration: none;
}

.subreddit-info .subreddit-image img {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

.subreddit-info .subreddit-image {
	padding-right: 5px;
}

.subreddit-info .subreddit-name a {
	font-weight: 700;
	color: black;
}
.subreddit-info .subreddit-name a:hover {
	text-decoration: underline;
}

.post-card .subreddit-info span:nth-of-type(3),
.post-card .subreddit-info span:nth-of-type(3) a {
	color: var(--color-grey-dark-2);
}

.post-card .subreddit-info span:nth-of-type(3) a:hover {
	text-decoration: underline;
}
.services .sub-menu {
	position: absolute;
	background-color: white;
	padding: 0px;
	left: 0px;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
}

.services .sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
}

.services .sub-menu li:hover {
	color: black;
	background-color: var(--color-blue-light-2);
}

.services .sub-menu li:first-of-type:hover {
	border-radius: 5px 5px 0px 0px;
}

.services .sub-menu li:last-of-type:hover {
	border-radius: 0px 0px 5px 5px;
}

.services .sub-menu li svg {
	fill: var(--color-grey-dark-2);
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

.services .sub-menu li:hover svg {
	fill: black;
}

.services .sub-menu li {
	padding: 0px 10px;
}

.services .sub-menu li:not(:last-of-type) {
	border-bottom: 1px solid var(--color-grey-light-3);
}
.services .sub-menu li#unsave {
	color: var(--color-blue);
}
.services .sub-menu li#unsave svg {
	fill: var(--color-blue);
}
.services .sub-menu li.post-sub-save,
.services .sub-menu li.share-items-in-sub-menu,
.services .sub-menu li.awards-item-in-sub-menu {
	display: none;
}
</style>
