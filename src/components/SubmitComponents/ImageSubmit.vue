<template>
	<div class="content">
		<h3 class="heading-3">Drag and drop images or</h3>
		<input type="file" class="blue-button" id="image-input" hidden />
		<label class="blue-button" for="image-input">Upload</label>
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

	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	height: 33rem;
	border: var(--line-dashed);
	margin-top: 1.5rem;
	border-radius: 5px;
}
.heading-3 {
	color: var(--color-blue);
}
.blue-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;
}
</style>
