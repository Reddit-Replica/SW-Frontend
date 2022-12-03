<template>
	<div
		class="all-post"
		style="color: rgb(135, 138, 140); cursor: pointer; fill: rgb(135, 138, 140)"
	>
		<div class="hole-post">
			<div class="post-release">
				<div class="post-name-bar">
					<div class="community-name">
						<a class="comm-name">{{ community }}</a>
						<div class="aligning"></div>
					</div>
					<span class="point-center" role="presentation">•</span>
					<div class="posted-user">
						<span class="posted-word" style="color: rgb(120, 124, 126)"
							>Posted by</span
						>
						<div>
							<a class="posted-username" style="color: rgb(120, 124, 126)">{{
								profile
							}}</a>
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
	background: rgb(255, 255, 255);
	position: relative;
}
.post-release {
	display: flex;
	flex-direction: column;
	color: rgb(135, 138, 140);
	cursor: pointer;
	fill: rgb(135, 138, 140);
}
.post-name-bar {
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 16px;
	padding-bottom: 4px;
	align-items: center;
	display: flex;
	flex-flow: row wrap;
}
.comm-name {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: var(--newRedditTheme-bodyText);
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
	color: var(--newCommunityTheme-metaText);
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
</style>
