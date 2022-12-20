<template>
	<div class="rule" @click="showRule">
		<div class="title">
			<p>{{ textDisplayed }}</p>
			<font-awesome-icon icon="fa-solid fa-chevron-down" v-if="!clicked" />
			<font-awesome-icon icon="fa-solid fa-chevron-up" v-else />
		</div>
		<p v-if="clicked">{{ rule.description }}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			clicked: false,
		};
	},
	props: {
		rule: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
	},
	methods: {
		showRule() {
			this.clicked = !this.clicked;
		},
	},
	computed: {
		textDisplayed() {
			return this.index + '.' + this.rule.ruleName;
		},
	},
};
</script>
<style scoped>
* {
	color: black;
	font-size: 13px;
	margin-bottom: 7px;
}
.title {
	display: flex;
	justify-content: space-between;
}
p {
	inline-size: 92%;
	overflow-wrap: break-word;
}
.rule > p {
	padding: 0 12px;
}
</style>
