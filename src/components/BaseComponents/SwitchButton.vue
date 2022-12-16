<template>
	<input
		type="checkbox"
		v-model="value"
		@click="onChecked"
		:class="value ? 'style2' : 'style1'"
	/>
</template>
<script>
export default {
	emits: ['checked'],
	// created() {
	// 	this.value = !this.val;
	// 	console.log('this.value in switch button');
	// 	console.log(this.value);
	// },
	props: {
		val: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			value: !this.val,
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
/*input[type='checkbox'] {
	appearance: none;
	background-color: var(--color-blue);
	width: 35px;
	height: 22px;
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
	background-color: #ddd;
}
input[type='checkbox']:checked::before {
	left: 14px;
}*/
.style1 {
	appearance: none;
	background-color: var(--color-blue);
	width: 35px;
	height: 22px;
	border-radius: 100px;
	border: 2px solid transparent;
	position: relative;
}
.style1::before {
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

.style2 {
	appearance: none;
	width: 35px;
	height: 22px;
	border-radius: 100px;
	border: 2px solid transparent;
	position: relative;
	background-color: #ddd;
}
.style2::before {
	content: '';
	position: absolute;
	left: 14px;
	top: 0px;
	width: 18px;
	height: 18px;
	background-color: white;
	border-radius: 50%;
	transition: 0.5s all;
	cursor: pointer;
}
</style>
