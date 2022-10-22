<template>
	<div class="content">
		<h3 class="heading-3">Drag and drop images or</h3>
		<base-button class="blue-button" button-text="Upload" />
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	width: 95%;
	margin: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 33rem;
	border: var(--line);
	margin-top: 1.5rem;
	border-radius: 5px;
}
.heading-3 {
	color: var(--color-blue);
}
</style>
