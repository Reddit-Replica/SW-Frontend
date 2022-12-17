<template>
	<video controls id="video-post-component">
		<!-- <source src="../../../../../video/userPostTest.mp4" type="video/mp4" /> -->
		<source :src="$baseurl + '/' + videoSrc" type="video/mp4" />
	</video>
</template>
<script>
export default {
	props: {
		// @vuese
		// the src of the video
		videoSrc: {
			type: String,
			required: true,
		},
	},
};
</script>
<style scoped>
video {
	background-color: rgb(0, 0, 0);
	width: 100%;
	max-height: 450px;
}
</style>
