<template>
	<div class="content">
		<form action="#" class="title-input-box" id="title-input">
			<textarea
				maxlength="300"
				class="title-input"
				placeholder="Title"
				v-model="inputTitle"
			/>
			<span class="char-count">{{ inputCharCount }}/300</span>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputCharCount: 0,
			inputTitle: '',
		};
	},
	watch: {
		inputTitle() {
			this.inputCharCount = this.inputTitle.length;
			return this.inputCharCount;
		},
	},
};
</script>

<style scoped>
.content {
	margin-top: 1.5rem;
	font-size: 1.4rem;
	/* height: 5.5rem; */
	background-color: #fff;
	border-radius: 0.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
}
.title-input-box {
	flex: 0 0 95%;

	display: flex;
	align-items: center;
	justify-content: center;
	border: var(--line);
	border-radius: 5px;
}
form.title-input-box:focus-within {
	background: white;
	outline-width: thin;
	border-color: black;
}

.title-input {
	font-family: inherit;
	color: inherit;
	padding: 0.7rem 2rem;
	width: 100%;
	display: block;
	height: 39px;
	overflow-y: hidden;
	overflow-wrap: break-word;
	resize: none;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	text-rendering: auto;
	letter-spacing: normal;
	word-spacing: normal;
	text-align: start;
	appearance: auto;
	cursor: text;
	white-space: pre-wrap;
	column-count: initial !important;
	border: none;
	caret-color: var(--color-blue-2);
}
.title-input:focus {
	outline: none;
}
.char-count {
	transform: translateX(-1rem);
	font-size: 1rem;
	font-weight: bold;
}
</style>
