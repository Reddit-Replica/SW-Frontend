<template>
	<div id="mute-user-form">
		<base-dialog :show="muteShown" @close="hideMute" title="Mute user">
			<div class="mute-dialog flex-column">
				<div class="mute-box flex-column">
					<div class="mute-box-input flex-column">
						<input
							class="input-name"
							rows="5"
							type="text"
							placeholder="Username to mute"
							v-model.trim="muteUserName"
							id="user-name"
						/>
					</div>
				</div>
				<div class="mute-box-input flex-column">
					<label for="description" class="reason-note"
						>Note about why they are muted
						<p class="title-grey">
							Only visible to other moderators. Not visible to user
						</p>
					</label>
					<textarea
						class="input-name large-input"
						maxlength="300"
						type="text"
						placeholder="Reason they were muted"
						v-model.trim="reasonNote"
						@blur="reasonNote"
						@keyup="charCount()"
						id="reason-note"
					></textarea>
					<div
						class="title-grey"
						:class="charRemainingNote == 0 ? 'zero-char' : ''"
					>
						{{ charRemainingNote }} Characters remaining
					</div>
				</div>
				<div class="mute-box box-buttons">
					<base-button @click="hideMute" class="button-white" id="cancel-button"
						>Cancel</base-button
					>
					<base-button
						@click="submitMute()"
						class="button-blue"
						:class="muteUserName == '' ? 'disabled' : ''"
						id="mute-user-button"
						>Mute user
					</base-button>
				</div>

				<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
			</div>
		</base-dialog>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { BaseButton },
	emits: ['exit', 'doneSuccessfully'],
	props: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName: {
			type: String,
			default: '',
			required: true,
		},
	},
	data() {
		return {
			muteShown: true,
			muteUserName: '',
			charRemainingNote: 300,
			errorResponse: null,
			reasonNote: '',
		};
	},
	methods: {
		//@vuese
		//Hide dialog
		//@arg no argument
		hideMute() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		//@vuese
		//Decrease characters count while typing
		//@arg no argument
		charCount() {
			this.charRemainingNote = 300 - this.reasonNote.length;
		},
		//@vuese
		//handle submit ban user
		//@arg no argument
		async submitMute() {
			this.errorResponse = null;
			// try {
			// 	await this.$store.dispatch('moderation/muteUser', {
			// 		//////userId not ban user name
			// 		userId: this.banUserName,
			// 		banPeriod: this.banPeriod,
			// 		//////not enum
			// 		reasonForBan: this.reason,
			// 		modNote: this.modNote,
			// 		noteInclude: this.reasonNote,
			// 		baseurl: this.$baseurl,
			// 		subredditName: this.subredditName,
			// 	});
			// 	if (this.$store.getters['moderation/banUserSuccessfully']) {
			// 		this.hideMute();
			// 		this.$emit('doneSuccessfully');
			// 	}
			// } catch (err) {
			// 	console.log(err);
			// 	this.errorResponse = err;
			// }
		},
	},
};
</script>

<style scoped>
.mute-dialog {
	max-height: 100%;
	max-width: 53.8rem;
	min-width: 41rem;
}
.mute-box {
	margin-bottom: 3rem;
}
.title-grey {
	font-weight: 400;
	color: var(--color-grey-dark-2);
	font-size: 12px;
	line-height: 16px;
}
.mute-box-input {
	align-items: flex-start;
	margin-top: 1.2rem;
	margin-bottom: 3rem;
}
.box {
	margin-top: 1rem;
	width: 15rem;
	background-color: var(--color-dark-1);
	color: var(--color-white-1);
	font-size: 0.9rem;
	padding: 1rem;
	position: absolute;
	border-radius: 0.4rem;
	text-align: center;
	pointer-events: none;
	transform: translateX(-50%);
	z-index: 100;
	right: -16rem;
}
.input-name {
	border: 1px solid var(--color-grey-light-2);
	max-height: 3.7rem;
	padding: 0.4rem 1rem;
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	box-sizing: border-box;
	margin-bottom: 8px;
	border-radius: 4px;
	width: 100%;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
	height: 5rem;
}
input:focus,
textarea:focus {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
}

button {
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	margin-left: 8px;
	font-size: 14px;
	font-weight: 700;
}
button:hover {
	opacity: 0.92;
}
.button-white:hover {
	border: 1px solid var(--color-grey-dark-8);
	color: var(--color-grey-dark-8);
	padding: 0.4rem 1.6rem;
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
.zero-char {
	color: #ea0027;
}
.large-input {
	height: 9.6rem;
	max-height: 20rem;
	resize: vertical;
}
.disabled {
	cursor: not-allowed;
	filter: grayscale(1);
	border: none;
	color: rgba(255, 255, 255, 0.5);
	fill: rgba(255, 255, 255, 0.5);
	background-color: var(--color-grey-light-5);
}
.no-messages {
	margin-top: 2rem;
	padding: 1rem;
}
.reason-note {
	margin-bottom: 8px;
	text-align: left;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	color: var(--color-dark-3);
	font-size: 14px;
	line-height: 21px;
	display: block;
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 16px;
	margin: 16px -16px -16px;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
}
</style>
