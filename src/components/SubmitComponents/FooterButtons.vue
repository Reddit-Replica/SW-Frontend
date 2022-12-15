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
			<div class="tool-tip">
				<span class="tool-tip-text">Mark as spoiler</span>
				<base-button
					@click="toggleSpoiler"
					class="grey-button"
					button-text="Spoiler"
					id="footer-button-spoiler"
					:disable-button="buttonDisabled"
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
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text-small strike"
					>Mark as Not Safe For Work</span
				>
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
			</div>
			<!-- <base-button
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
			</base-button> -->
			<!-- <v-select
				style="margin: 10px; color: #0079d3; fill: #0079d3"
				v-for="flair in flairs"
				:key="flair.id"
				:options="flair.flairName"
				v-model="flairId"
				@click="getFlairs()"
			>
				></v-select
			
			> -->
			<div class="tool-tip">
				<span class="tool-tip-text-small strike1">Add flair</span>
				<select
					@click="getFlairs()"
					v-model="flairId"
					style="
						margin-left: 10px;
						width: max-content;
						height: 35px;
						border-radius: 20px;
					"
				>
					<!-- <option value="" disabled selected>Choose a drink</option> -->
					<option
						v-for="flair in flairs"
						:id="'message-from-options-' + flair.flairId"
						:key="flair.flairId"
						:value="flair.flairId"
					>
						{{ flair.flairName }}
					</option>
				</select>
			</div>
		</div>

		{{ flairId }}
	</div>
</template>

<script>
// import vSelect from 'vue-select';
// import 'vue-select/dist/vue-select.css';
export default {
	components: {
		// vSelect,
	},
	data() {
		return {
			nsfw: false,
			spoiler: false,
			flairs: [],
			flairId: null,
			subreddit: null,
			buttonDisabled: true,
			insubreddit: null,
			disabled: true,
		};
	},
	watch: {
		getSubreddit(value) {
			this.subreddit = value;
			this.getPostsettings();
		},
		flairId(value) {
			this.flairId = value;
			this.setFlairId();
		},
	},
	computed: {
		getSubreddit() {
			var a = this.$store.getters['posts/getSubreddit'];
			return a;
		},
	},
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
		getFlairs() {
			this.flairs = this.$store.getters['moderation/listOfFlairs'];
			console.log('this.flairs');
			console.log(this.flairs);
		},

		async getPostsettings() {
			this.insubreddit = await this.$store.getters['posts/getinSubreddit'];
			if (this.insubreddit) {
				const actionPayload = {
					communityName: this.subreddit,
					baseurl: this.$baseurl,
				};
				console.log(actionPayload);
				try {
					const response = await this.$store.dispatch(
						'setting/fetcpostandcommentsSettings',
						actionPayload
					);
					if (response == 200) {
						console.log(response);
						console.log('الحمد لله زى الفل');
					}
				} catch (err) {
					this.error = err;
					console.log(err);
				}
				this.setting = await this.$store.getters[
					'setting/getpostandcommentsSettings'
				];
				console.log('getting settings');
				console.log(this.setting);
				if (this.setting.enableSpoiler) this.buttonDisabled = false;
				else this.buttonDisabled = true;
				this.getFlairs();
				if (this.flairs.length == 0) this.disabled = false;
				else this.disabled = true;
			} else this.buttonDisabled = true;
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
.tool-tip {
	position: relative;
	cursor: pointer;
}
.tool-tip-text {
	text-align: center;
	width: 100px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-35%);
	opacity: 0;
	left: 30%;
}

.tool-tip-text-small {
	text-align: center;
	width: 200px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-20%);
	opacity: 0;
}
.strike {
	width: 200px;
}
.strike1 {
	width: 100px;
}
.tool-tip-text::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip-text-small::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip:hover .tool-tip-text {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.tool-tip:hover .tool-tip-text-small {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.disable-Flair {
}
@media (max-width: 40em) {
	.buttons-section {
		justify-content: center;
		flex-wrap: wrap;
	}
}
</style>
