<template>
	<div class="item">
		<div class="box">
			<div></div>
			<div class="left-bar">
				<div class="icons">
					<div class="d-flex flex-column vote-box">
						<div class="upvote" @click="upvote" :id="'up-vote-box-' + index">
							<svg
								class="icon p-1"
								:class="upClicked ? 'up-clicked' : ''"
								:id="'up-vote-' + index"
							>
								<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
							</svg>
						</div>
						<div
							class="downvote"
							@click="downvote"
							:id="'down-vote-box-' + index"
						>
							<svg
								class="icon p-1"
								:class="downClicked ? 'down-clicked' : ''"
								:id="'down-vote-' + index"
							>
								<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="right-bar">
				<div class="header-title">
					<div>
						<img
							v-if="!subreddit.picture"
							src="../../../img/subreddit-img3.png"
							alt="img"
							class="subreddit-img"
							id="subreddit-img"
						/>
						<img
							v-else
							:src="$baseurl + '/' + subreddit.picture"
							alt="img"
							class="subreddit-img"
							id="subreddit-img"
						/>
					</div>
					<div class="subreddit-details">
						<div class="subreddit-name">
							<a href="#">r/fghjkxcvghjkl</a>
						</div>
						<span class="dot">•</span>
						<span class="posted-by">Posted by</span>
						<div class="poster">
							<a href="#">u/asmaaadel0</a>
						</div>
						<span class="time">1 month ago</span>
					</div>
				</div>
				<div class="post-title">
					<div class="title-box">fghj</div>
					<div class="body-box">fghjkl;</div>
				</div>
				<p class="comments">0 comments</p>
				<div class="footer">
					<div class="removed-box">
						<div>
							<img
								src="../../../img/default_inbox_avatar.png"
								alt="img"
								class="img"
								:id="'moderator-img-' + index"
							/>
						</div>
						<!-- <img
							v-if="!moderator.avatar"
							src="../../../img/default_inbox_avatar.png"
							alt="img"
							class="img"
							:id="'moderator-img-' + index"
						/>
						<img
							v-else
							:src="$baseurl + '/' + moderator.avatar"
							alt="img"
							class="img"
							:id="'moderator-img-' + index"
						/> -->
						<div class="p-box">
							<p class="p">Removed</p>
							<p class="p-poster">u/asmaaadel0 1 hour ago</p>
						</div>
					</div>
					<div class="buttons">
						<base-button>Add Removal Reason</base-button>
						<base-button>Approve</base-button>
						<base-button>Flair</base-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			downClicked: false,
			subreddit: {},
		};
	},
	beforeMount() {
		this.getSubreddit();
	},
	methods: {
		// @vuese
		//handle upvote action
		// @arg no argument
		async upvote() {
			if (this.upClicked == false) {
				try {
					this.$store.dispatch('messages/voteComment', {
						id: this.message.id,
						direction: 1,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/votedSuccessfully']) {
						this.upClicked = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.upClicked = false;
				}
			} else {
				this.upClicked = false;
			}
			if (this.downClicked) {
				this.downClicked = false;
			}
		},
		// @vuese
		//handle downvote action
		// @arg no argument
		async downvote() {
			if (this.downClicked == false) {
				try {
					this.$store.dispatch('messages/voteComment', {
						id: this.message.id,
						direction: -1,
						baseurl: this.$baseurl,
					});
					if (this.$store.getters['messages/votedSuccessfully']) {
						this.downClicked = true;
					}
				} catch (err) {
					this.errorResponse = err;
					this.downClicked = false;
				}
			} else {
				this.downClicked = false;
			}
			if (this.upClicked) {
				this.upClicked = false;
			}
		},
		// @vuese
		//load subreddit img
		// @arg no argument
		async getSubreddit() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/getSubreddit', {
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.subreddit = this.$store.getters['community/getSubreddit'];
		},
	},
};
</script>

<style scoped>
.item {
	border-radius: 4px;
	overflow: hidden;
}
.box {
	cursor: pointer;
	transition: color 0.5s, fill 0.5s, box-shadow 0.5s;
	--post-icon-color: var(--color-grey-light-16);
	--post-line-color: var(--color-grey-light-4);
	--post-icon-color: var(--color-grey-light-16);
	border: 1px solid var(--color-grey-light-4);
	margin-bottom: 1rem;
	overflow: hidden;
	background-color: rgba(255, 255, 255, 0.8);
	color: var(--color-grey-light-4);
	position: relative;
	border: thin solid transparent;
	padding-left: 4rem;
	display: block;
}
.left-bar {
	width: 4rem;
	border-left: 4px solid transparent;
	-ms-flex-align: center;
	align-items: center;
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	left: 0;
	padding: 8px 4px 8px 0;
	position: absolute;
	top: 0;
}
.icons {
	-ms-flex-align: center;
	align-items: center;
	display: -ms-flexbox;
	display: flex;
	fill: inherit;
	-ms-flex-direction: column;
	flex-direction: column;
}
.icon {
	height: 2.4rem;
	width: 2.4rem;
}
.right-bar {
	background: #ffffff;
	padding-top: 8px;
	position: relative;
}
.header-title {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-ms-flex-align: start;
	align-items: start;
	position: relative;
}
.subreddit-img {
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	margin-right: 1rem;
}
.subreddit-details {
	-ms-flex-align: center;
	align-items: center;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	overflow: hidden;
	display: inline;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	-ms-flex-align: center;
	align-items: center;
	color: inherit;
}
.subreddit-name {
	display: inline-block;
	-ms-flex: 0 0 auto;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: var(--color-dark-3);
	display: inline;
	line-height: 20px;
	text-decoration: none;
	vertical-align: baseline;
}
.subreddit-name a {
	color: var(--color-dark-3);
}
.subreddit-name a:hover {
	text-decoration: underline;
}
.dot {
	vertical-align: middle;
	color: var(--color-grey-light-5);
	font-size: 6px;
	line-height: 20px;
	margin: 0 4px;
}
.posted-by {
	color: #787c7e;
	margin-right: 3px;
	font-size: 10px;
}
.poster {
	display: inline-block;
	color: rgb(120, 124, 126);
	margin-right: 3px;
	text-decoration: none;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
}
.poster a {
	color: rgb(120, 124, 126);
}
.poster a:hover {
	text-decoration: underline;
}
.time {
	color: #787c7e;
	display: inline-block;
}
.post-title {
	color: #9b9b9b;
	margin: 0 8px;
	font-size: 2.5rem;
	font-weight: 700;
}
.title-box {
	display: inline;
	position: relative;
	text-decoration: none;
	word-break: break-word;
}
.body-box {
	margin-top: 8px;
	max-height: 25rem;
	overflow: hidden;
	padding: 5px 8px 10px;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	word-break: break-word;
	overflow: auto;
	padding-bottom: 1px;
	margin-bottom: -1px;
	color: var(--color-grey-dark-6);
	padding: 0.8em 0 0.25em;
}
.comments {
	display: inline-block;
	margin: 10px 0 10px 8px;
	font-size: 12px;
	line-height: 15px;
}
.footer {
	align-items: center;
	display: -ms-flexbox;
	min-height: 40px;
	overflow-y: visible;
	display: flex;
	width: calc(100% - 8px);
	margin-left: 8px;
	-ms-flex-direction: column;
	flex-direction: column;
}
.removed-box {
	background-color: rgba(255, 69, 0, 0.2);
	display: -ms-flexbox;
	display: flex;
	padding: 8px 12px;
	border-radius: 4px;
	-ms-flex-align: start;
	align-items: center;
	margin-right: 16px;
	position: relative;
	height: 100%;
	fill: #fff;
	box-sizing: border-box;
	height: 100%;
	object-fit: cover;
	object-position: center;
	width: 100%;
}
.img {
	border-radius: 50%;
	background: #d7dfe2;
	fill: #fff;
	box-sizing: border-box;
	border: 1px solid #edeff1;
	object-fit: cover;
	object-position: center;
	height: 28px;
	width: 28px;
	margin-right: 1rem;
}
.p-box {
	width: 100%;
}
.p {
	font-weight: 700;
	font-size: 12px;
	color: var(--color-dark-3);
	margin: 0;
}
.p-poster {
	margin-top: 0;
	font-size: 12px;
	color: #1c1c1c;
}
.buttons {
	-ms-flex-direction: row;
	flex-direction: row;
	margin: 12px 0;
	gap: 12px;
	display: flex;
	width: 100%;
}
button {
	position: relative;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 4px 1.6rem;
	-ms-flex-align: center;
	align-items: center;
	border-radius: 9999px;
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
	text-align: center;
	width: auto;
	border: 1px solid var(--color-grey-dark-11);
	color: var(--color-dark-3);
	fill: var(--color-dark-3);
	padding: 0.4rem 1.6rem;
	background-color: transparent;
}
button:hover {
	border: 1px solid var(--color-dark-3);
}
@media (min-width: 64rem) {
	.box {
		border-radius: 4px;
		padding-left: 4rem;
	}
}
</style>
