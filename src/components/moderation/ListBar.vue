<template>
	<div>
		<div class="bar">
			<base-button class="button-white" v-if="isModeratorList"
				>Leave as mod</base-button
			>
			<base-button class="base-button">{{ barTitle }}</base-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
			required: true,
		},
	},
	data() {
		return {};
	},
	computed: {
		barTitle() {
			if (this.title == 'Banned') {
				return 'Ban user';
			} else if (this.title == 'Muted') {
				return 'Mute user';
			} else if (this.title == 'Approved') {
				return 'Approve user';
			} else {
				return 'Invite user as mod';
			}
		},
		isModeratorList() {
			return this.barTitle == 'Invite user as mod';
		},
	},
};
</script>

<style scoped>
.bar {
	-ms-flex-align: center;
	align-items: center;
	background-color: var(--color-grey-light-10);
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	height: 4.8rem;
	-ms-flex-pack: end;
	justify-content: flex-end;
	left: 28rem;
	padding: 0 2.4rem;
	position: fixed;
	right: 0;
	z-index: 3;
}
.base-button {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 4px 1.6rem;
	-ms-flex-align: center;
	align-items: center;
	border-radius: 9999px;
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
	text-align: center;
	width: auto;
}
.button-white {
	margin-right: 0.8rem;
	position: relative;
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
}
</style>
