<template>
	<div class="content">
		<base-button class="back-button" @click="scrollUp()"
			>Back to Top</base-button
		>
	</div>
</template>

<script>
export default {
	methods: {
		// @vuese
		// Used to make page go up
		scrollUp() {
			window.scrollTo(0, 0);
		},
	},
};
</script>

<style scoped>
.content {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	text-align: center;
	transform: translateY(-100%);
	position: sticky;
	top: calc(100vh - 0.8rem);
	margin-top: 45px;
}
.back-button {
	padding: 0.4rem 1.6rem;
	-ms-flex-pack: center;
	width: 13rem;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	min-height: 3.2rem;
	min-width: 3.2rem;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	position: relative;
}
.back-button:hover {
	opacity: 0.92;
}
</style>
