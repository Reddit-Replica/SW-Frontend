<template>
	<div class="social-link">
		<img class="social-link-image" :src="imageUrl" />
		<p>{{ title }}</p>
	</div>
</template>

<script>
export default {
	props: {
		imageUrl: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.social-link {
	margin: 6px 2px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	align-items: center;
	background-color: var(--color-grey-light-2);
	border-radius: 100px;
	color: var(--color-dark-1);
	cursor: pointer;
	display: flex;
	height: 20px;
	margin-right: 8px;
	padding: 10px 12px;
	white-space: nowrap;
	box-sizing: content-box;
}
.social-link-image {
	margin-right: 8px;
	max-height: 16px;
	max-width: 16px;
	min-width: 16px;
	min-height: 16px;
}
</style>
