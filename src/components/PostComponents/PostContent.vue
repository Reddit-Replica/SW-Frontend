<template>
	<div :style="shared ? 'padding: 30px' : 'padding:0'">
		<div class="subreddit-info">
			<span class="subreddit-image">
				<img
					src="../../../img/default_subreddit_image.png"
					alt=""
					v-if="post.subreddit != undefined && subreddit.picture == undefined"
				/>
				<img
					v-else-if="
						post.subreddit != undefined && subreddit.picture != undefined
					"
					:src="$baseurl + '/' + post.picture"
					alt=""
				/>
			</span>
			<span class="subreddit-name" v-if="post.subreddit != undefined">
				<router-link :to="'/r/' + post.subreddit" id="subreddit-route"
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
				>&nbsp;{{ calculateTime }}
			</span>
		</div>

		<div class="post-title">
			<h3>
				{{ post.title }}
				<base-button
					v-if="post.flair != undefined || post.flair != null"
					class="flair"
					:button-text="post.flair.flairName"
					:style="{
						color: post.flair.textColor,
						background: post.flair.backgroundColor,
					}"
				/>
			</h3>
		</div>
		<div v-if="!editing">
			<div
				class="post-text"
				v-html="renderingHTML"
				v-if="post.content != undefined"
				:class="{ blur: blur }"
			></div>
			<div v-if="post.link != undefined" class="post-link">
				<router-link :to="post.link">{{ post.link }}</router-link>
			</div>
			<div class="post-post" v-if="post.kind == 'post'">
				<post-content
					:post="post.sharedPostDetails"
					:shared="true"
				></post-content>
			</div>
			<div class="images">
				<picture-post
					:images="post.images"
					v-if="post.images.length > 1"
				></picture-post>
				<img
					v-else
					v-for="image in post.images"
					class="post-image"
					:key="image.id"
					:src="this.$baseurl + '/' + image.path"
					alt=""
				/>
			</div>
			<video width="800" height="500" controls v-if="post.video != undefined">
				<source :src="this.$baseurl + '/' + post.video" />
			</video>
			<div v-if="shared">
				{{ post.votes }} points .
				<router-link
					:to="
						post.subreddit != undefined
							? {
									name: 'comments',
									params: {
										postName: post.title,
										subredditName: post.subreddit,
										postId: post.id,
									},
							  }
							: {
									name: 'userPostComments',
									params: {
										userName: post.postedBy,
										postName: post.title,
										postId: post.id,
									},
							  }
					"
					>{{ post.comments }} comments</router-link
				>
			</div>
		</div>
	</div>
</template>
<script>
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import PicturePost from '../UserComponents/BaseUserComponents/PostComponents/PicturePost.vue';
export default {
	// beforeMount() {
	// 	if(post.kind=='post') {

	// 	}
	// },
	async beforeMount() {
		//document.querySelector('img.ql-image').style.width = '100%';
		//var element = document.querySelector('img.ql-image');
		// var element = document.querySelector('img');
		// Set style attribute with properties for the selected element
		// element.setAttribute('style', 'width:100%');
		if (this.post.subreddit != undefined) {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/getSubreddit', {
				subredditName: this.post.subreddit,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.subreddit = this.$store.getters['community/getSubreddit'];
		}
	},
	data() {
		return {
			subreddit: {},
		};
	},
	name: 'PostContent',
	components: {
		PicturePost,
	},
	props: {
		//@vuese
		//post object that will get displayed in this post component
		post: {
			required: false,
		},
		blur: {
			required: false,
			type: Boolean,
		},
		shared: {
			required: false,
			type: Boolean,
		},
		editing: {
			required: false,
			type: Boolean,
			default: false,
		},
	},
	computed: {
		renderingHTML() {
			var QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;

			var deltaOps = this.blur
				? this.post.content.ops.slice(0, this.post.content.ops.length / 2 + 1)
				: this.post.content.ops;

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
.images {
	overflow: hidden;
}
.post-content .post-title h3 {
	color: black;
	margin: 10px 0px;
}

.post-content .post-text {
	color: black;
	overflow: hidden;
	font-size: 12px;
}
.blur {
	mask-image: linear-gradient(180deg, #000 0%, transparent);
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
.post-text p img {
	width: 100%;
}
p img .ql-image {
	width: 100%;
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
div:last-of-type a {
	color: var(--color-grey-dark-2);
}
div:last-of-type a:hover {
	text-decoration: underline;
}
img.ql-image {
	width: 5px;
}
.flair {
	min-height: 10px;
	min-width: 30px;
	font-size: 9px;
	width: max-content;
	height: max-content;
	padding: 2px;
}
</style>
