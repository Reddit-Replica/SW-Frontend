<template>
	<header class="pinned-posts">
		<h2>Pinned Posts</h2>
	</header>
	<div class="pinned-post-container">
		<div class="pinned-post-item">
			<div class="picture-post" v-if="kind == 'image'">
				<picture-post></picture-post>
				<!-- <img src= alt="" /> -->
			</div>
			<div v-if="kind == 'video'" class="video-post">
				<video-post></video-post>
			</div>
			<div class="pinned-post-item2">
				<div class="pinned-post-title">the first post</div>
				<div class="post-info">
					<div class="post-subreddit-icon">
						<i></i>
						<img src="" alt="" />
					</div>
					<router-link to=""> r/medo emad </router-link>
				</div>
				<div class="content-text" v-if="kind === 'text'"></div>
				<div style="flex-grow: 1"></div>
				<div class="post-options">
					<post-options
						:post-data="postData.children[0]"
						pinned-post-flag="true"
					></post-options>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import postOptions from './PostComponents/PostOptions.vue';
import PicturePost from './PostComponents/PicturePost.vue';
import VideoPost from './PostComponents/VideoPost.vue';
export default {
	components: {
		postOptions,
		PicturePost,
		VideoPost,
	},
	data() {
		return {
			kind: 'video',
			postData: {
				after: 'string',
				before: 'string',
				children: [
					{
						id: 'string',
						data: {
							kind: 'link',
							title: 'string',
							subreddit: 'string',
							link: 'string',
							images: [
								{
									path: 'string',
									caption: 'string',
									link: 'string',
								},
							],
							video: 'string',
							content: {},
							nsfw: true,
							spoiler: true,
							sharePostId: 'string',
							flair: {
								id: 'string',
								flairName: 'string',
								order: 0,
								backgroundColor: 'string',
								textColor: 'string',
							},
							comments: 0,
							votes: 0,
							postedAt: 'string',
							sendReplies: true,
							markedSpam: true,
							suggestedSort: 'string',
							editedAt: 'string',
							postedBy: 'string',
							votingType: 1,
							saved: false,
							followed: false,
							hidden: false,
							spammed: false,
							inYourSubreddit: false,
							moderation: {
								approve: {
									approvedBy: 'string',
									approvedDate: '2019-08-24T14:15:22Z',
								},
								remove: {
									removedBy: 'string',
									removedDate: '2019-08-24T14:15:22Z',
								},
								spam: {
									spammedBy: 'string',
									spammedDate: '2019-08-24T14:15:22Z',
								},
								lock: true,
							},
						},
					},
				],
			},
		};
	},
};
</script>
<style scoped>
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
