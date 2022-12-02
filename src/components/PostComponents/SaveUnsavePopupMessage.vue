<template>
	<div class="pop-message" v-if="!close">
		<div class="left">
			<font-awesome-icon
				icon="fa-solid fa-xmark"
				class="icon"
				@click="closeMessage"
			/>
		</div>
		<div class="right">
			<p>{{ type }}&nbsp;{{ state }}&nbsp;successfully</p>
		</div>
		<div class="undo">
			<base-button @click="undo">Undo</base-button>
		</div>
	</div>
</template>
<script>
export default {
	emits: ['undoAction'],
	data() {
		return {
			close: false,
		};
	},
	props: {
		//@vuese
		//type component being saved or unsaved
		type: {
			type: String,
			required: true,
			default: '',
		},
		//@vuese
		//the state of component save or unsave
		state: {
			type: String,
			required: true,
			default: '',
		},
		//@vuese
		//id of pot/comment
		typeid: {
			type: String,
			required: true,
			default: '',
		},
	},
	methods: {
		//@vuese
		//closing the message
		closeMessage() {
			this.close = true;
		},
		//@vuese
		//undo action
		undo() {
			// Fire when the action is undone
			// @arg The argument are a string value representing state, a string value representing id
			this.$emit('undoAction', this.state, this.typeid);
		},
	},
};
</script>
<style scoped>
.pop-message {
	width: 476px;
	border-radius: 5px;
	height: 50px;
	display: flex;
	align-items: center;
	overflow: hidden;
	border: 1px solid var(--color-grey-dark-10);
	background-color: white;
	margin: 10px 0;
}
.left {
	width: 26px;
	background-color: var(--color-blue);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: 1px solid var(--color-blue);
}
.right {
	width: 386px;
	background-color: white;
	position: relative;
	right: 12px;
	transition: all 0.5s;
	height: 100%;
}
.icon {
	color: white;
	width: 22px;
	height: 22px;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 0.5s linear;
	cursor: pointer;
}
.pop-message:hover .icon {
	visibility: visible;
	opacity: 1;
}
.pop-message:hover .right {
	right: 0;
}
.right p {
	color: black;
	font-size: 15px;
	line-height: 50px;
	padding-left: 10px;
}
.undo button {
	height: 30px;
	width: 65px;
	color: var(--color-blue);
	font-size: 15px;
	font-weight: bold;
	background-color: white;
	margin-right: 10px;
}
.undo:hover button {
	background-color: var(--color-grey-light-14);
}
</style>
