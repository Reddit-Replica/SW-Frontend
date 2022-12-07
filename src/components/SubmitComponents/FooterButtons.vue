<template>
	<div class="row">
		<div class="buttons-section">
			<!-- <base-button class="grey-button" button-text="OC" id="footer-button-oc">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus button-icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
					/>
				</svg>
			</base-button> -->
			<base-button
				@click="toggleSpoiler"
				class="grey-button"
				button-text="Spoiler"
				id="footer-button-spoiler"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus button-icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
					/>
				</svg>
			</base-button>
			<base-button
				class="grey-button"
				button-text="NSFW"
				id="footer-button-nsfw"
				@click="toggleNsfw"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus button-icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
					/>
				</svg>
			</base-button>
			<base-button
				@click="setFlairId"
				class="grey-button not-allowed"
				id="footer-button-flair"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-tag button-icon tag-icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
					/>
					<path
						d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
					/>
				</svg>
				Flair
				<svg class="button-icon">
					<use xlink:href="../../../img/sprite.svg#icon-chevron-small-down" />
				</svg>
			</base-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nsfw: false,
			spoiler: false,
			flairId: null,
		};
	},
	watch: {},
	methods: {
		toggleNsfw() {
			this.nsfw = !this.nsfw;
			this.$store.commit('posts/setNsfw', {
				nsfw: this.nsfw,
			});
		},
		toggleSpoiler() {
			this.spoiler = !this.spoiler;
			this.$store.commit('posts/setSpoiler', {
				spoiler: this.spoiler,
			});
		},
		setFlairId() {
			this.$store.commit('posts/setFlairId', {
				flairId: this.flairId,
			});
		},
	},
};
</script>

<style scoped>
.buttons-section {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	max-width: 100%;
	min-width: 0;
	margin: 1rem;
}
.button-icon {
	height: 3rem;
	width: 3rem;
	fill: gray;
}
.tag-icon {
	height: 2.5rem;
	width: 2.5rem;
}
.grey-button {
	border: var(--line-7);
	color: var(--color-grey-dark-2);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	height: 32px;
	padding: 4px 16px;
	background-color: white;
	margin: 0 0.2rem;
}
.grey-button:hover {
	background-color: var(--color-grey-light-1);
}
.grey-button:active {
	background-color: var(--color-grey-light-2);
}
.not-allowed {
	cursor: not-allowed;
	border: var(--line);
	color: var(--color-grey-dark-4);
}
.not-allowed .button-icon {
	fill: var(--color-grey-dark-4);
}
.not-allowed:hover {
	background-color: var(--color-white-1);
}
.not-allowed:active {
	background-color: var(--color-white-1);
}
@media (max-width: 40em) {
	.buttons-section {
		justify-content: center;
		flex-wrap: wrap;
	}
}
</style>
