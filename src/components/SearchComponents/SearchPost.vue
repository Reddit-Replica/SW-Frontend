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
					<div class="post-release">
						<div class="post-name-bar">
							<div class="community-name">
								<a class="comm-name"> r/Salah </a>
								<div class="aligning"></div>
							</div>
							<span class="point-center" role="presentation">•</span>
							<div class="posted-user">
								<span class="posted-word" style="color: rgb(120, 124, 126)">
									Posted by
								</span>
								<div>
									<a class="posted-username" style="color: rgb(120, 124, 126)"
										>koora</a
									>
								</div>
								<span class="time" style="color: rgb(120, 124, 126)"
									>8 days ago</span
								>
							</div>
						</div>
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
													<span class="searched-word">Mohammed</span>
													bin Salman gifts each Saudi Arabia player a
													Rolls-Royce for the win over Argentina
												</h3>
											</div></a
										>
									</div>
									<div class="image-class">
										<img alt="" style="width: 1px; height: 1px" />
									</div>
								</div>
							</div>
						</div>
						<div class="bottom-bar">
							<span class="votes">11.2k upvotes</span
							><span class="comments">342 comments</span
							><span class="awards">26 awards</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PostContent from '../PostComponents/PostContent.vue';
export default {
	props: {
		community: {
			type: String,
			required: true,
		},
		profile: {
			type: String,
			required: true,
		},
	},
	data() {},
	methods: {},
	// components: {
	// 	PostContent,
	// },
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
.hole-post-2 {
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
</style>
