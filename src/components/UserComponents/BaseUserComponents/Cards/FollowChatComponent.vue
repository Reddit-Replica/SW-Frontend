<template>
	<div class="follow-chat-div">
		<base-button
			button-text="Follow"
			class="chat-follow-button"
			id="profile-follow-button"
		></base-button>
		<base-button
			button-text="Chat"
			class="chat-follow-button"
			id="profile-chat-button"
		></base-button>
	</div>
	<div v-if="blocked" class="blocked-user-button" id="blocked-user-box">
		<base-button
			class="blocked-button"
			id="blocked-user-button"
			@mouseover="blockedText = 'Unblocked'"
			@mouseleave="blockedText = 'Blocked'"
			>{{ blockedText }}</base-button
		>
	</div>
</template>

<script>
import BaseButton from '../../../BaseComponents/BaseButton.vue';
export default {
	props: {
		blocked: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	components: {
		BaseButton,
	},
	data() {
		return {
			blockedText: 'Blocked',
		};
	},
};
</script>

<style scoped>
.follow-chat-div {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
}
.chat-follow-button {
	/* border: 1px solid #ccc; */
	overflow: visible;
	word-wrap: break-word;
	background-color: var(--color-blue-2);
	color: var(--main-white-color);
	padding: 12px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	/* min-width: 32px; */
	padding: 4px 16px;
	align-items: center;
	border-radius: 9999px;
	display: flex;
	justify-content: center;
	text-align: center;
	width: 139px;
	position: relative;
}
.chat-follow-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}

.chat-follow-button:hover::before {
	opacity: 0.08;
}
.blocked-user-button {
	margin-top: 10px;
	width: 100%;
	height: 50px;
	position: relative;
}
.blocked-button {
	width: 100%;
	height: 32px;
	background-color: #ff4500;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	position: relative;
	border-radius: 9999px;
	font-size: 14px;
	font-weight: 700;
}
.blocked-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}
.blocked-button:hover::before {
	opacity: 0.08;
}
</style>
