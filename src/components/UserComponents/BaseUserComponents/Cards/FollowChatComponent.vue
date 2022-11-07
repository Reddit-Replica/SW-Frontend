<template>
	<div class="follow-chat-div">
		<base-button
			button-text="Follow"
			link="false"
			class="chat-follow-button"
			id="profile-follow-button"
		></base-button>
		<base-button
			button-text="Chat"
			link="false"
			class="chat-follow-button"
			id="profile-chat-button"
		></base-button>
	</div>
</template>

<script>
import BaseButton from '../../../BaseComponents/BaseButton.vue';
export default {
	components: {
		BaseButton,
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
	border: 1px solid #ccc;
	overflow: visible;
	word-wrap: break-word;
	background-color: #0079d3;
	color: #ffffff;
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
</style>
