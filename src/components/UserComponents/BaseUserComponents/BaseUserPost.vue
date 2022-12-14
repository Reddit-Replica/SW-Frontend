<template>
	<div v-if="!deletedHiddenPost" class="base-profile-post" @resize="resizePost">
		<div class="box">
			<div class="box-items">
				<!-- <div class="voting-box"></div> -->
				<div class="vote-box left-vote-box">
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
							{{ getAbbreviationsOfNumber(counter) }}
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
				<div class="main-post-container" id="main-post-container">
					<div class="main-box">
						<div class="post-pic-box">
							<i
								v-if="postData.data.kind == 'image'"
								id="postData-data-kind-image-icon"
								><i class="fa-regular fa-file-image"></i
							></i>
							<i
								v-else-if="postData.data.kind == 'link'"
								id="postData-data-kind-link-icon"
								><i class="fa-solid fa-link"></i
							></i>
							<i
								v-else-if="
									postData.data.kind == 'hybrid' || postData.data.kind == 'post'
								"
								id="postData-data-hybrid-post-icon"
								><i class="fa-regular fa-bookmark"></i
							></i>
							<i
								v-else-if="postData.data.kind == 'video'"
								id="postData-data-kind-video-icon"
								><i class="fa-solid fa-clapperboard"></i
							></i>

							<i
								id="postData-data-kind-post-hybrid-icon"
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
							<img
								v-if="
									postData.data.kind == 'image' &&
									postData.data.images[0] != null &&
									postData.data.images[0].path != null
								"
								:style="[
									postData.data.nsfw || postData.data.spoiler
										? 'filter: blur(60px);'
										: '',
								]"
								:src="$baseurl + '/' + postData.data.images[0].path"
								alt=""
							/>
							<div
								id="expand-collapse-media-query"
								style="
									display: none;
									position: absolute;
									bottom: -25px;
									right: -3px;
								"
							>
								<li
									style="
										width: 25px;
										height: 25px;
										align-items: center;
										justify-content: center;
									"
									class="post-option-item post-option-item-hover2"
								>
									<div
										v-if="!showPostContent && postData.data.kind != 'link'"
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
											style="width: 19px; height: 16px"
											class="fa-solid fa-up-right-and-down-left-from-center"
										></i>
									</div>
									<div
										v-else-if="postData.data.kind != 'link'"
										@click="collapsePostContent"
										class="post-options-icon"
									>
										<i
											style="
												transform: rotate(90deg);
												stroke-width: 35px;
												stroke: rgb(135, 138, 140);
												color: transparent;
												width: 19px;
												height: 16px;
											"
											class="fa-solid fa-down-left-and-up-right-to-center"
										></i>
									</div>
								</li>
							</div>
						</div>
						<div class="post-content" id="base-user-post-content">
							<div class="post-header">
								<div class="post-title" id="base-user-post-title">
									<h3>{{ postData.data.title }}</h3>
								</div>
								<a
									v-if="postData.data.kind == 'link'"
									class="post-title-link"
									id="base-user-post-data-link"
									:href="postData.data.link"
									target="_blank"
									>{{ postData.data.link }}/<i
										class="fa-solid fa-arrow-up-right-from-square"
									></i
								></a>
								<a
									v-else-if="postData.data.kind == 'post'"
									class="post-title-link"
									id="base21565-user-post-data-link"
									:href="CrossPostLinkHandler"
									target="_blank"
									>{{ postData.data.link }}/<i
										class="fa-solid fa-arrow-up-right-from-square"
									></i
								></a>
								<div class="post-status" id="base-user-post-status">
									<router-link
										id="base-user-post-flair-link"
										v-if="postData.data.flair"
										to=""
										@click="postFlairRouteHandler"
										class="flair-box"
										:style="`background-color :${postData.data.flair.backgroundColor};
										color : ${postData.data.flair.textColor};
										`"
										>{{ postData.data.flair.flairName }}</router-link
									>
									<span
										id="base-user-post-content-spoiler-span"
										v-if="postData.data.spoiler"
										class="post-spoiler"
										><p>spoiler</p></span
									>
									<span
										id="base-user-post-content-nsfw-span"
										v-if="postData.data.nsfw"
										class="post-nsfw"
										><p>nsfw</p></span
									>
									<span id="base-user-post-content-oc-span" class="post-oc"
										><p>OC</p></span
									>
								</div>
							</div>
							<div class="post-user-information">
								<div class="post-user-name">
									<router-link
										id="base-user-post-content-post-user-name"
										:to="
											postData.data.subreddit == null
												? `/user/${$route.params.userName}`
												: `/r/${postData.data.subreddit}`
										"
										>{{
											postData.data.subreddit == null
												? `u/${$route.params.userName}`
												: `r/${postData.data.subreddit}`
										}}</router-link
									>
								</div>
								<div class="posted-by" id="base-user-post-content-posted-by">
									<span class="posted-by-unhovered">
										<i
											v-if="postData.data.kind == 'post'"
											style="
												transform: rotate(133deg);
												margin-right: 2px;
												color: #0079d3;
											"
											class="fa-solid fa-arrows-split-up-and-left"
										></i>
										{{
											postData.data.kind == 'post'
												? 'Crossposted by'
												: 'posted by'
										}}</span
									>
									<router-link
										style="margin-left: 3px"
										:to="`/user/${postData.data.postedBy}`"
										>{{ postData.data.postedBy }}
									</router-link>
								</div>
								<div id="base-user-post-content-posted-posted-at">
									{{ getMoment(postData.data.postedAt) }}
									<moderation-title
										v-if="postData.data.moderation != null"
										:moderation="postData.data.moderation"
										:pinned-post="postData.data.pin"
									></moderation-title>
									<!-- <div
										id="base-user-data-moderation-spam-spammedBy"
										v-if="
											postData.data.moderation != null &&
											postData.data.moderation.spam != null &&
											postData.data.moderation.spam.spammedBy != null
										"
										class="post-tooltip"
									>
										<i
											class="fa-regular fa-calendar-xmark"
											style="color: #ff585b"
										></i>
										<span
											class="post-tooltiptext"
											id="base-user-post-data-moderation-spam-spammedBy-tool-tip"
											>Spammed by
											{{ postData.data.moderation.spam.spammedBy }} at
											{{ postData.data.moderation.spam.spammedDate }}</span
										>
									</div>
									<div
										id="base-user-data-moderation-lock-lockedBy"
										v-if="
											postData.data.moderation != null &&
											postData.data.moderation.lock != null &&
											postData.data.moderation.lock
										"
										class="post-tooltip"
									>
										<i
											id="base-user-data-moderation-lock-lockedBy-icon"
											class="fa-solid fa-lock"
											style="color: #ffd635"
										></i>
										<span
											id="base-user-data-moderation-lock-lockedBy-tool-tip"
											class="post-tooltiptext"
											>Comments are locked</span
										>
									</div>
									<div
										id="base-user-data-moderation-pin-pinnedBy"
										v-if="postData.data.pin"
										class="post-tooltip"
									>
										<i class="fa-solid fa-thumbtack" style="color: #46d160"></i>
										<span class="post-tooltiptext">post are Pinned</span>
									</div>
									<div
										id="base-user-data-moderation-remove-removedBy"
										v-if="
											postData.data.moderation != null &&
											postData.data.moderation.remove != null &&
											postData.data.moderation.remove.removedBy != null
										"
										class="post-tooltip"
									>
										<i
											id="base-user-data-moderation-icon-removedBy"
											style="color: #ff585b"
											class="fa-solid fa-ban"
										></i>
										<span
											class="post-tooltiptext"
											id="base-user-data-moderation-remove-removedBy-tool-tip"
											>Removed by
											{{ postData.data.moderation.remove.removedBy }} at
											{{ postData.data.moderation.remove.removedDate }}</span
										>
									</div>
									<div
										id="base-user-data-moderation-approve-approveBy"
										v-if="
											postData.data.moderation != null &&
											postData.data.moderation.approve != null &&
											postData.data.moderation.approve.approvedBy != null
										"
										class="post-tooltip"
									>
										<i
											id="base-user-data-moderation-approve-approvedBy-icon"
											class="fa-solid fa-check"
											style="color: #46d160"
										></i>
										<span
											class="post-tooltiptext"
											id="base-user-data-moderation-approve-approvedBy-tool-tip"
											>Approved by
											{{ postData.data.moderation.approve.approvedBy }}
											at
											{{ postData.data.moderation.approve.approvedDate }}</span
										>
									</div> -->
								</div>
							</div>
							<div class="post-options">
								<post-options
									:post-data="postData"
									@insights-toggle="insightsPostToggle(postData.id)"
									@expand-post="expandPostContent"
									@collapse-post="collapsePostContent"
									@delete-post="deletePost"
									@hide-post="hidePost"
									@save-post="savePost"
									@share-post="sharePost"
								></post-options>
							</div>
						</div>
					</div>
					<div
						class="post-contents"
						style="overflow: hidden"
						v-if="showPostContent"
						id="base-user-data-show-Post-Content"
					>
						<div
							class="post-picture-container"
							v-if="postData.data.kind == 'image'"
							id="base-user-data-post-picture-iii-container"
						>
							<picture-post
								:images="postData.data.images"
								:nsfw-flag="postData.data.nsfw"
								:spoiler-flag="postData.data.spoiler"
							></picture-post>
						</div>
						<div
							v-else-if="postData.data.kind == 'hybrid'"
							class="paragraph-post"
							id="base-user-data-post-paragraph-post"
						>
							<div
								class="post-kind-post"
								id="base-user-data-post-post-kind-post"
								v-html="PostHybridContent"
							></div>
						</div>
						<div
							class="video"
							id="base-user-data-post-video-container"
							v-else-if="postData.data.kind == 'video'"
						>
							<video-post :video-src="postData.data.video"></video-post>
						</div>
					</div>
					<div class="post-insight" v-else-if="insightActive">
						<div
							id="base-user-data-post-insights-spinner"
							style="display: flex"
							v-if="insightsLoading"
						>
							<the-spinner
								style="margin-left: auto; margin-right: auto"
							></the-spinner>
						</div>
						<div
							v-else
							class="insights-content"
							id="base-user-data-post-insights-content"
						>
							<the-insights></the-insights>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as moment from 'moment';
import PostOptions from './PostComponents/PostOptions.vue';
import VideoPost from './PostComponents/VideoPost.vue';
import PicturePost from './PostComponents/PicturePost.vue';
import TheInsights from './PostComponents/TheInsights.vue';
import ModerationTitle from './PostComponents/ModerationTitle.vue';
export default {
	components: {
		PostOptions,
		VideoPost,
		PicturePost,
		TheInsights,
		ModerationTitle,
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
		state: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			counter: this.postData.data.votes,
			upClicked: this.postData.data.votingType == 1 ? true : false,
			downClicked: this.postData.data.votingType == -1 ? true : false,
			postHidden: false,
			showPostContent: false,
			deletedHiddenPost: false,
			// images: [
			// 	{
			// 		imgUrl: '../../../assets/R.png',
			// 		left: '0',
			// 	},
			// 	{
			// 		imgUrl: '../../../assets/R.png',
			// 		left: '100',
			// 	},
			// 	{
			// 		imgUrl: '../../../assets/R.png',
			// 		left: '200',
			// 	},
			// ],
			lastLeftPic: 0,
			lastRightPic: 0,
			insightActive: false,
			insightsLoading: false,
			PostHybridContent: '',
		};
	},
	created() {
		// this.lastLeftPic = this.images.length - 1;
	},
	mounted() {},
	computed: {},
	methods: {
		CrossPostLinkHandler() {
			if (this.postData.data.subreddit)
				return (
					this.$baseurl +
					'/r' +
					this.postData.data.subreddit +
					'/comments/' +
					this.postData.data.sharePostId +
					'/' +
					this.postData.data.title
				);
			else {
				return (
					this.$baseurl +
					'/user/' +
					this.postData.data.postedBy +
					'/comments/' +
					this.postData.data.sharePostId +
					'/' +
					this.postData.data.title
				);
			}
		},
		postFlairRouteHandler() {
			this.$router.push({
				path: `/r/${this.postData.data.subreddit}`,
				query: {
					f: `flair_name ${this.postData.data.flair.flairName}`,
				},
			});
		},
		getMoment(date) {
			return moment(date).fromNow();
		},
		getAbbreviationsOfNumber(num) {
			var abbreviate = require('number-abbreviate');
			console.log(num);
			return abbreviate(num, 2); // => 1k
		},
		setPostHybridContent() {
			if (this.postData.data.kind == 'hybrid') {
				let QuillDeltaToHtmlConverter =
					require('quill-delta-to-html').QuillDeltaToHtmlConverter;
				console.log(this.postData.data.content);
				let deltaOps = this.postData.data.content.ops;
				let cfg = {};
				let converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
				console.log(converter.convert());
				this.PostHybridContent = converter.convert();
			}
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
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			console.log('save');
		},
		// removePost() {
		// 	console.log('remove');
		// },
		sharePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			console.log('share');
			// this.showShareOptions = true;
		},
		CopyPostLink() {},
		Crosspost() {},
		editPost() {
			console.log('edit');
		},
		pinPostToProfile() {
			console.log('pin');
		},
		deletePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			console.log('delete,base');
			/* call the End point */
			this.deletedHiddenPost = true;
		},
		hidePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			console.log('hide,base');
			/* call the End point */
			this.deletedHiddenPost = true;
		},
		// markAsOC() {
		// 	console.log('mark as os');
		// },
		// markAsSpoiler() {
		// 	console.log('mark as spoiler');
		// },
		// markAsNSFW() {
		// 	console.log('mark as nsfw');
		// },

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
		expandPostContent() {
			this.setPostHybridContent();
			this.showPostContent = true;
			this.insightActive = false;
		},
		collapsePostContent() {
			this.showPostContent = false;
			this.insightActive = false;
		},
		async upvote() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
				try {
					await this.$store.dispatch('postCommentActions/vote', {
						baseurl: this.$baseurl,
						id: this.postData.id,
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
		},
		async downvote() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
				try {
					await this.$store.dispatch('postCommentActions/vote', {
						baseurl: this.$baseurl,
						id: this.postData.id,
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
	/* overflow: hidden; */
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
	#expand-collapse-media-query {
		display: block !important;
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
li.post-option-item,
.post-option-item-hover {
	/* padding: 8px; */
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}

.post-option-item .post-options-text,
.post-option-item-hover .post-options-text {
	margin-left: 6px;
}
li.post-option-item p,
.post-option-item-hover p {
	font-size: 12px;
}
li.post-option-item-hover2:hover,
.post-option-item-hover:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
li.post-option-item {
	display: flex;
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
/* .post-picture {
	width: 100%;
} */
.post-picture-container {
	width: 100%;
}
/* .post-picture .picture-container {
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
} */
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
