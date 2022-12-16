<template>
	<div class="subreddit-info">
		<span class="subreddit-image"
			><img
				src="../../../img/user-image.jpg"
				alt=""
				v-if="post.subreddit != undefined"
		/></span>
		<span class="subreddit-name" v-if="true">
			<router-link
				:to="{
					name: 'subreddit',
					params: { subredditName: post.subreddit != undefined },
				}"
				id="subreddit-route"
				>{{ post.subreddit }} </router-link
			>.
		</span>
		<span>
			<span v-if="post.kind == 'post'"
				><font-awesome-icon
					icon="fa-solid fa-code-branch"
					class="crosspost-icon"
				/>Crossposted by
			</span>
			<span v-else>Posted by .</span>
			<router-link
				v-if="post.postedBy != undefined"
				:to="{ name: 'user', params: { userName: post.postedBy } }"
				id="post-by-router"
			>
				{{ post.postedBy }} </router-link
			>&nbsp;{{ calculateTime }} ago
		</span>
	</div>

	<div class="post-title">
		<h3>{{ post.title }}</h3>
	</div>
	<div
		class="post-text"
		v-html="renderingHTML"
		v-if="post.content != undefined"
	></div>
	<div v-if="post.link != undefined" class="post-link">
		<router-link :to="post.link">{{ post.link }}</router-link>
	</div>
	<div class="post-post" v-if="post.kind == 'post'">
		<post-content :post="post.sharedPostDetails"></post-content>
	</div>
	<img
		v-for="image in post.images"
		class="post-image"
		:key="image.id"
		:src="this.$baseurl + '/' + image.path"
		alt=""
	/>
	<video width="800" height="500" controls v-if="post.video != undefined">
		<source :src="this.$baseurl + '/' + post.video" />
	</video>
</template>
<script>
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
	name: 'PostContent',
	props: {
		//@vuese
		//post object that will get displayed in this post component
		post: {
			required: true,
		},
	},
	computed: {
		renderingHTML() {
			var QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;

			var deltaOps = this.post.content.ops;

			var cfg = {};

			var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

			var html = converter.convert();
			return html;
		},
		calculateTime() {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.post.postedAt);
			if (currentDate.getMonth() != myTime.getMonth()) {
				returnValue = currentDate.getMonth() - myTime.getMonth() + ' Month ago';
			} else if (currentDate.getDate() != myTime.getDate()) {
				returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
			} else if (currentDate.getHours() != myTime.getHours()) {
				returnValue = currentDate.getHours() - myTime.getHours() + ' Hours ago';
			} else if (currentDate.getMinutes() != myTime.getMinutes()) {
				returnValue =
					currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
			} else {
				returnValue = 'Just now';
			}
			return returnValue;
		},
	},
	methods: {
		click() {
			console.log(this.subreddit);
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
	mask-image: linear-gradient(180deg, #000 0%, transparent);
	overflow: hidden;
	font-size: 12px;
}
.subreddit-info .subreddit-image img {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}
.post-text {
	width: 100%;
	overflow: auto;
	height: 100%;
	word-break: break-all;
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

.subreddit-info span:nth-of-type(3),
.subreddit-info #post-by-router {
	color: var(--color-grey-dark-2);
}

.subreddit-info #post-by-router:hover {
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
video,
.post-image {
	width: 100%;
	height: auto;
}
.post-link {
	font-size: 12px;
}
.post-link:hover {
	font-size: 12px;
	text-decoration: underline;
}
</style>
