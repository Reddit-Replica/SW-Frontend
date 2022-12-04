<template>
	<div id="commentId" class="comment-container">
		<header>
			<div class="content">
				<div class="comment-icon">
					<i
						style="
							stroke-width: 35px;
							stroke: rgb(135, 138, 140);
							color: transparent;
						"
						class="fa-solid fa-message"
					></i>
				</div>
				<div class="title-container">
					<span class="user-comment-name">
						<router-link to=""> Key_Excitement_3075</router-link>
					</span>
					<span class="post-title-content">
						<p>
							commented on
							<span class="post-title-name">{{ ' ' + commentData.title }}</span>
						</p>
					</span>
					<span class="post-status">
						<router-link
							to=""
							class="flair-box"
							:style="`background-color :${commentData.flair.backgroundColor};
										color : ${commentData.flair.textColor};
										`"
							>{{ commentData.flair.flairName }}</router-link
						>
						<span v-if="commentData.spoiler" class="post-spoiler"
							><p>spoiler</p></span
						>
						<span v-if="commentData.nsfw" class="post-nsfw"><p>nsfw</p></span>
						<span class="post-oc"><p>OC</p></span>
					</span>
					<span class="subreddit-name">
						&nbsp;.&nbsp;
						<router-link to=""> {{ 'r/' + commentData.subreddit }}</router-link>
					</span>
					<span class="posted-by">
						posted by&nbsp;
						<router-link to="">{{ commentData.postedBy }}</router-link>
					</span>
				</div>
			</div>
		</header>
		<div class="comment-body">
			<div class="comment-body-container">
				<div class="comment-box">
					<div class="nested-comment-order">
						<div></div>
						<div></div>
					</div>
					<div class="comment-content">
						<div class="comment-body-title">
							<router-link to=""> Key_Excitement_3075</router-link>
							<span class="comment-op">op</span>
							<p>1 point</p>
							<router-link class="comment-date" to="">2 day ago</router-link>
						</div>
						<div class="comment-content-data">
							<p>fdkjbfjhg skjdfnskd sjdnfksjd</p>
						</div>
						<div class="comment-options">
							<ul>
								<li>Replay</li>
								<li>Share</li>
								<li>...</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {},
	props: {
		commentData: {
			type: Object,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
};
</script>
<style scoped>
P,
a,
ul,
li {
	padding: 0;
	margin: 0;
}
.comment-container {
	width: 100%;
	background-color: #ffffff;
}
.comment-container header {
	border: thin solid #edeff1;
	/* border-width: 1px 1px 0; */
	margin-bottom: 0;
	margin-top: 4px;
	padding: 1px 1px 2px;
}
.comment-container header:hover {
	border: thin solid #898989 !important;
}
.comment-container header .content {
	padding: 8px 8px;
	display: flex;
	align-items: center;
	width: 100%;
}
.comment-icon {
	display: inline-block;
	font-size: 20px;
	margin-right: 8px;
}
.title-container {
	display: flex;
	align-items: center;
	line-height: 16px;
	font-size: 12px;
	flex-wrap: wrap;
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
.title-container .user-comment-name a {
	color: #0079d3;
	margin-right: 4px;
}
.title-container .user-comment-name a:hover {
	text-decoration: underline;
}
.post-status {
	display: flex;
	align-items: center;
	margin-left: 5px;
}
.posted-by {
	display: flex;
	align-items: center;
	margin-left: 5px;
	color: inherit;
}
.posted-by a {
	color: inherit;
}
.posted-by a:hover {
	text-decoration: underline;
}
.subreddit-name a {
	color: #1c1c1c;
	font-weight: 700;
	/* font-weight: bold; */
}

.subreddit-name a:hover {
	text-decoration: underline;
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
.flair-box {
	border-radius: 20px;
	padding: 2px 8px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	display: inline-block;
	margin-right: 5px;
	overflow: hidden;
	/* background-color: rgb(100, 109, 115);
	color: rgb(255, 255, 255); */
	width: fit-content;
	transition: background-color 0.25s;
	/* display: flex; */
}
.flair-box:hover {
	opacity: 85%;
}

.comment-body {
	width: 100%;
}
.comment-body:hover {
	border: thin solid #898989;
}
.comment-body-container {
	padding: 10px 0 8px 8px;
}
.comment-box {
	display: flex;
	align-items: center;
}
.nested-comment-order {
	display: flex;
	align-self: stretch;
}
.nested-comment-order div {
	border-left: 2px dashed #edeff1;
	margin-right: 16px;
	align-self: stretch;
}
.comment-body-title {
	display: flex;
	align-items: center;
	font-size: 12px;
	color: #7c7c7c;
}
.comment-body-title a {
	color: inherit;
}
.comment-body-title a:first-child {
	color: #1c1c1c;
}
.comment-body-title a:hover {
	text-decoration: underline;
}
.comment-op {
	margin-left: 4px;
	color: #0079d3;
	text-transform: uppercase;
	font-weight: 700;
}
.comment-body-title p {
	margin-left: 4px;
}
.comment-date {
	margin-left: 4px;
}
.comment-content-data {
	padding: 2px 0;
	width: 100%;
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
	word-break: break-word;
	overflow: auto;
	/* padding-bottom: 1px;
	margin-bottom: -1px; */
}
.comment-options {
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: #878a8c;
	margin-left: -4px;
}
.comment-options ul {
	list-style: none;
	display: flex;
	cursor: pointer;
}
.comment-options ul li {
	margin: 4px;
	transition: color 0.1s;
}
.comment-options ul li:not(:last-child):hover {
	text-decoration: underline;
	color: #1c1c1c;
}
.comment-options ul li:last-child:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
</style>
