<template>
	<div class="url-content">
		<form class="url-form">
			<textarea
				placeholder="Url"
				class="url-placeholder"
				rows="1"
				v-model="content"
				id="title"
			></textarea>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			content: '',
		};
	},
	methods: {
		setContent(value) {
			this.$store.commit('posts/setContent', {
				content: value,
			});
		},
	},
	watch: {
		content(value) {
			this.content = value;
			this.setContent(value);
		},
	},
};
</script>

<style scoped>
.url-content {
	background-color: transparent;
	width: 100%;
	margin-top: 0.5rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	max-height: 35rem;
	padding: 1rem 2rem;
}
.url-form {
	outline: none;
	font: inherit;
	min-height: 2rem;
	height: max-content;
	width: 100%;
	border-radius: 4px;
	border: var(--line);
}
form.url-form:focus-within {
	background: white;
	outline-width: thin;
	border-color: black;
}
.url-placeholder {
	outline: none;
	height: 8rem;
	width: 100%;
	padding: 0.7rem 2rem;
	background-color: transparent;
	resize: none;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	font-family: inherit;
	border-radius: 4px;
	border: none;
}
.url-placeholder:focus {
	outline: none;
}
</style>
