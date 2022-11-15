<template>
	<list-bar :title="title"></list-bar>
</template>

<script>
import ListBar from './ListBar.vue';
export default {
	components: { ListBar },
	props: {
		title: {
			type: String,
			default: '',
			required: true,
		},
	},
};
</script>

<style></style>
