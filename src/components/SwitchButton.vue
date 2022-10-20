<template>
	<input type="checkbox" />
</template>
<style scoped>
input[type='checkbox'] {
	appearance: none;
	width: 40px;
	height: 15px;
	background-color: #ddd;
	border-radius: 11px;
	position: relative;
}
input[type='checkbox']::before {
	content: '';
	position: absolute;
	right: 25px;
	top: 3px;
	width: 10px;
	height: 10px;
	background-color: white;
	border-radius: 50%;
	transition: 0.5s all;
}
input[type='checkbox']:checked {
	background-color: var(--color-blue);
}
input[type='checkbox']:checked::before {
	right: 5px;
}
</style>
