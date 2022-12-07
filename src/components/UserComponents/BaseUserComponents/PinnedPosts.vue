<template>
	<header class="pinned-posts">
		<h2>Pinned Posts</h2>
	</header>
	<div class="pinned-post-container">
		<div class="pinned-post-item">
			<div class="pinned-post-title">the first post</div>
			<div class="post-info">r/medo emad</div>
			<div class="content-text" v-if="kind === 'text'"></div>
			<div class="post-options"></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			kind: 'text',
		};
	},
};
</script>
<style scoped>
header.pinned-posts,
header.pinned-posts h2 {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: #1c1c1c;
	margin-bottom: 16px;
	text-transform: capitalize;
	width: 100%;
}
.pinned-post-container {
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	flex: 1 1 auto;
	justify-content: space-between;
	column-gap: 8px;
}
.pinned-post-item {
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	box-sizing: border-box;
	height: 300px;
	margin-bottom: 8px;
	width: 316px;
	color: rgb(135, 138, 140);
	cursor: pointer;
	fill: rgb(135, 138, 140);
	background-color: #ffffff;
	padding: 12px 12px 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
}
.pinned-post-item:hover {
	border: thin solid #1c1c1c;
}
.pinned-post-title {
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: #222222;
	display: inline;
	padding-right: 5px;
	word-wrap: break-word;
}
.content-text {
}
</style>
