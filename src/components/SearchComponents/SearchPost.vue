<template>
	<div>
		<div>
			<div
				class="hole-post"
				style="
					color: rgb(135, 138, 140);
					cursor: pointer;
					fill: rgb(135, 138, 140);
				"
			>
				<div class="hole-post-2">
					<div v-if="!(posts && posts.length == 0)">
						<div class="post-release" v-for="value in posts" :key="value.id">
							<div class="post-name-bar">
								<div class="community-name">
									<a class="comm-name" :href="'/r/' + value.subreddit">
										r/{{ value.subreddit }} &nbsp;</a
									>
									<div class="aligning"></div>
								</div>
								<span class="point-center" role="presentation">•&nbsp;</span>
								<div class="posted-user">
									<span class="posted-word" style="color: rgb(120, 124, 126)">
										&nbsp;Posted by&nbsp;
									</span>
									<div>
										<a
											class="posted-username"
											style="color: rgb(120, 124, 126)"
											:href="'/user/' + value.postedBy"
											>u/{{ value.postedBy }}&nbsp;</a
										>
									</div>
									<span class="time" style="color: rgb(120, 124, 126)"
										>{{ this.calculateTime(value.postedAt) }}&nbsp;</span
									>
								</div>
							</div>
							<div
								class="point"
								@click="
									gotocomment(
										value.id,
										value.title,
										value.subreddit,
										value.postedBy
									)
								"
							>
								<div class="written-post">
									<div>
										<div class="posts-words">
											<div class="author">
												<a class="main-post"
													><div
														class="inside-post"
														style="--posttitletextcolor: #1a1a1b"
													>
														<h3 class="header-3">
															{{ value.title }}
														</h3>
													</div></a
												>
											</div>
											<div
												class="image-class"
												v-if="value.images && value.images.length != 0"
											>
												<img alt="" style="width: 1px; height: 1px" />
											</div>
											<div class="link-class" v-if="value.link">
												<a :href="value.link">{{ value.link }}</a>
											</div>
										</div>
									</div>
								</div>
								<div class="bottom-bar">
									<span class="votes">{{ value.votes }} upvotes&nbsp;</span
									><span class="comments"
										>{{ value.components }} comments&nbsp;</span
									>
								</div>
							</div>
						</div>
					</div>
					<div class="not-div" v-else>
						<Notfound></Notfound>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PostContent from '../PostComponents/PostContent.vue';
import Notfound from '../../components/SearchComponents/NotFound.vue';
export default {
	props: {
		posts: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			not_Found: false,
		};
	},
	computed: {
		SearchedPosts() {
			console.log(this.$store.getters['search/GetPosts']);
			return this.$store.getters['search/GetPosts'];
		},
	},
	methods: {
		gotocomment(id, title, sub, postman) {
			if (sub != null) {
				this.$router.push(`/r/${sub}/comments/${id}/${title}`);
			} else {
				this.$router.push(`/user/${postman}/comments/${id}/${title}`);
			}
		},
		calculateTime(time) {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(time);
			if (currentDate.getFullYear() != myTime.getFullYear()) {
				returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			} else if (currentDate.getMonth() != myTime.getMonth()) {
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
	components: {
		Notfound,
	},
};
</script>

<style scoped>
div {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
.all-post {
	border-radius: 4px 4px 0 0;
	margin-top: 0;
	overflow: hidden;
	position: relative;
	border: thin solid var(--newRedditTheme-postLine);
	max-width: 100%;
	height: fit-content;
}
.hole-post {
	border-radius: 4px 4px 0 0;
	margin-top: 0;
	overflow: hidden;
	position: relative;
	border: thin solid #ccc;
	max-width: 100%;
}
.post-release:hover {
	border: 1px;
	border-style: solid;
	border-color: black;
}
.hole-post-2 {
	width: 720px;
	background: rgb(255, 255, 255);
	position: relative;
}
.post-release {
	display: flex;
	flex-direction: column;
}
.post-name-bar {
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 16px;
	padding-bottom: 4px;
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	flex: 0 0 auto;
}
.comm-name {
	font-size: 12px;
	font-weight: 600;
	line-height: 16px;
	color: rgb(54, 46, 46);
	display: inline;
	text-decoration: none;
	vertical-align: baseline;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.comm-name:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
}
.aligning {
	align-items: center;
	display: flex;
	flex-flow: row wrap;
}
.point-center {
	color: rgb(54, 46, 46);
	font-size: 6px;
	line-height: 20px;
}
.posted-user {
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: inherit;
}
.posted-word {
	flex: 0 0 auto;
	margin-right: 3px;
}
.posted-username {
	margin-right: 3px;
	text-decoration: none;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.posted-username:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
}
.time {
	display: inline-block;
	flex: 0 0 auto;
}
.written-post {
	padding-left: 16px;
	padding-right: 16px;
	display: flex;
	justify-content: space-between;
}
.posts-words {
	--postTitle-VisitedLinkColor: #979798;
	--postTitleLink-VisitedLinkColor: #979798;
	--postBodyLink-VisitedLinkColor: #989898;
	--posttitletextcolor: rgb(54, 46, 46);
}
.author {
	display: inline;
	position: relative;
	text-decoration: none;
	word-break: break-word;
}
.main-post {
	color: inherit;
	text-decoration: inherit;
}
.inside-post {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
}
.header-3 {
	display: inline;
	color: rgb(54, 46, 46);
}
.searched-word {
	background-color: #eee;
	color: rgb(54, 46, 46);
}
.bottom-bar {
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-top: 8px;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #ccc;
	display: flex;
}
.not-div {
	align-items: center;
	width: 70rem;
	display: flex;
	flex-direction: column;
}
</style>
