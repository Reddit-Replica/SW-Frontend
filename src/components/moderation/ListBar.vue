<template>
	<div>
		<div class="bar" v-if="title != 'Rules'">
			<base-button class="button-white" v-if="isModeratorList"
				>Leave as mod</base-button
			>
			<base-button class="base-button">{{ barTitle }}</base-button>
		</div>
		<div class="bar" v-if="title == 'Rules'">
			<base-button class="reorder-button">Reorder rules</base-button>
			<base-button class="base-button">Add rule</base-button>
		</div>
		<div class="bar" v-if="title == 'Post flair'">
			<base-button class="button-white">Post flair settings</base-button>
			<base-button class="reorder-post-flair-button">Reorder</base-button>
			<base-button class="base-button">Add flair</base-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		// @vuese
		// title to be written in bar
		// @type string
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
.base-button:hover {
	background-color: var(--color-blue-6);
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
.button-white:hover {
	background-color: var(--color-blue-light-5);
}
.reorder-button {
	cursor: not-allowed;
	filter: grayscale(1);
	color: var(--color-grey-light-5);
	fill: var(--color-grey-light-5);
	position: relative;
	border: 1px solid transparent;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
	margin-right: 1rem;
}
.reorder-button:hover,
.reorder-post-flair-button:hover {
	background-color: var(--color-grey-light-4);
}
.reorder-post-flair-button {
	margin-left: 0.8rem;
	margin-right: 1.6rem;
	min-width: 10rem;
	cursor: not-allowed;
	filter: grayscale(1);
	border-color: var(--color-grey-light-5);
	border: 1px solid var(--color-grey-light-5);
	color: var(--color-grey-light-5);
	fill: var(--color-grey-light-5);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
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
	background: transparent;
}
</style>
