<template>
	<!-- this Component for item (Button) Social Link  -->
	<div :id="`link-item-${text}`" class="link-item">
		<img :src="imgSrc" alt="" />
		{{ text }}
	</div>
</template>

<script>
export default {
	props: {
		// @vuese
		// link for displayed image of social link
		imgSrc: {
			type: String,
			default: '',
			required: true,
		},
		// @vuese
		// display text for social link
		text: {
			type: String,
			default: '',
			required: true,
		},
		// @vuese
		//  alternate text in case off unloaded or unfounded image
		alt: {
			type: String,
			default: 'img',
			required: false,
		},
	},
};
</script>

<style scoped>
.links-container {
	display: flex;
	flex-wrap: wrap;
}
.link-item {
	margin: 6px 2px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	align-items: center;
	background-color: var(--color-grey-dark-5);
	border-radius: 9999px;
	color: var(--color-dark-3);
	cursor: pointer;
	display: flex;
	height: 40px;
	margin-right: 8px;
	padding: 10px 12px;
	white-space: nowrap;
	width: fit-content;
}
.link-item img {
	margin-right: 8px;
}
</style>
