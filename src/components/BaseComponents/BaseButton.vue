<template>
	<button :disabled="disableButton">{{ buttonText }}</button>
</template>

<script>
export default {
	props: {
		buttonText: {
			type: String,
			required: false,
			default: '',
		},
		disableButton: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
};
</script>

<style scoped>
button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;
}
button:disabled {
	cursor: not-allowed;
	opacity: 0.2;
}
</style>
