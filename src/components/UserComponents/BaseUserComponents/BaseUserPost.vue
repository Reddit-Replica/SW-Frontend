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
									bottom: 0px;
									right: 0px;
									z-index: 2;
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
									>{{ postData.data.link.substring(0, 20) }}/<i
										class="fa-solid fa-arrow-up-right-from-square"
									></i
								></a>
								<a
									v-else-if="postData.data.kind == 'post'"
									class="post-title-link"
									id="base21565-user-post-data-link"
									:href="CrossPostLinkHandler"
									target="_blank"
									>{{ postData.data.link.substring(0, 20) }}/<i
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
												? `/user/${postData.data.postedBy}`
												: `/r/${postData.data.subreddit}`
										"
										>{{
											postData.data.subreddit == null
												? `u/${postData.data.postedBy}`
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
									:page="page"
									:state="state"
									@emit-popup="emitPopup"
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
	props: {
		// @vuese
		// postData the full post Data
		postData: {
			type: Object,
			required: true,
		},
		post: {
			type: Object,
			required: true,
		},
		// @vuese
		// state authenticated or not
		state: {
			type: Object,
			required: true,
		},
		// @vuese
		// page which page the component used
		page: {
			type: String,
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
			lastLeftPic: 0,
			lastRightPic: 0,
			insightActive: false,
			insightsLoading: false,
			PostHybridContent: '',
		};
	},
	emits: ['emitPopup'],
	methods: {
		/**
		 * @vuese
		 * emits action to show popup
		 * @arg no arg
		 */
		emitPopup(id, message) {
			this.$emit('emitPopup', id, message);
		},
		/**
		 * @vuese
		 * handle the route of the cross post
		 * @arg no arg
		 */
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
		/**
		 * @vuese
		 * handle the route of the post flair
		 * @arg no arg
		 */
		postFlairRouteHandler() {
			this.$router.push({
				path: `/r/${this.postData.data.subreddit}`,
				query: {
					f: `flair_name ${this.postData.data.flair.flairName}`,
				},
			});
		},
		/**
		 * @vuese
		 * convert from standard date to the moment from now
		 * @arg date the date to be converted
		 */
		getMoment(date) {
			return moment(date).fromNow();
		},
		/**
		 * @vuese
		 * get abbreviation of the number (convert to K,M)
		 * @arg num the number to be converted
		 */
		getAbbreviationsOfNumber(num) {
			var abbreviate = require('number-abbreviate');
			console.log(num);
			return abbreviate(num, 2); // => 1k
		},
		/**
		 * @vuese
		 * get the content of the hybrid post
		 * @arg no arg
		 */
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
		/**
		 * @vuese
		 * toggle the view of the insights post
		 * @arg no arg
		 */
		async insightsPostToggle(id) {
			this.insightsLoading = true;
			this.insightActive = !this.insightActive;
			this.showPostContent = false;
			if (this.insightActive) await this.RequestInsightsData(id);
			this.insightsLoading = false;
		},
		/**
		 * @vuese
		 * Request the insights data
		 * @arg no arg
		 */
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
		// savePost() {
		// 	if (this.state == 'unauth') {
		// 		this.$router.push('/');
		// 		return;
		// 	}
		// 	console.log('save');
		// },
		// sharePost() {
		// 	if (this.state == 'unauth') {
		// 		this.$router.push('/');
		// 		return;
		// 	}
		// 	console.log('share');
		// 	// this.showShareOptions = true;
		// },
		/**
		 * @vuese
		 * hide the deleted post from the page
		 * @arg no arg
		 */
		deletePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			console.log('delete,base');
			/* call the End point */
			this.deletedHiddenPost = true;
		},
		/**
		 * @vuese
		 * hide the hidden post from the page
		 * @arg no arg
		 */
		hidePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			console.log('hide,base');
			/* call the End point */
			this.deletedHiddenPost = true;
		},
		/**
		 * @vuese
		 * expand Post to show its content
		 * @arg no arg
		 */
		expandPostContent() {
			this.setPostHybridContent();
			this.showPostContent = true;
			this.insightActive = false;
		},
		/**
		 * @vuese
		 * collapse post to hide its details content
		 * @arg no arg
		 */
		collapsePostContent() {
			this.showPostContent = false;
			this.insightActive = false;
		},
		/**
		 * @vuese
		 * handel the request upvote to the post
		 * @arg no arg
		 */
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
		/**
		 * @vuese
		 * handel the request downvote to the post
		 * @arg no arg
		 */
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
.base-profile-post .box {
	border: thin solid #ccc;
	margin-bottom: -1px;
	cursor: pointer;
	background-color: var(--color-grey-light-2);
	transition: color 0.5s, fill 0.5s, box-shadow 0.5s;
}
.base-profile-post {
	position: relative;
}
.base-profile-post .box {
	position: relative;
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
	justify-content: flex-start;
	background-color: #ccc;
	background-color: var(--color-grey-light-2);
	padding: 8px 0px 8px 0px;
}

.post-card div.vote-box {
	text-align: center;
	border-radius: 0px 0px 0px 0px !important;
	background-color: var(--color-grey-light-2);
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
	#base-user-post-content {
		flex: 1 !important;
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
.post-picture-container {
	width: 100%;
}
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
</style>
