<template>
	<!-- <div class="pinned-post-container"> -->
	<div class="pinned-post-item" id="pinned-post-comp-pinned-post-item">
		<div
			class="picture-post"
			v-if="pinnedPost.kind == 'image'"
			id="pinned-post-comp-pinned-post-item-picture-post"
		>
			<picture-post :images="pinnedPost.images"></picture-post>
			<!-- <img src= alt="" /> -->
		</div>
		<div
			v-if="pinnedPost.kind == 'video'"
			class="video-post"
			id="pinned-post-comp-pinned-post-item-video-post"
		>
			<video-post :video-src="pinnedPost.video"></video-post>
		</div>
		<div
			class="content-text content-text-link link-post"
			v-if="pinnedPost.kind === 'link'"
			id="pinned-post-comp-pinned-post-item-link-post"
		>
			<div class="post-pic-box">
				<i id="postData-data-kind-link-icon"
					><i class="fa-solid fa-link"></i
				></i>
				<i
					id="postData-data-kind-post-hybrid-icon"
					style="z-index: 5; color: #ffffff; transform: translate(88px, 59px)"
					><a
						style="color: #ffffff"
						class="post-link-href"
						:href="pinnedPost.link"
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
			</div>
			<!-- <a href="">{{ pinnedPost.link }}</a> -->
		</div>
		<div class="pinned-post-item2">
			<div class="pinned-post-title">
				{{ pinnedPost.title }}
				<div class="post-status" id="base-user-post-status">
					<span
						id="base-user-post-content-spoiler-span"
						v-if="pinnedPost.spoiler"
						class="post-spoiler"
						><p>spoiler</p></span
					>
					<span
						id="base-user-post-content-nsfw-span"
						v-if="pinnedPost.nsfw"
						class="post-nsfw"
						><p>nsfw</p></span
					>
					<span v-if="0" id="base-user-post-content-oc-span" class="post-oc"
						><p>OC</p></span
					>
				</div>
			</div>
			<div class="post-info">
				<div
					class="post-subreddit-icon"
					id="post-picture-components-post-subreddit-icon"
				>
					<img
						id="post-picture-components-post-actual-subreddit-icon"
						v-if="getUserData.userData.picture != null"
						:src="$baseurl + '/' + getUserData.userData.picture"
						alt=""
					/>
					<img
						id="post-picture-components-post-default-subreddit-icon"
						v-else
						src="../../../../../img/default_inbox_avatar.png"
						alt=""
					/>
				</div>
				<router-link
					id="router-link-subreddit-handler"
					:to="routerLinkSubredditHandler"
				>
					{{
						pinnedPost.subreddit
							? `r/${pinnedPost.subreddit}`
							: `u/${pinnedPost.postedBy}`
					}}
				</router-link>
			</div>
			<div
				id="pinned-post-content-post-options-hybrid-content"
				v-html="PostHybridContent"
				class="content-text"
				v-if="pinnedPost.kind === 'hybrid'"
			></div>

			<div style="flex-grow: 1"></div>
			<div class="post-options" id="pinned-post-content-post-options">
				<post-options
					:post-data="{ data: pinnedPost, id: pinnedPost.id }"
					pinned-post-flag="true"
					:state="state"
				></post-options>
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>
<script>
import postOptions from './PostOptions.vue';
import PicturePost from './PicturePost.vue';
import VideoPost from './VideoPost.vue';

export default {
	components: {
		postOptions,
		PicturePost,
		VideoPost,
	},
	props: {
		// @vuese
		// to if the component use in the pinned page
		pinnedPost: {
			type: Object,
			required: true,
		},
		// @vuese
		// to know if the user is authenticated or not
		state: {
			type: String,
			required: true,
		},
	},
	computed: {
		/**
		 * @vuese
		 * return the all user data in the store
		 * @arg no arg
		 */
		getUserData() {
			return this.$store.getters['user/getUserData'];
		},
	},
	data() {
		return {
			PostHybridContent: {},
		};
	},
	mounted() {
		/**
		 * @vuese
		 * at the mounting we convert the post content from object to its html value
		 * @arg no arg
		 */
		this.setPostHybridContent();
	},
	methods: {
		/**
		 * @vuese
		 * handle the click on the subreddit button
		 * @arg no arg
		 */
		routerLinkSubredditHandler() {
			if (this.pinnedPost.subreddit) {
				return `/r/${this.pinnedPost.subreddit}`;
			} else return `/user/${this.pinnedPost.postedBy}`;
		},
		/**
		 * @vuese
		 * at the mounting we convert the post content from object to its html value
		 * @arg no arg
		 */
		setPostHybridContent() {
			if (this.pinnedPost.kind == 'hybrid') {
				let QuillDeltaToHtmlConverter =
					require('quill-delta-to-html').QuillDeltaToHtmlConverter;
				//console.log(this.pinnedPost.content);
				let deltaOps = this.pinnedPost.content.ops;
				let cfg = {};
				let converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
				//console.log(converter.convert());
				this.PostHybridContent = converter.convert();
			}
		},
	},
	watch: {
		/**
		 * @vuese
		 * watch when the post content change to get it html value
		 * @arg no arg
		 */
		'pinnedPost.content'() {
			this.setPostHybridContent();
		},
	},
};
</script>
<style scoped>
.content-text {
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
}
.content-text-link a {
	text-decoration: underline;
	color: #0079d3;
}
.content-text a:hover {
	color: #0079d3;
}
.bottom-vote-box {
	display: block;
}
header.pinned-posts,
header.pinned-posts h2 {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: #1c1c1c;
	margin-bottom: 16px;
	text-transform: capitalize;
	width: 100%;
}
.pinned-post-container {
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	flex: 1 1 auto;
	justify-content: space-between;
	column-gap: 8px;
}
.pinned-post-item {
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	box-sizing: border-box;
	height: 300px;
	margin-bottom: 8px;
	width: 316px;
	color: rgb(135, 138, 140);
	cursor: pointer;
	fill: rgb(135, 138, 140);
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	align-items: flex-start;
}
.pinned-post-item2 {
	padding: 12px 12px 4px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-grow: 1;
	width: 100%;
}
.pinned-post-item:hover {
	border: thin solid #1c1c1c;
}
.pinned-post-title {
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: #9b9b9b9b;
	display: inline;
	padding-right: 5px;
	word-wrap: break-word;
}
.post-info {
	margin: 4px 0;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	position: relative;
}
.post-info a {
	color: #7a7a7c;
}
.post-info a:hover {
	text-decoration: underline;
}
.post-subreddit-icon {
	width: 20px;
	height: 20px;
	background-color: #0079d3;
	border-radius: 50%;
	margin-right: 3px;
}
.picture-post,
.link-post {
	width: 100%;
	overflow: hidden;
	height: 176px;
}
.link-post {
	padding: 12px;
}
.video-post {
	width: 100%;
	overflow: hidden;
	max-height: 176px;
}
.post-pic-box {
	position: relative;
	display: block;
	overflow: hidden;
	width: 210px;
	height: 155px;
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
.post-subreddit-icon {
	margin-right: 4px;
}
.post-subreddit-icon img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.post-link-href {
	color: #ffffff;
}
a.post-link-href:hover {
	color: unset;
}
@media (max-width: 960px) {
	.pinned-post-container {
		justify-content: flex-start;
	}
}
.post-status {
	display: flex;
	align-items: center;
	display: inline-block;
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
</style>
