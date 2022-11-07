<template>
	<div class="about-bar">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">About Community</h2></div>
			<div class="about-options">
				<router-link to="/subreddit" class="mod-tools">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-hexagon"
						viewBox="0 0 16 16"
					>
						<path
							d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
						/>
					</svg>
					<span>MOD TOOLS</span>
				</router-link>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-three-dots"
					viewBox="0 0 16 16"
					@click="dotsClick"
				>
					<path
						d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
					/>
				</svg>
				<div class="box-options" v-if="dotsClicked">
					<button class="button-option" @click="addToCustomFeed">
						Add To Custom Feed
					</button>
					<button class="button-option" @click="addToFavourite">
						Add To Favourites
					</button>
				</div>
			</div>
		</div>
		<div class="about-body">
			<div class="description-1" @click="toogleTextarea" v-if="!textareaShown">
				<div class="description-1-text">Add description</div>
			</div>
			<div class="description-1 blue-border" v-else @blur="toogleTextarea">
				<textarea
					placeholder="Tell us about your community"
					maxlength="500"
					rows="1"
					class="description-textarea"
					@keyup="charCount()"
					v-model.trim="description"
				></textarea>
				<div class="flex">
					<span class="span-char"
						>{{ charRemaining }} Characters remaining</span
					>
					<span class="span-cancel-save span-cancel" @click="toogleTextarea"
						>Cancel</span
					>
					<span class="span-cancel-save span-save" @click="saveDescription"
						>Save</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dotsClicked: false,
			addedToCustomFeed: false,
			addedToFavourite: false,
			charRemaining: 500,
			textareaShown: false,
			communityDescription: '',
			description: '',
		};
	},
	methods: {
		dotsClick() {
			this.dotsClicked = !this.dotsClicked;
		},
		addToCustomFeed() {
			this.addedToCustomFeed = true;
		},
		addToFavourite() {
			this.addedToFavourite = true;
		},
		charCount() {
			this.charRemaining--;
		},
		toogleTextarea() {
			this.textareaShown = !this.textareaShown;
			console.log(this.textareaShown);
		},
		saveDescription() {
			this.communityDescription = this.description;
		},
	},
};
</script>

<style scoped>
.about-bar {
	background-color: var(--color-white-1);
	color: var(--color-dark-4);
	fill: var(--color-dark-4);
	border: var(--line-10);
	border-radius: 0.4rem;
	overflow: visible;
	word-wrap: break-word;
}
.about-header {
	/* font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase; */
	background-color: var(--color-blue-2);
	border-radius: 3px 3px 0 0;
	color: var(--color-white-1);
	display: flex;
	fill: var(--color-white-1);
	padding: 0 12px 12px;
}
.about-title {
	padding: 12px 0 0;
}
.about-h2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	font-weight: 700;
	text-transform: none;
}
.about-options {
	margin: auto 0 auto auto;
	padding-top: 10px;
	vertical-align: middle;
}
.mod-tools {
	color: var(--color-white-1);
	outline: none;
	border-radius: 2px;
	border-radius: 4px;
	display: inline-block;
	padding: 4px;
}
.mod-tools:hover {
	background-color: rgba(0, 53, 132, 0.2);
}
a {
	text-decoration: none;
}
.bi-hexagon {
	margin-right: 4px;
}
.bi-three-dots:hover {
	background-color: rgba(0, 53, 132, 0.2);
	border-radius: 2px;
	cursor: pointer;
}
.box-options {
	left: 788px;
	top: 220px;
	border: 1px solid var(--color-blue-light-2);
	border-radius: 4px;
	box-shadow: var(--shadow-menu);
	color: var(--color-dark-4);
	overflow: hidden;
	background-color: var(--color-white-1);
	position: absolute;
	z-index: 10;
}
.button-option {
	color: var(--color-grey-light-5);
	background-color: var(--color-white-1);
	outline: none;
	border: none;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: block;
	padding: 8px;
	text-transform: capitalize;
	width: 100%;
	text-align: left;
}
.button-option:hover {
	color: var(--color-dark-4);
	background-color: var(--color-blue-light-2);
}
.about-body {
	padding: 12px;
}
.description-1 {
	display: block;
	background-color: var(--color-blue-light-4);
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 12px;
	margin-top: 8px;
	border: var(--line-10);
	cursor: pointer;
}
.description-1:hover {
	border: var(--line-5);
}
.blue-border {
	border: var(--line-5);
}

.description-1-text {
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: var(--color-blue-2);
}
.description-textarea {
	overflow: hidden;
	overflow-wrap: break-word;
	height: 21px;
	resize: none;
	cursor: auto;

	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	line-height: 21px;
	font-weight: 400;
	word-wrap: break-word;
	width: 100%;
	padding: 0;
	border: none;
	background-color: transparent;
	outline: none;
	color: var(--color-dark-4);
}
.span-char {
	flex: 100%;
	color: var(--color-grey-light-5);
	padding-top: 5px;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
}
.span-cancel {
	margin-right: 8px;
	color: red;
}
.span-save {
	color: var(--color-blue-2);
}
.span-cancel-save {
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	cursor: pointer;
	align-self: flex-end;
}
.flex {
	display: flex;
}
</style>
