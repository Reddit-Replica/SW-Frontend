<template>
	<div>
		<div class="row">
			<div class="flair-text-box">
				<span
					class="flair-text"
					:style="{ background: backgroundColor, color: textColor }"
					>{{ flairText }}</span
				>
			</div>
			<div class="buttons">
				<button class="small-button">Edit</button>
				<button class="small-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-trash"
						viewBox="0 0 16 16"
					>
						<path
							d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
						/>
						<path
							fill-rule="evenodd"
							d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="add-flair-box">
			<fieldset class="box-1">
				<legend class="legend">Flair appearance</legend>
				<div class="field">
					<label for="flair-text" class="full-width">
						<span class="flair-text-span">Flair text</span>
						<input
							type="text"
							name=""
							id="flair-text"
							maxlength="64"
							class="input-field"
							v-model.trim="flairText"
							:class="flairText == '' ? 'input-error' : ''"
							@keyup="charCount()"
						/>
						<div class="error" v-if="flairText == ''">
							Error: text or emoji is required
						</div>
						<div
							class="grey-title"
							:class="charRemainingName == 0 ? 'zero-char' : ''"
							v-else
						>
							{{ charRemainingName }} characters remaining
						</div>
					</label>
				</div>

				<!-- <div class="field">
				<label for="css-class" class="full-width">
					<span class="flair-text-span">CSS class</span>
					<input
						type="text"
						name=""
						id="css-class"
						class="input-field-css"
						placeholder="none"
					/>
					<div class="grey-title">Optional</div>
				</label>
			</div> -->

				<div class="field">
					<label class="label-box small-box-relative">
						<span class="flair-text-span-2">Flair background color</span>
						<div
							class="small-box"
							@click="viewPickerFunction()"
							:style="{ background: backgroundColor }"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-chevron-down icon-display"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>

							<div
								class="picker-color"
								@click="viewPickerFunction()"
								v-if="viewPicker"
							>
								<ColorPicker
									theme="light"
									:color="backgroundColor"
									:sucker-hide="false"
									:sucker-canvas="suckerCanvas"
									:sucker-area="suckerArea"
									@change-color="changeColor"
									@open-sucker="openSucker"
								/>
							</div>
						</div>
					</label>
				</div>
				<div class="field">
					<label class="label-box">
						<span class="flair-text-span-2">Flair text color</span>
						<button
							class="small-box-button"
							:class="textColor == 'white' ? 'white' : 'black'"
							@click="toggleTextColor(textColor)"
						>
							Aa
						</button>
					</label>
				</div>
			</fieldset>
			<!-- <fieldset class="box-1 box-2">
			<legend class="legend">Flair settings</legend>
		</fieldset> -->

			<div class="rule-box box-buttons">
				<base-button
					@click="hideAddFlair"
					class="button-white"
					id="cancel-button"
					>Cancel</base-button
				>
				<base-button
					@click="submitFlair()"
					class="button-blue"
					:class="flairText == '' ? 'disabled' : ''"
					id="save-button"
					v-if="!edit"
					>Save</base-button
				>
				<base-button
					@click="updateFlair()"
					class="button-blue"
					:class="
						flairText == '' || flairText == flairNameEdit ? 'disabled' : ''
					"
					id="save-button"
					v-else
					>Save</base-button
				>
			</div>

			<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
		</div>
	</div>
</template>

<script>
import { ColorPicker } from 'vue-color-kit';
export default {
	emits: ['doneSuccessfully', 'exit'],
	data() {
		return {
			charRemainingName: 64,
			textColor: this.textColorEdit,
			flairText: this.flairNameEdit,
			backgroundColor: this.backgroundColorEdit,
			suckerCanvas: null,
			suckerArea: [],
			isSucking: false,
			viewPicker: false,
			errorResponse: null,
		};
	},
	props: {
		// @vuese
		//return edited flair name
		// @type string
		flairNameEdit: {
			type: String,
			default: '',
			required: true,
		},
		// @vuese
		//return ed backgroundColor
		// @type string
		backgroundColorEdit: {
			type: String,
			default: 'posts and comments',
			required: true,
		},
		// @vuese
		//return report textColor edit
		// @type string
		textColorEdit: {
			type: String,
			default: '',
			required: true,
		},
		// @vuese
		//return if there is an edited rule
		// @type string
		edit: {
			type: Boolean,
			default: false,
			required: true,
		},
		// @vuese
		//return flair id
		// @type string
		flairId: {
			type: String,
			default: '',
			required: true,
		},
	},
	components: {
		ColorPicker,
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
	},
	methods: {
		//@vuese
		//Hide add flair
		//@arg no argument
		hideAddFlair() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		// @vuese
		// Used to change pick color
		// @arg the argument is the color picked
		changeColor(color) {
			const { r, g, b, a } = color.rgba;
			this.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
		},

		// @vuese
		// Used toggle text color
		// @arg the argument is the type of the oldest color
		toggleTextColor(type) {
			if (type == 'white') {
				this.textColor = 'black';
			} else if (type == 'black') {
				this.textColor = 'white';
			}
		},
		// @vuese
		// Used to toggle view picker
		// @arg no argument
		viewPickerFunction() {
			this.viewPicker = !this.viewPicker;
		},
		//@vuese
		//Decrease characters count while typing
		//@arg no argument
		charCount() {
			this.charRemainingName = 64 - this.flairText.length;
		},
		//@vuese
		//handle submit adding flair
		//@arg no argument
		async submitFlair() {
			this.errorResponse = null;
			try {
				await this.$store.dispatch('moderation/addFlair', {
					flairName: this.flairText,
					backgroundColor: this.backgroundColor,
					textColor: this.textColor,
					modOnly: true,
					allowUserEdits: false,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/addFlairSuccessfully']) {
					this.hideAddFlair();
					this.$emit('doneSuccessfully');
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},
		//@vuese
		//handle update flair
		//@arg no argument
		async updateFlair() {
			this.errorResponse = null;
			try {
				await this.$store.dispatch('moderation/updateFlair', {
					flairId: this.flairId,
					flairName: this.flairText,
					backgroundColor: this.backgroundColor,
					textColor: this.textColor,
					modOnly: true,
					allowUserEdits: false,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/updateFlairSuccessfully']) {
					this.hideAddFlair();
					this.$emit('doneSuccessfully');
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},
	},
};
</script>

<style scoped>
@import 'vue-color-kit/dist/vue-color-kit.css';
.add-flair-box {
	padding: 1.6rem;
}
.row {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
	background-color: var(--main-white-color);
	border-bottom: 1px solid var(--color-grey-dark-5);
	color: var(--color-dark-3);
	display: -ms-flexbox;
	display: flex;
	padding: 1.2rem 1.6rem;
	white-space: nowrap;
}
.flair-text-box {
	margin-left: 0;
	width: 40rem;
}
.flair-text {
	background-color: rgb(218, 218, 218);
	color: rgb(0, 0, 0);
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	border-radius: 2px;
	display: inline-block;
	margin-right: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: text-bottom;
	white-space: pre;
	word-break: normal;
	padding: 0 4px;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
}
.box-1 {
	flex: 1;
	max-width: 28rem;
	min-width: 0;
	min-height: 100%;
}
.legend {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	color: var(--color-grey-light-5);
}
.full-width {
	width: 100%;
}
.field {
	margin-top: 1.6rem;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
}
.label-box {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.flair-text-span {
	display: block;
	margin-bottom: 0.8rem;
	flex: 1;
}
.flair-text-span-2 {
	flex: 1;
}
.input-field {
	background-color: var(--color-blue-light-4);
	border-radius: 4px;
	color: var(--color-dark-3);
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
	flex-grow: 1;
	-ms-flex-negative: 1;
	flex-shrink: 1;
	overflow: hidden;
	padding: 8px 30px 8px 8px;
	max-height: 4rem;
	width: 100%;
}
.input-field:focus {
	outline: navajowhite;
	border: 1px solid var(--color-blue-2);
}
.input-field:hover {
	outline: navajowhite;
	border: 1px solid var(--color-grey-dark-6);
}
.input-error {
	outline: navajowhite;
	border: 1px solid var(--color-red-dark-1);
}
.error {
	color: var(--color-red-dark-1);
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	margin: 0.6rem 0.4rem;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.grey-title {
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	color: var(--color-grey-dark-8);
	margin: 6px 4px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.input-field-css {
	background-color: var(--color-blue-light-4);
	border-radius: 4px;
	border: none;
	color: var(--color-dark-3);
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
	flex-grow: 1;
	-ms-flex-negative: 1;
	flex-shrink: 1;
	overflow: hidden;
	padding: 8px 30px 8px 8px;
	max-height: 4rem;
	width: 100%;
}
.input-field-css:focus {
	outline: navajowhite;
	border: 1px solid var(--color-blue-2);
}
.small-box {
	background-color: rgb(218, 218, 218);
	fill: rgb(0, 0, 0);
	cursor: pointer;
	height: 2.4rem;
	width: 2.4rem;
	-ms-flex-align: center;
	align-items: center;
	border: 1px solid var(--color-grey-light-9);
	border-radius: 2px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-pack: center;
	justify-content: center;
}
.small-box:hover.icon-display {
	display: block;
}
.icon-display {
	height: 1.6rem;
	width: 1.6rem;
	/* display: none; */
}
.buttons {
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 2.4rem;
	text-transform: uppercase;
	display: -ms-flexbox;
	display: flex;
	-ms-flex: 1;
	flex: 1;
	-ms-flex-pack: end;
	justify-content: flex-end;
	white-space: nowrap;
}
.small-button {
	margin-left: 3.2rem;
	padding: 0;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	border: 1px solid transparent;
	background: transparent;
	color: var(--color-grey-light-5);
	fill: var(--color-grey-light-5);
	cursor: not-allowed;
	filter: grayscale(1);
	text-transform: uppercase;
	border-radius: 1rem;
}
.small-button:hover {
	background-color: var(--color-grey-light-7);
}
/* .trash {
	cursor: not-allowed;
	filter: grayscale(1);
	color: var(--color-grey-light-5);
	fill: var(--color-grey-light-5);
} */
.small-box-button {
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.6rem;
	-ms-flex-align: center;
	align-items: center;
	border-radius: 2px;
	border: 1px solid var(--color-grey-dark-8);
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	height: 2.4rem;
	-ms-flex-pack: center;
	justify-content: center;
	padding: 4px;
	width: 2.4rem;
	background-color: #f6f7f8;
	color: #1a1a1b;
}
.white {
	background-color: #f6f7f8;
	color: #1a1a1b;
}
.black {
	background-color: #878a8c;
	color: #fff;
}
.box-2 {
	margin-left: 4rem;
	-ms-flex: 1;
	flex: 1;
	max-width: 28rem;
	min-width: 0;
}
.picker-color {
	position: absolute;
	left: 30rem;
	top: -15rem;
}
.small-box-relative {
	position: relative;
	z-index: 1000;
}
.box-buttons {
	padding: 16px;
	margin: 16px -16px -16px;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
}
.button-blue,
.button-white {
	min-height: 3.5rem;
	min-width: 5rem;
	padding: 4px 16px;
	margin-left: 8px;
	font-size: 14px;
	font-weight: 700;
}
.button-blue,
.button-white:hover {
	opacity: 0.92;
}
.button-white {
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
}
.button-blue {
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
	padding: 0.4rem 1.6rem;
}
.disabled {
	cursor: not-allowed;
	filter: grayscale(1);
	border: none;
	color: rgba(255, 255, 255, 0.5);
	fill: rgba(255, 255, 255, 0.5);
	background-color: var(--color-grey-light-5);
}
.zero-char {
	color: #ea0027;
}
.no-messages {
	margin-top: 2rem;
	padding: 1rem;
}
</style>
