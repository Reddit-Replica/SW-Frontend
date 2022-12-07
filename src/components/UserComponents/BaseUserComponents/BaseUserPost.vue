<template>
	<div class="base-profile-post" @resize="resizePost">
		<div class="box">
			<div class="box-items">
				<!-- <div class="voting-box"></div> -->
				<div class="vote-box left-vote-box">
					<div class="d-flex flex-column vote-box">
						<div class="upvote" @click="upvote">
							<svg
								class="icon icon-arrow-down p-1 up-clicked"
								v-if="postData.data.votingType == '1'"
							>
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
							{{ postData.data.votes }}
						</div>
						<div class="downvote" @click="downvote">
							<svg
								class="icon icon-arrow-down p-1"
								:class="downClicked ? 'down-clicked' : ''"
								v-if="postData.data.votingType == '2'"
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
				<div class="main-post-container">
					<div class="main-box">
						<div class="post-pic-box">
							<i v-if="postData.data.kind == 'image'"
								><i class="fa-regular fa-file-image"></i
							></i>
							<i v-if="postData.data.kind == 'link'"
								><i class="fa-solid fa-link"></i
							></i>
							<i
								style="
									transform: translate(185%, 34%);
									z-index: 5;
									color: #ffffff;
								"
								v-if="postData.data.kind == 'link'"
								><a
									class="post-link-href"
									:href="postData.data.link"
									target="_blank"
									><i
										style="
											background-color: #0079d3;
											border-top-left-radius: 4px;
											padding: 3px;
											font-size: 12px;
										"
										class="fa-solid fa-arrow-up-right-from-square"
									></i></a
							></i>
							<img src="../../../assets/R.png" alt="" />
						</div>
						<div class="post-content">
							<div class="post-header">
								<div class="post-title">
									<h3>{{ postData.data.title }}</h3>
								</div>
								<a
									v-if="postData.data.kind == 'link'"
									class="post-title-link"
									:href="postData.data.link"
									target="_blank"
									>{{ postData.data.link }}/<i
										class="fa-solid fa-arrow-up-right-from-square"
									></i
								></a>
								<div class="post-status">
									<router-link
										v-if="postData.data.flair"
										to=""
										class="flair-box"
										:style="`background-color :${postData.data.flair.backgroundColor};
										color : ${postData.data.flair.textColor};
										`"
										>{{ postData.data.flair.flairName }}</router-link
									>
									<span v-if="postData.data.spoiler" class="post-spoiler"
										><p>spoiler</p></span
									>
									<span v-if="postData.data.nsfw" class="post-nsfw"
										><p>nsfw</p></span
									>
									<span class="post-oc"><p>OC</p></span>
								</div>
							</div>
							<div class="post-user-information">
								<div class="post-user-name">
									<a>{{ postData.data.subreddit }}</a>
								</div>
								<div class="posted-by">
									posted by
									<a style="margin-left: 3px" href=""
										>{{ postData.data.postedBy }}
									</a>
								</div>
								<div v-if="postData.data.moderation">
									{{ postData.data.postedAt }}
									<div
										v-if="
											postData.data.moderation.spam &&
											postData.data.moderation.spam.spammedBy != ''
										"
										class="post-tooltip"
									>
										<i
											class="fa-regular fa-calendar-xmark"
											style="color: #ff585b"
										></i>
										<span class="post-tooltiptext"
											>Approved by
											{{ postData.data.moderation.spam.spammedBy }} at
											{{ postData.data.moderation.spam.spammedDate }}</span
										>
									</div>
									<div
										v-if="postData.data.moderation.lock"
										class="post-tooltip"
									>
										<i class="fa-solid fa-lock" style="color: #ffd635"></i>
										<span class="post-tooltiptext">Comments are locked</span>
									</div>
									<div
										v-if="
											postData.data.moderation.remove &&
											postData.data.moderation.remove.removedBy != ''
										"
										class="post-tooltip"
									>
										<i style="color: #ff585b" class="fa-solid fa-ban"></i>
										<span class="post-tooltiptext"
											>Approved by
											{{ postData.data.moderation.remove.removedBy }} at
											{{ postData.data.moderation.remove.removedDate }}</span
										>
									</div>
									<div
										v-if="
											postData.data.moderation.approve &&
											postData.data.moderation.approve.approvedBy != ''
										"
										class="post-tooltip"
									>
										<i class="fa-solid fa-check" style="color: #46d160"></i>
										<span class="post-tooltiptext"
											>Approved by
											{{ postData.data.moderation.approve.approvedBy }}
											at
											{{ postData.data.moderation.approve.approvedDate }}</span
										>
									</div>
								</div>
							</div>
							<div class="post-options">
								<post-options
									:post-data="postData"
									@insights-toggle="insightsPostToggle"
									@expandPost="expandPostContent"
									@collapsePost="collapsePostContent"
								></post-options>
								<!-- <ul>
									<li class="bottom-vote-box">
										<div
											class="d-flex flex-row vote-box"
											style="width: auto; background-color: inherit"
										>
											<div class="upvote" @click="upvote">
												<svg
													class="icon icon-arrow-down p-1 up-clicked"
													v-if="upClicked"
												>
													<use
														xlink:href="../../../../img/vote.svg#icon-arrow-up"
													></use>
												</svg>
												<svg class="icon icon-shift" v-else>
													<use
														xlink:href="../../../../img/shift.svg#icon-shift"
													></use>
												</svg>
											</div>
											<div
												class="p-2 vote-count"
												:class="
													upClicked
														? 'up-clicked'
														: downClicked
														? 'down-clicked'
														: ''
												"
											>
												{{ postData.data.votes }}
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
													<use
														xlink:href="../../../../img/shift.svg#icon-shift"
													></use>
												</svg>
											</div>
										</div>
									</li>
									<li class="post-option-item">
										<div
											v-if="postData.data.kind == 'link'"
											class="post-options-icon"
										>
											<a
												class="post-link-href"
												:href="postData.data.link"
												target="_blank"
											>
												<i
													style="font-size: 20px"
													class="fa-solid fa-arrow-up-right-from-square"
												></i>
											</a>
										</div>
										<div
											v-else-if="!showPostContent"
											@click="expandPostContent"
											class="post-options-icon"
											style="
												transform: rotate(90deg);
												stroke-width: 35px;
												stroke: rgb(135, 138, 140);
												color: transparent;
											"
										>
											<i
												class="fa-solid fa-up-right-and-down-left-from-center"
											></i>
										</div>
										<div
											v-else
											@click="collapsePostContent"
											class="post-options-icon"
										>
											<i
												style="
													transform: rotate(90deg);
													stroke-width: 35px;
													stroke: rgb(135, 138, 140);
													color: transparent;
												"
												class="fa-solid fa-down-left-and-up-right-to-center"
											></i>
										</div>
									</li>
									<li class="post-option-item">
										<router-link to="">
											<div class="post-options-icon">
												<i
													style="
														stroke-width: 35px;
														stroke: rgb(135, 138, 140);
														color: transparent;
													"
													class="fa-solid fa-message"
												></i>
											</div>
											<div class="post-options-text">
												<p>{{ postData.data.comments }}</p>
											</div>
										</router-link>
									</li>
									<li
										style="position: relative"
										class="post-option-item-hover"
										@click="sharePost"
									>
										<router-link to="">
											<div class="post-options-icon">
												<i
													style="
														stroke-width: 35px;
														stroke: rgb(135, 138, 140);
														color: transparent;
													"
													class="fa-solid fa-share"
												></i>
											</div>
											<div class="post-options-text">
												<p>share</p>
											</div>
										</router-link>
										<div v-if="showShareOptions" class="options-box-list">
											<ul>
												<li @click="CopyPostLink" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-solid fa-link"
														></i>
													</div>
													<div class="options-box-text">Copy Link</div>
												</li>
												<li @click="Crosspost" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-solid fa-shuffle"
														></i>
													</div>
													<div class="options-box-text">Crosspost</div>
												</li>
											</ul>
										</div>
									</li>
									<li
										id="approve-user-post-button"
										@click="approvePost"
										:style="[
											postData.data.moderation &&
											postData.data.moderation.approve &&
											postData.data.moderation.approve.approvedBy != ''
												? 'color: #46d160'
												: '',
										]"
										class="post-option-item"
									>
										<div class="post-options-icon">
											<i class="fa-solid fa-check"></i>
										</div>
										<div class="post-options-text">Approve</div>
									</li>
									<li
										id="remove-user-post-button"
										@click="removePost"
										:style="[
											postData.data.moderation &&
											postData.data.moderation.remove &&
											postData.data.moderation.remove.removedBy != ''
												? 'color: #ff585b'
												: 'color: rgba(135, 138, 140)',
										]"
										class="post-option-item"
									>
										<div class="post-options-icon">
											<i style="color: inherit" class="fa-solid fa-ban"></i>
										</div>
										<div class="post-options-text">
											<p>Remove</p>
										</div>
									</li>
									<li
										id="spam-user-post-button"
										@click="spamPost"
										:style="[
											postData.data.moderation &&
											postData.data.moderation.spam &&
											postData.data.moderation.spam.spammedBy != ''
												? 'color: #ff585b'
												: 'color: rgba(135, 138, 140)',
										]"
										class="post-option-item"
									>
										<div class="post-options-icon">
											<i class="fa-regular fa-calendar-xmark"></i>
										</div>
										<div class="post-options-text">
											<p>Spam</p>
										</div>
									</li>
									<li
										id="insights-user-post-button"
										@click="insightsPostToggle"
										class="post-option-item"
									>
										<div class="post-options-icon">
											<i
												style="color: #0079d3"
												class="fa-solid fa-chart-simple"
											></i>
										</div>
										<div class="post-options-text">
											<p>Insights</p>
										</div>
									</li>
									<li id="shield-user-post-button" class="post-option-item">
										<div class="post-options-icon">
											<i
												style="
													stroke-width: 35px;
													stroke: rgb(135, 138, 140);
													color: transparent;
												"
												class="fa-solid fa-shield"
											></i>
										</div>
									</li>
									<li
										class="post-option-item2"
										style="position: relative"
										@click="openOptionsBoxList"
									>
										<div class="post-options-icon three-dot-icon-box">
											<i>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-three-dots"
													viewBox="0 0 16 16"
												>
													<path
														d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
													/>
												</svg>
											</i>
										</div>
										<div v-if="showOptionsBoxList" class="options-box-list">
											<ul>
												<li @click="editPost" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-solid fa-pen"
														></i>
													</div>
													<div class="options-box-text">Edit Post</div>
												</li>
												<li @click="savePost" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-regular fa-bookmark"
														></i>
													</div>
													<div class="options-box-text">Save</div>
												</li>
												<li @click="pinPostToProfile" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-solid fa-thumbtack"
														></i>
													</div>
													<div class="options-box-text">
														Pin Post to Profile
													</div>
												</li>
												<li @click="hidePost" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-regular fa-eye-slash"
														></i>
													</div>
													<div class="options-box-text">Hide</div>
												</li>
												<li @click="deletePost" class="options-box-item">
													<div class="options-box-icon">
														<i
															style="color: rgba(135, 138, 140)"
															class="fa-solid fa-trash"
														></i>
													</div>
													<div class="options-box-text">Delete</div>
												</li>
												<li @click="markAsOC" class="options-box-item">
													<div class="options-box-icon">
														<i>
															<input
																type="checkbox"
																id="mark-as-oc"
																name="mark-as-oc"
																checked
														/></i>
													</div>
													<div class="options-box-text">
														<label for="mark-as-oc">Mark As OC</label>
													</div>
												</li>
												<li @click="markAsSpoiler" class="options-box-item">
													<div class="options-box-icon">
														<i>
															<input
																type="checkbox"
																id="mark-as-spoiler"
																name="mark-as-spoiler"
																checked
														/></i>
													</div>
													<div class="options-box-text">
														<label for="mark-as-spoiler">Mark As Spoiler</label>
													</div>
												</li>
												<li @click="markAsNSFW" class="options-box-item">
													<div class="options-box-icon">
														<i>
															<input
																type="checkbox"
																id="mark-as-nsfw"
																name="mark-as-nsfw"
																checked
														/></i>
													</div>
													<div class="options-box-text">
														<label for="mark-as-nsfw">Mark As NSFW</label>
													</div>
												</li>
												<li class="options-box-item">
													<div class="options-box-icon">
														<i>
															<input
																type="checkbox"
																id="send-me-notifications"
																name="send-me-notifications"
																checked
														/></i>
													</div>
													<div class="options-box-text">
														<label for="send-me-notifications"
															>Send Me Replay Notifications</label
														>
													</div>
												</li>
											</ul>
										</div>
									</li>
								</ul> -->
							</div>
						</div>
					</div>
					<div
						class="post-contents"
						style="overflow: hidden"
						v-if="showPostContent"
					>
						<div class="post-picture" v-if="postData.data.kind == 'image'">
							<div class="picture-container">
								<span
									v-if="lastRightPic != 0"
									@click="rightClick"
									class="left-button"
									><i class="fa-solid fa-angle-left"></i
								></span>
								<span
									v-if="lastLeftPic != 0"
									@click="leftClick"
									class="right-button"
									><i class="fa-solid fa-angle-right"></i
								></span>
								<div class="picture-number-box">
									{{ lastRightPic + 1 }} / {{ images.length }}
								</div>
								<div class="pic-items">
									<ul class="images">
										<li
											v-for="(image, index) in images"
											:key="index"
											:style="{ left: image.left + '%' }"
										>
											<img src="../../../assets/R.png" alt="" />
										</li>
									</ul>
								</div>
							</div>
							<div class="post-footer"></div>
						</div>
						<div
							class="paragraph-post"
							v-else-if="postData.data.kind == 'hybrid'"
						>
							<div class="post-kind-post" v-html="PostHybridContent"></div>
						</div>
						<div class="video" v-else-if="postData.data.kind == 'video'">
							<video
								controls
								style="
									background-color: rgb(0, 0, 0);
									width: 100%;
									max-height: 450px;
								"
							>
								<source
									src="../../../../video/userPostTest.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
					<div class="post-insight" v-else-if="insightActive">
						<div style="display: flex" v-if="this.insightsLoading">
							<the-spinner
								style="margin-left: auto; margin-right: auto"
							></the-spinner>
						</div>
						<div v-else class="insights-content">
							<div class="insight-header">
								<h3 class="insights-title">Post Insights</h3>
								<p class="insights-p">
									Only you and mods of this community can see this
								</p>
							</div>
							<ul>
								<li>
									<span
										>{{ getInsightsData.totalViews }}
										<i
											style="color: #0079d3"
											class="fa-solid fa-chart-simple"
										></i
									></span>
									<span><i class="fa-regular fa-eye"></i> total views</span>
								</li>
								<li>
									<span>{{ getInsightsData.upvoteRate }}%</span>
									<span>
										<i
											style="width: 12px; height: 12px"
											class="fa-solid fa-up-long"
										></i>
										Upvote Rate</span
									>
								</li>
								<li>
									<span>{{ getInsightsData.communityKarma }} <i></i></span>
									<span><i class="fa-solid fa-fan"></i> Community Karma</span>
								</li>
								<li>
									<span>{{ getInsightsData.totalShares }}<i></i></span>
									<span> <i class="fa-solid fa-upload"></i> total shares</span>
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
import PostOptions from './PostComponents/PostOptions.vue';
export default {
	components: {
		PostOptions,
	},
	emits: ['showComments'],
	props: {
		postData: {
			type: Object,
			required: true,
		},
		post: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			// id: '1',
			// counter: this.postData.data.votes,
			upClicked: false,
			downClicked: false,
			// subMenuDisplay: false,
			// shareSubMenuDisplay: false,
			// postHidden: false,
			// saved: false,
			/* medo */
			showPostContent: false,
			// showOptionsBoxList: false,
			images: [
				{
					imgUrl: '../../../assets/R.png',
					left: '0',
				},
				{
					imgUrl: '../../../assets/R.png',
					left: '100',
				},
				{
					imgUrl: '../../../assets/R.png',
					left: '200',
				},
			],
			lastLeftPic: 0,
			lastRightPic: 0,
			// showShareOptions: false,
			insightActive: false,
			insightsLoading: false,
			PostHybridContent: '',
		};
	},
	created() {
		this.lastLeftPic = this.images.length - 1;
	},
	mounted() {},
	computed: {
		getInsightsData() {
			console.log(this.$store.getters['userposts/getInsightsData']);
			return this.$store.getters['userposts/getInsightsData'].insightsData;
		},
	},
	methods: {
		setPostHybridContent() {
			let QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;
			console.log(this.postData.data.content);
			let deltaOps = this.postData.data.content.ops;
			let cfg = {};
			let converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
			console.log(converter.convert());
			this.PostHybridContent = converter.convert();
		},
		async insightsPostToggle(id) {
			this.insightsLoading = true;
			this.insightActive = !this.insightActive;
			this.showPostContent = false;
			if (this.insightActive) await this.RequestInsightsData(id);
			this.insightsLoading = false;
		},
		async RequestInsightsData(id) {
			try {
				await this.$store.dispatch('userposts/getInsightsData', {
					baseurl: this.$baseurl,
					params: {
						id: `${id}`,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		savePost() {
			console.log('save');
		},
		removePost() {
			console.log('remove');
		},
		// sharePost() {
		// 	console.log('share');
		// 	this.showShareOptions = true;
		// },
		CopyPostLink() {},
		Crosspost() {},
		editPost() {
			console.log('edit');
		},
		pinPostToProfile() {
			console.log('pin');
		},
		deletePost() {
			console.log('delete');
		},
		hidePost() {
			console.log('hide');
		},
		markAsOC() {
			console.log('mark as os');
		},
		markAsSpoiler() {
			console.log('mark as spoiler');
		},
		markAsNSFW() {
			console.log('mark as nsfw');
		},

		resizePost() {
			console.log('resize');
		},
		leftClick() {
			this.lastLeftPic--;
			this.lastRightPic++;
			console.log('clicked');
			this.images.forEach((ele) => {
				console.log(Number(ele.left) - 100);
				ele.left = String(Number(ele.left) - 100);
			});
		},
		rightClick() {
			this.lastRightPic--;
			this.lastLeftPic++;
			console.log('clicked');
			this.images.forEach((ele) => {
				console.log(Number(ele.left) + 100);
				ele.left = String(Number(ele.left) + 100);
			});
		},
		// openOptionsBoxList() {
		// 	this.showOptionsBoxList = true;
		// },
		expandPostContent() {
			this.setPostHybridContent();
			this.showPostContent = true;
			this.insightActive = false;
		},
		collapsePostContent() {
			this.showPostContent = false;
			this.insightActive = false;
		},
		// showPostComments() {
		// 	this.$emit('showComments');
		// },
		async upvote() {
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
				// try {
				// 	await this.$store.dispatch('postCommentActions/vote', {
				// 		baseurl: this.$baseurl,
				// 		id: this.id,
				// 		type: 'post',
				// 		direction: 1,
				// 	});
				// } catch (error) {
				// 	this.error = error.message || 'Something went wrong';
				// }
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
				// try {
				// 	await this.$store.dispatch('postCommentActions/vote', {
				// 		baseurl: this.$baseurl,
				// 		id: this.id,
				// 		type: 'post',
				// 		direction: -1,
				// 	});
				// } catch (error) {
				// 	this.error = error.message || 'Something went wrong';
				// }
			} else {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
		},
		// showSubMenu() {
		// 	this.subMenuDisplay = !this.subMenuDisplay;
		// 	this.shareSubMenuDisplay = false;
		// },
		// hidePost() {
		// 	this.postHidden = true;
		// },
		// async savePost() {
		// 	this.saved = !this.saved;
		// 	if (this.saved == true) {
		// 		try {
		// 			await this.$store.dispatch('postCommentActions/save', {
		// 				baseurl: this.$baseurl,
		// 				id: this.id,
		// 				type: 'post',
		// 			});
		// 		} catch (error) {
		// 			this.error = error.message || 'Something went wrong';
		// 		}
		// 	} else {
		// 		try {
		// 			await this.$store.dispatch('postCommentActions/unsave', {
		// 				baseurl: this.$baseurl,
		// 				id: this.id,
		// 				type: 'post',
		// 			});
		// 		} catch (error) {
		// 			this.error = error.message || 'Something went wrong';
		// 		}
		// 	}
		// },
		// showShareSubMenu() {
		// 	this.shareSubMenuDisplay = !this.shareSubMenuDisplay;
		// 	this.subMenuDisplay = false;
		// },
	},
};
</script>
<style scoped>
h3,
p,
ul,
span {
	margin: 0;
	padding: 0;
}
/* .sort-post-content {
	margin-top: 2px !important;
} */
.base-profile-post .box {
	border: thin solid #ccc;
	/* border-radius: 5px; */
	margin-bottom: -1px;
	/* background-color: rgba(255, 255, 255, 0.8); */
	/* border-radius: 5px; */
	cursor: pointer;
	/* background-color: #ffffff; */
	background-color: var(--color-grey-light-2);
	transition: color 0.5s, fill 0.5s, box-shadow 0.5s;
	/* border-bottom-left-radius: 4px; */
	/* border-bottom-right-radius: 4px; */
	/* border-bottom-width: 1px; */
	/* padding-bottom: 0; */
}
.base-profile-post {
	position: relative;
}
.base-profile-post .box {
	position: relative;
	/* z-index: 0; */
}
.base-profile-post .box:hover {
	border: thin solid #898989;
	z-index: 3;
}
.base-profile-post div.box-items {
	display: flex;
	flex-direction: flex-start;
	width: 100%;
	min-height: 94.8px;
	/* overflow: hidden; */
}
.vote-box {
	width: 40px;
	display: flex;
	/* align-items: center; */
	justify-content: flex-start;
	background-color: #ccc;
	/* background-color: rgba(255, 255, 255, 0.8); */
	background-color: var(--color-grey-light-2);
	padding: 8px 0px 8px 0px;

	/* opacity: 0.4; */
}

.post-card div.vote-box {
	/* background-color: var(--color-grey-light-2); */
	text-align: center;
	border-radius: 0px 0px 0px 0px !important;
	background-color: var(--color-grey-light-2);
	/* width: 40px; */
	/* padding-top: 10px; */
}
div.vote-box {
	border-radius: 0px 0px 0px 0px !important;
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

.main-post-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	background: #ffffff;
	border-radius: 4px;
}
.main-box {
	display: flex;
	position: relative;
	flex-direction: row;
	padding: 8px 8px 0;
	background-color: #ffffff;
	flex-grow: 2;
	border-radius: 5px !important;
}
.post-pic-box {
	position: relative;
	display: block;
	width: 96px;
	overflow: hidden;
	height: 72px;
	border-radius: 4px;
	background-color: rgba(28, 28, 28, 0.03);
	flex: none;
}
.post-pic-box::before {
	font-family: 'Font Awesome 5 Free';
	content: '\f03e';
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	color: inherit;
	display: none;
}
.post-pic-box i {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	color: inherit;
}
.post-pic-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 4px;
	position: relative;
	z-index: 1;
}
@media (max-width: 640px) {
	div.left-vote-box {
		display: none !important;
	}
	/* .post-pic-box {
		position: absolute;
		right: 16px;
	} */
	.main-box {
		flex-direction: row-reverse;
	}
	#shield-user-post-button,
	#insights-user-post-button,
	#spam-user-post-button,
	#remove-user-post-button,
	#approve-user-post-button {
		display: none;
	}
}
/* @media (min-width: 640px) {
	li.bottom-vote-box {
		display: none !important;
	}
} */
.post-content {
	margin-left: 8px;
	/* overflow: hidden; */
}
.post-header {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
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
.post-status {
	display: flex;
	align-items: center;
}

.post-status span {
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
	flex-wrap: wrap;
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
	border: 1px solid rgb(0, 121, 211) !important;
	background-color: rgb(0, 121, 211) !important;
	color: rgb(255, 255, 255) !important;
	/* text-align: center; */
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

/* Post-options  */
.post-options {
	margin-top: 8px;
}
/* .post-options ul li,
.post-options ul li a {
	color: inherit;
	list-style: none;
	text-decoration: none;
	height: 36px;
	min-width: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.post-options ul li.post-option-item,
.post-option-item-hover {
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}

.post-options ul li.post-option-item .post-options-text,
.post-option-item-hover .post-options-text {
	margin-left: 6px;
}
@media (max-width: 800px) {
	.post-options-text {
		display: none;
	}
}
.post-options ul li.post-option-item p,
.post-option-item-hover p {
	font-size: 12px;
}
.post-options ul li.post-option-item:hover,
.post-option-item-hover:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
.post-options-icon {
	font-size: 20px;
}
.post-options ul {
	display: flex;
	flex-wrap: wrap;
}
.post-options ul li.post-option-item {
	display: flex;
}
.three-dot-icon-box {
	position: relative;
	display: flex;
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}
.three-dot-icon-box:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
.options-box-list {
	position: absolute;
	top: 35px;
	left: 0px;
	z-index: 15;
	border: 1px solid #edeff1;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
	color: #1c1c1c;
	overflow: hidden;
	background-color: #ffffff;
}
.options-box-list ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.options-box-list i input[type='checkbox'] {
	width: 14px !important;
	height: 14px !important;
	display: flex !important;
}
.options-box-list .options-box-text label {
	position: relative;
	bottom: -0.4px;
}
.options-box-list ul li.options-box-item {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-transform: capitalize;
	white-space: nowrap;
	color: #878a8c;
	cursor: pointer;
	padding: 8px 16px 8px 8px;
	text-align: left;
	width: 100%;
}
.options-box-list ul li.options-box-item:not(:first-child) {
	border-top: 1px solid #edeff1;
}
.options-box-list ul li.options-box-item:hover {
	color: #1c1c1c;
	background-color: #e9f5fd;
}
.options-box-list ul li.options-box-item .options-box-icon {
	margin-right: 10px;
	font-size: 14px;
	display: flex;
} */
/* end-post-options */

/* Post picture */
.post-picture {
	width: 100%;
}
.post-picture .picture-container {
	width: 100%;
	height: 256px;
	position: relative;
}
.post-picture .picture-container .left-button,
.post-picture .picture-container .right-button {
	position: absolute;
}
.post-picture .picture-container .left-button {
	left: 16px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 24px;
	z-index: 2;
	height: 44px;
	width: 44px;
	padding: 16px;
	cursor: pointer;
	background: #fff;
	border-radius: 40px;
	box-shadow: 0 4px 14px rgb(0 0 0 / 10%);
	display: flex;
	justify-content: center;
	align-items: center;
}
.post-picture .picture-container .right-button {
	right: 16px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 24px;
	z-index: 2;
	height: 44px;
	width: 44px;
	padding: 16px;
	cursor: pointer;
	background: #fff;
	border-radius: 40px;
	box-shadow: 0 4px 14px rgb(0 0 0 / 10%);
	display: flex;
	justify-content: center;
	align-items: center;
}
.picture-number-box {
	display: flex;
	align-items: center;
	backdrop-filter: blur(40px);
	background: rgba(0, 0, 0, 0.5);
	border-radius: 50px;
	color: #fff;
	font-size: 12px;
	padding: 4px 8px;
	position: absolute;
	right: 16px;
	top: 16px;
	z-index: 5;
}
.post-picture .picture-container .pic-items ul {
	width: 100%;
	height: 100%;
	position: relative;
	justify-content: center;
	/* overflow: hidden; */
}
.post-picture .picture-container .pic-items li {
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	transition: left 0.25s;
}
.post-picture .post-footer {
	height: 40px;
	background-color: #edeff1;
	color: #222222;
	display: flex;
	width: 100%;
	align-items: center;
}
/* end post picture  */

/* tool tip  */
.post-tooltip {
	position: relative;
	display: inline-block;
	/* border-bottom: 1px dotted black; */
}

.post-tooltip .post-tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 10;
	bottom: 150%;
	left: 50%;
	margin-left: -60px;
}

.post-tooltip .post-tooltiptext::after {
	content: '';
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}

.post-tooltip:hover .post-tooltiptext {
	visibility: visible;
}
/* */
.post-title-link {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	margin: 4px 8px;
	white-space: nowrap;
	color: #3f9ade;
}
.post-title-link:hover {
	text-decoration: underline;
}
.flair-box {
	border-radius: 20px;
	padding: 2px 8px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	display: inline-block;
	margin-right: 5px;
	overflow: hidden;
	/* background-color: rgb(100, 109, 115);
	color: rgb(255, 255, 255); */
	width: fit-content;
	transition: background-color 0.25s;
	/* display: flex; */
}
.flair-box:hover {
	opacity: 85%;
}
/* Kind post */
.post-kind-post {
	padding: 5px 16px 5px 8px;
	max-width: 800px;
	font-size: 14px;
	color: #1c1c1c;
	padding-bottom: 0.25em;
}
.post-kind-post p {
	padding-bottom: 0.25em;
	font-size: 14px;
	color: #1c1c1c;
}
.post-kind-post :not(:first-child) {
	padding-top: 0.8em;
}
/* end kind post */
/* insights content */
.insights-content {
	padding: 16px 16px 8px 120px;
	display: flex;
	flex-direction: column;
	font-size: 12px;
}
.insights-content h3.insights-title {
	display: block;
	font-weight: 700;
	line-height: 16px;
	color: #1c1c1c;
	padding-right: 8px;
	padding-bottom: 4px;
	font-size: 12px;
}
.insight-header {
	padding-bottom: 8px;
}
.insights-content p.insights-p {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
span {
	display: inline-block;
}
.insights-content ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
}
.insights-content ul li {
	display: flex;
	align-items: center;
	flex-direction: column;
}
.insights-content ul li span:first-child {
	font-size: 22px;
	display: inline-block;
	font-weight: 500;
	line-height: 26px;
	color: #1c1c1c;
}
.insights-content ul li span:first-child i {
	/* color: #0079d3; */
	padding-left: 6px;
	font-size: 20px;
}
.insights-content ul li span:nth-child(2) {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
	margin-top: 2px;
	text-transform: capitalize;
}
/* end insights content */
.post-link-href {
	color: #ffffff;
}
a.post-link-href:hover {
	color: unset;
}
/* @media (max-width: 400px;); */
</style>
