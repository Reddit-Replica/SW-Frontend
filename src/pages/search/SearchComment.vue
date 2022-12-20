<template>
	<div class="all">
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
		<div class="after-all" v-else>
			<the-header :header-title="userName"></the-header>
			<div class="page-release">
				<div class="page">
					<div>
						<div class="upper-nav">
							<div class="searchin-nav">
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										><button
											id="posts-button"
											class="button-nav button-nav2"
											@click="goSearch('posts')"
										>
											Posts
										</button></a
									>
								</div>
								<div class="search-nav now-page" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										><button
											id="comments-button"
											class="button-nav button-nav2"
										>
											Comments
										</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=comment" -->
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										><button
											id="communities-button"
											class="button-nav button-nav2"
											@click="goSearch('cm')"
										>
											Communities
										</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=com" -->
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										@click="goSearch('users')"
										><button id="users-button" class="button-nav button-nav2">
											People
										</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=ppl" -->
							</div>
						</div>
					</div>
					<div class="search-results">
						<div class="people">
							<div class="people-results">
								<div class="comments-release">
									<div
										v-if="!(SearchedComments && SearchedComments.length == 0)"
									>
										<div v-for="value in SearchedComments" :key="value.id">
											<div class="hovering">
												<div class="high-nav">
													<div class="com-det">
														<div class="comimage">
															<img
																v-if="!value.picture"
																src="../../../img/default_inbox_avatar.png"
																alt="img"
																class="communities-img"
																@click="gotosub(value.postSubreddit)"
																:id="'user-avatar-' + value.postSubreddit"
															/>
															<img
																v-else
																:src="$baseurl + '/' + value.picture"
																alt="img"
																class="communities-img"
																:id="'user-avatar-' + value.postSubreddit"
																@click="gotosub(value.postSubreddit)"
															/>
														</div>
														<div class="sub-name">
															&nbsp;<a :href="'/r/' + value.postSubreddit">
																r/{{ value.postSubreddit }} &nbsp;</a
															>&nbsp;
														</div>
													</div>
													<span class="dot" role="presentation">•&nbsp;</span>
													<div class="post-det">
														<span
															class="posted-by"
															style="color: rgb(120, 124, 126)"
															>Posted by</span
														>
														<div class="user-info">
															<div id="user-name">
																<a
																	class="user-name-info"
																	style="color: rgb(120, 124, 126)"
																	:href="'/user/' + value.postpostedby"
																	>u/{{ value.postpostedby }}</a
																>
															</div>
														</div>
														<span
															class="posted-at"
															style="color: rgb(120, 124, 126)"
															>{{
																this.calculateTime(value.postpostedAt)
															}}</span
														>
													</div>
												</div>

												<div>
													<div class="comment">
														<div class="post-content">
															<div class="the-content">
																<h3 class="the-words">
																	{{ value.posttitle }}
																</h3>
															</div>
														</div>
													</div>
												</div>
												<div class="bording">
													<div class="blue-one">
														<div class="the-pic"></div>
														<div class="the-rest">
															<div class="user-commentes">
																<span class="the-span"
																	><div class="div-name">
																		<div class="div-name-2">
																			<div id="user-info">
																				<a
																					class="name-commented"
																					:href="
																						'/user/' + value.commentusername
																					"
																					>{{ value.commentusername }}</a
																				>
																			</div>
																		</div>
																	</div>
																	<span class="dot" role="presentation"
																		>•&nbsp;</span
																	><a class="commented_at">{{
																		this.calculateTime(value.commentcreatedAt)
																	}}</a>
																</span>
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
																<div class="comment-word">
																	<div class="comment-div">
																		<p
																			class="p-comment"
																			v-if="
																				value.commentcontent &&
																				value.commentcontent.length != 0
																			"
																		>
																			{{ value.commentcontent.ops[0].insert }}
																		</p>
																	</div>
																</div>
																<div class="down-nav">
																	<span class="votes"
																		>{{ value.commentvotes }} upvotes</span
																	>
																</div>
															</div>
														</div>
													</div>
												</div>
												<a
													class="go-to-thread"
													role="button"
													id="thread-button"
													tabindex="0"
													@click="
														gotocomment(
															value.id,
															value.title,
															value.subreddit,
															value.postedBy
														)
													"
													>Go to thread</a
												>
												<div
													class="post-in"
													@click="
														gotocomment(
															value.id,
															value.title,
															value.subreddit,
															value.postedBy
														)
													"
												>
													<span class="no-cm-posts"
														>{{ value.postvotes }} upvotes</span
													><span class="no-cm-posts"
														>{{ value.postComments }} comments</span
													>
												</div>
											</div>
										</div>
									</div>
									<div v-else>
										<Notfound></Notfound>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Notfound from '../../components/SearchComponents/NotFound.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	data() {
		return {
			q: '',
			loading: false,
		};
	},
	computed: {
		SearchedComments() {
			console.log(this.$store.getters['search/GetComments']);
			return this.$store.getters['search/GetComments'];
		},

		userName() {
			return localStorage.getItem('userName');
		},
	},
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			await this.search();
		}
		this.loading = false;
	},
	beforeMount() {
		this.search();
	},
	methods: {
		calculateTime(time) {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(time);
			// if (currentDate.getFullYear() != myTime.getFullYear()) {
			// 	returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			// } else
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
		async search() {
			try {
				await this.$store.dispatch('search/SearchComments', {
					baseurl: this.$baseurl,
					q: this.$route.query.q,
				});
			} catch (error) {
				console.log(error);
			}
		},
		goSearch(value) {
			if (value == 'cm') {
				this.$router.push({
					name: 'searchcm',
					query: { q: this.$route.query.q },
				});
			} else if (value == 'posts') {
				this.$router.push({
					name: 'searchpost',
					query: { q: this.$route.query.q },
				});
			} else if (value == 'users') {
				this.$router.push({
					name: 'searchuser',
					query: { q: this.$route.query.q },
				});
			}
		},
		gotocomment(id, title, sub, postman) {
			if (sub != null) {
				this.$router.push(`/r/${sub}/comments/${id}/${title}`);
			} else {
				this.$router.push(`/user/${postman}/comments/${id}/${title}`);
			}
		},
	},
	components: { Notfound, TheSpinner },
};
</script>

<style scoped>
.all {
	z-index: 3;
}
.after-all {
	max-width: 1024px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
}
.page-release {
	width: 80%;
	min-width: fit-content;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	padding: 24px 24px 0;
}
.page {
	padding: 24px 24px 0;
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	flex-grow: 1;
}
div {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
a {
	color: inherit;
	text-decoration: inherit;
}
.upper-nav {
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	margin-top: 24px;
}
.searchin-nav {
	display: flex;
}
.search-nav {
	display: flex;
}
.search-nav:hover {
	border-radius: 9999px;
	background-color: #ccc;
}
.now-page {
	border-radius: 9999px;
	background-color: #f6f7f8;
}
.search-nav-button {
	position: relative;
	margin-right: 4px;
}
.button-nav {
	background-color: var(--newCommunityTheme-field);
	opacity: 1;
	color: #000;
	font-weight: 700;
	padding: 12px 20px;
}
.button-nav::before {
	opacity: 0;
}
.button-nav2 {
	align-items: center;
	border-radius: 9999px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	text-align: center;
	width: auto;
	position: relative;
	background-color: var(--newCommunityTheme-button);
	border: none;
	color: #000;
	fill: var(--newCommunityTheme-body);
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
}
.search-results {
	min-width: fit-content;
	max-width: 100%;
	width: 100%;
	display: flex;
	padding-top: 8px;
}
.hovering:hover {
	border: 1px;
	border-style: solid;
	border-color: black;
}
.user-a {
	margin-bottom: 0;
	border-radius: 4px 4px 0 0;
	border: thin solid #ccc;
	padding: 16px;
	display: flex;
	flex-direction: column;
	margin-top: -1px;
	color: inherit;
	text-decoration: inherit;
}
.user-div {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.people {
	margin-bottom: 16px;
	width: 100%;
}
.people-results {
	cursor: pointer;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
	max-width: 100%;
	width: 100%;
}
.comments-release {
	display: flex;
	flex-direction: column;
}
.people-results:hover {
	border-radius: 2px;
	border-color: #000;
	border-style: solid;
}
.high-nav {
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 16px;
	padding-bottom: 4px;
}
.com-det {
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	flex: 0 0 auto;
}
.sub-name {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #1c1c1c;
	display: inline;
	text-decoration: none;
	vertical-align: baseline;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.sub-name:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
}
.dot {
	color: #7c7c7c;
	font-size: 6px;
	line-height: 20px;
	margin: 0 4px;
}
.post-det {
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: inherit;
}
.posted-by {
	flex: 0 0 auto;
	margin-right: 3px;
}
.user-info {
	display: inline-block;
	flex: 0 0 auto;
}
.user-name-info {
	margin-right: 3px;
	text-decoration: none;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.user-name-info:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
}
.comment {
	padding: 0 16px;
	margin: 10px;
}
.the-content {
	display: inline;
	margin: 4px;
}
.the-words {
	display: inline;
	font-size: 12px;
	font-weight: 50;
	color: inherit;
}
.bording {
	border-radius: 4px;
	background-color: #e9f5fd;
	font-size: 14px;
	margin: 0 12px 12px;
	padding: 4px 8px 8px;
	color: #1a1a1b;
}
.blue-one {
	background: transparent;
	border-radius: 4px;
	display: flex;
	position: relative;
	transition: color 0.5s, fill 0.5s, background 1s;
	align-items: center;
}
.the-pic {
	display: inline-block;
	flex: 0 0 auto;
}
.the-rest {
	margin-left: 8px;
	border-radius: 4px;
	border: 1px solid transparent;
	box-sizing: border-box;
	max-width: 800px;
	width: calc(100% - 56px);
	padding: 0;
}
.user-commentes {
	margin-top: 10px;
	margin-left: 0;
	min-height: 18px;
	margin-bottom: 6px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.the-span {
	min-height: 18px;
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	justify-content: flex-start;
}
.div-name-2 {
	display: inline-block;
}
.name-commented {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: #1a1a1b;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.name-commented:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
}
.commented_at {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	color: #7c7c7c;
}
.comment-word {
	padding: 2px 0;
	width: 100%;
}
.communities-img {
	width: 40px;
	height: 40px;
}
.comment-div {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	word-break: break-word;
	overflow: auto;
	padding-bottom: 1px;
	margin-bottom: -1px;
	color: #1c1c1c;
}
.p-comment {
	padding: 0.8em 0 0.25em;
	font: inherit;
	vertical-align: baseline;
	color: #1c1c1c;
}
.down-nav {
	margin-top: 8px;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
	display: flex;
}
.votes {
	display: block;
	margin-right: 12px;
}
.go-to-thread {
	display: block;
	font-size: 12px;
	font-weight: 400;
	margin: 0 0 4px 8px;
	min-height: 0;
	padding: 0;
	text-align: left;
	color: #0079d3;
	background-color: unset;
	font-family: Noto Sans, Arial, sans-serif;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-width: 32px;
	padding-left: 16px;
	padding-right: 16px;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.go-to-thread:hover {
	text-decoration-color: rgb(111, 127, 221);
}
.post-in {
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 8px;
	padding-bottom: 16px;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
	display: flex;
}
.no-cm-posts {
	display: block;
	margin-right: 12px;
}
</style>
