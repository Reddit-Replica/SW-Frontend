<template>
	<div style="position: relative" id="empty-user-page-content">
		<div
			id="empty-user-unfound-paragraph-page-content"
			class="unfound-paragraph"
		>
			{{ pageTitle }}
		</div>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
		<empty-box></empty-box>
	</div>
</template>
<script>
import EmptyBox from './EmptyBox.vue';
export default {
	components: {
		EmptyBox,
	},
	props: {
		// @vuese
		// the title shown in the empty page
		pageTitle: {
			type: String,
			required: true,
		},
	},
};
</script>
<style scoped>
.unfound-paragraph {
	position: absolute;
	top: 28%;
	z-index: 5;
	left: 50%;
	transform: translateX(-50%);
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: #1c1c1c;
	width: 100%;
	text-align: center;
}
</style>
