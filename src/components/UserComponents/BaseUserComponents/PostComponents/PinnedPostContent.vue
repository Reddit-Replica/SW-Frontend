<template>
	<!-- <div class="pinned-post-container"> -->
	<div class="pinned-post-item">
		<div class="picture-post" v-if="pinnedPost.kind == 'image'">
			<picture-post :images="pinnedPost.images"></picture-post>
			<!-- <img src= alt="" /> -->
		</div>
		<div v-if="pinnedPost.kind == 'video'" class="video-post">
			<video-post :video-src="pinnedPost.video"></video-post>
		</div>
		<div class="pinned-post-item2">
			<div class="pinned-post-title">{{ pinnedPost.title }}</div>
			<div class="post-info">
				<div class="post-subreddit-icon">
					<i></i>
					<img src="" alt="" />
				</div>
				<router-link to=""> {{ 'r/' + pinnedPost.subreddit }} </router-link>
			</div>
			<div class="content-text" v-if="pinnedPost.kind === 'hybrid'">
				{{ PostHybridContent }}
			</div>
			<div
				class="content-text content-text-link"
				v-if="pinnedPost.kind === 'link'"
			>
				<a href="">{{ pinnedPost.link }}</a>
			</div>
			<div style="flex-grow: 1"></div>
			<div class="post-options">
				<post-options
					:post-data="{ data: pinnedPost }"
					pinned-post-flag="true"
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
		pinnedPost: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			PostHybridContent: {},
		};
	},
	methods: {
		setPostHybridContent() {
			let QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;
			console.log(this.pinnedPost.content);
			let deltaOps = this.pinnedPost.content.ops;
			let cfg = {};
			let converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
			console.log(converter.convert());
			this.PostHybridContent = converter.convert();
		},
	},
	watch: {
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
	color: #222222;
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
.picture-post {
	width: 100%;
	overflow: hidden;
	max-height: 176px;
}
.video-post {
	width: 100%;
	overflow: hidden;
	max-height: 176px;
}
</style>
