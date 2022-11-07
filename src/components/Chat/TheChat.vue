<template>
	<div v-if="showChatButton" class="chat-button">
		<div @click="showChatBox = true" class="dummy"></div>
		<h4>Chat</h4>
		<span @click="showChatButton = false"
			><i class="fa-solid fa-xmark icons"></i
		></span>
	</div>
	<div v-if="showChatBox" class="chat-box">
		<div class="chat-names">
			<ul>
				<li>saqer</li>
			</ul>
		</div>
		<div class="chatting-area">
			<div class="left-box">12</div>
			<div class="right-box">14</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showChatButton: true,
			showChatBox: false,
		};
	},
	methods: {
		handleFocusOut() {
			this.showChatBox = false;
		},
	},
};
</script>
<style scoped>
.chat-button {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	position: fixed;
	bottom: 0;
	right: 1.875em;
	width: 126px;
	height: 40px;
	background-color: #ffffff;
	color: #1c1c1c;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 16px 16px 0 0;
	cursor: pointer;
	padding: 0 1em;
	z-index: 60;
	border: 1px solid #edeff1;
	border-bottom: none;
	/* position: relative; */
}

.dummy {
	position: absolute;
	height: 100%;
	width: 78%;
	border-radius: 16px 0 0 0;
	left: 0;
	top: 0;
	/* background-color: #1c1c1c; */
}
.icons {
	font-size: 18px;
	font-weight: lighter;
	color: #8c8b8b;
	transition: all 0.3s;
	z-index: 800;
	display: none;
}
.chat-button h4 {
	margin: 0;
	padding: 0;
	/* font-weight: bold; */
}
.chat-button:hover .icons {
	display: block;
}
.chatting-area {
	position: fixed;
	bottom: 0;
	right: 1.875em;
	width: 632px;
	height: 506px;
	z-index: 60;
	border: 1px solid #edeff1;
	border-bottom: none;
	box-shadow: 0 0.125em 0.75em 0.125em rgba(20, 120, 120, 0.11);
	border-radius: 1em 1em 0 0;
	background-color: #fff;
	display: grid;
	grid-template-columns: 220px 412px;
}
.chatting-area .left-box {
	background-color: #1c1c1c;
}
.chatting-area .right-box {
	background-color: red;
}
</style>
