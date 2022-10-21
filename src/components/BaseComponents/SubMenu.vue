<template>
	<ul class="sub-menu" v-if="display">
		<li
			class="icon-box"
			v-for="title in titles"
			:key="title"
			@click="clickedFunction(title)"
			:class="{ clicked: clicked == title }"
		>
			<span>{{ title }}</span>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		titles: {
			type: Array,
			required: true,
		},
		display: {
			type: Boolean,
			required: true,
		},
		clickedProp: {
			type: String,
			required: true,
		},
	},
	emits: ['change-title'],
	data() {
		return {
			clicked: this.clickedProp,
		};
	},
	methods: {
		clickedFunction(title) {
			this.clicked = title;
			this.$emit('change-title', title);
		},
	},
};
</script>

<style scoped>
.sub-menu {
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: white;
	padding: 0px;
	left: -0.5rem;
	top: 2rem;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
	z-index: 10;
}
.sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: var(--line);
}
.sub-menu li:hover {
	background-color: var(--color-blue-light-2);
	color: var(--color-dark-1);
}
.sub-menu li {
	padding: 0px 10px;
}
.sub-menu li.clicked {
	color: var(--color-blue-2);
}
</style>
