<template>
	<button v-if="!link" :disabled="disableButton">
		<slot></slot>{{ buttonText }}
	</button>
	<router-link v-else :to="to">
		{{ buttonText }}
	</router-link>
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
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: '/',
		},
	},
};
</script>

<style scoped>
button,
a {
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
	opacity: 1;
}
</style>
