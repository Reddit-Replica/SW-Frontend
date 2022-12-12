<template>
	<input type="checkbox" v-model="value" @click="onChecked" />
</template>
<script>
export default {
	data() {
		return {
			value: true,
		};
	},
	methods: {
		onChecked() {
			this.$emit('checked', this.value);
		},
	},
};
</script>
<style scoped>
input[type='checkbox'] {
	appearance: none;
	width: 35px;
	height: 22px;
	background-color: #ddd;
	border-radius: 100px;
	border: 2px solid transparent;
	position: relative;
}
input[type='checkbox']::before {
	content: '';
	position: absolute;
	left: 0px;
	top: 0px;
	width: 18px;
	height: 18px;
	background-color: white;
	border-radius: 50%;
	transition: 0.5s all;
	cursor: pointer;
}
input[type='checkbox']:checked {
	background-color: var(--color-blue);
}
input[type='checkbox']:checked::before {
	left: 14px;
}
</style>
