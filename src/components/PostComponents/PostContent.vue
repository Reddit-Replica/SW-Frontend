<template>
	<div class="subreddit-info">
		<span class="subreddit-image"
			><img src="../../../img/user-image.jpg" alt=""
		/></span>
		<span class="subreddit-name">
			<router-link
				:to="{
					name: 'subreddit',
					params: { subredditName: post.subreddit },
				}"
				id="subreddit-router"
				>{{ post.subreddit }}
			</router-link>
		</span>
		<span>
			<span v-if="post.kind == 'post'"
				><font-awesome-icon
					icon="fa-solid fa-code-branch"
					class="crosspost-icon"
				/>Crossposted by
			</span>
			<span v-else>. Posted by .</span>
			<router-link
				:to="{ name: 'user', params: { userName: post.postedBy } }"
				id="post-by-router"
			>
				{{ post.postedBy }} </router-link
			>&nbsp;{{ post.postedAt }} ago
		</span>
	</div>
	<!-- <router-link
		:to="{
			name: 'comments',
			params: {
				postName: post.title,
				subredditName: post.subreddit,
				postId: post.id,
			},
		}"
		id="post-router"
	> -->
	<div class="post-title">
		<h3>{{ post.title }}</h3>
	</div>
	<div class="post-text" v-if="post.kind == 'text'">
		{{ post.content }}
	</div>
	<div class="post-post" v-else-if="post.kind == 'post'">
		<post-content :post="post.sharedPostDetails"></post-content>
	</div>
	<img
		v-for="image in post.images"
		:key="image.id"
		:src="this.$baseurl + '/' + image.path"
		alt=""
	/>
	<video width="800" height="500" controls v-if="post.kind == 'video'">
		<source :src="this.$baseurl + '/' + postDetails.video" />
	</video>
	<!-- </router-link> -->
</template>
<script>
export default {
	name: 'PostContent',
	props: {
		//@vuese
		//post object that will get displayed in this post component
		post: {
			type: Object,
			required: true,
		},
	},
};
</script>
<style scoped>
.post-content .post-title h3 {
	color: black;
	margin: 10px 0px;
}

.post-content .post-text {
	color: black;
	mask-image: linear-gradient(180deg, #000 60%, transparent);
	overflow: hidden;
	font-size: 12px;
}
.post-card .subreddit-info .subreddit-image img {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

.post-card .subreddit-info .subreddit-image {
	padding-right: 5px;
}

.post-card .subreddit-info .subreddit-name a {
	font-weight: 700;
	color: black;
}

.post-card .subreddit-info .subreddit-name a:hover {
	text-decoration: underline;
}

.post-card .subreddit-info span:nth-of-type(3),
.post-card .subreddit-info span:nth-of-type(3) a {
	color: var(--color-grey-dark-2);
}

.post-card .subreddit-info span:nth-of-type(3) a:hover {
	text-decoration: underline;
}
.crosspost-icon {
	transform: rotate(90deg);
	margin: 0 5px;
}
.post-post {
	border: 1px solid var(--color-grey-light-8);
	border-radius: 5px;
}
</style>
