<template>
	<header class="pinned-posts">
		<h2>Pinned Posts</h2>
	</header>
	<div class="pinned-post-container">
		<pinned-post-content
			v-for="pinnedPost in pinnedPostsData"
			:key="pinnedPost._id"
			:pinned-post="pinnedPost"
			:state="state"
		></pinned-post-content>
	</div>
</template>
<script>
import PinnedPostContent from './PostComponents/PinnedPostContent.vue';
export default {
	components: {
		PinnedPostContent,
	},
	props: {
		// pinnedPost: {
		// 	type: Object,
		// 	required: true,
		// },
		// @vuese
		// pinnedPostsData the full pinned post Data
		pinnedPostsData: {
			type: Object,
			required: true,
		},
		state: {
			type: String,
			required: true,
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
@media (max-width: 960px) {
	.pinned-post-container {
		justify-content: flex-start;
	}
}
</style>
