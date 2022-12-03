<template>
	<div>
		<div
			class="all-post"
			data-adclicklocation="background"
			style="
				color: rgb(135, 138, 140);
				cursor: pointer;
				fill: rgb(135, 138, 140);
			"
		>
			<div class="hole-post">
				<div class="post-release">
					<div class="post-name-bar">
						<div class="community-name">
							<a class="comm-name">{{ communityName }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		communityName: {
			type: String,
			required: true,
		},
		profileName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			clicked: this.clickedProp,
		};
	},
	methods: {},
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
}
.hole-post {
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
</style>
