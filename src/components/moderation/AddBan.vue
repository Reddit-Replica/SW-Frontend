<template>
	<div id="create-ban-form">
		<base-dialog :show="banShown" @close="hideBan" title="Ban a user:">
			<div class="ban-dialog flex-column">
				<div class="ban-box flex-column">
					<div class="ban-box-input flex-column">
						<label for="ban-input" class="title-black">Enter username</label>
						<input
							class="input-name"
							rows="5"
							type="text"
							placeholder="u/username"
							v-model.trim="banUserName"
							@keyup="charCount('name')"
							id="user-name"
						/>
					</div>
				</div>
				<div class="ban-box-input flex-column">
					<label for="ban-report" class="title-black"
						><p>Reason for ban</p></label
					>
					<select
						class="input-name"
						v-model.trim="reason"
						@blur="reason"
						id="reason-input"
					>
						<option
							v-for="reasonRule of listOfRules"
							:key="reasonRule.ruleName"
							:value="reasonRule.ruleName"
							:id="reasonRule.ruleName"
							class="options"
						>
							{{ reasonRule.ruleName }}
						</option>
						<option class="options">Spam</option>
						<option class="options">
							Personal And Confidential Information
						</option>
						<option class="options">
							Threatening, Harassing, Or Incities Violence
						</option>
						<option class="options">Other</option>
					</select>
				</div>
				<div class="ban-box-input flex-column">
					<label for="description" class="title-black">Mod note</label>
					<input
						class="input-name"
						maxlength="300"
						type="text"
						placeholder="Mod note"
						v-model.trim="modNote"
						@blur="modNote"
						@keyup="charCount('note')"
						id="note"
					/>
					<div
						class="title-grey"
						:class="charRemainingNote == 0 ? 'zero-char' : ''"
					>
						{{ charRemainingNote }} Characters remaining
					</div>
				</div>
				<div class="ban-box flex-column">
					<div class="ban-box-input flex-column">
						<label for="ban-input" class="title-black">How long?</label>
						<div
							class="long"
							:class="checkPermanent == true ? 'disable-period' : ''"
						>
							<div class="input-1">
								<input
									type="number"
									min="0"
									name="banPeriod"
									id="banPeriod"
									v-model.trim="banPeriod"
									class="input-number"
								/>
								<p class="p-input-1">Days</p>
							</div>
							<div class="input-2">
								<input
									type="checkbox"
									id="checkPermanent"
									name="checkPermanent"
									value="checkPermanent"
									v-model.trim="checkPermanent"
								/>
								<label for="checkPermanent" class="permanent"> Permanent</label>
							</div>
						</div>
					</div>
				</div>

				<div class="footer">
					<div class="ban-box-input flex-column">
						<label for="reason-note" class="reason-note"
							>Note to include in ban message</label
						>
						<textarea
							class="input-name large-input"
							maxlength="500"
							type="text"
							placeholder="Reason they were banned"
							v-model.trim="reasonNote"
							@blur="reasonNote"
							@keyup="charCount('reasonNote')"
							id="reason-note"
						></textarea>
						<div
							class="title-grey"
							:class="charRemainingReasonNote == 0 ? 'zero-char' : ''"
						>
							{{ charRemainingReasonNote }} Characters remaining
						</div>
					</div>
					<div class="footer-buttons">
						<div class="footer-p">Visible to banned user</div>
						<div class="ban-box box-buttons">
							<base-button
								@click="hideBan"
								class="button-white"
								id="cancel-button"
								>Cancel</base-button
							>
							<base-button
								@click="submitBan()"
								class="button-blue"
								:class="
									banUserName == '' ||
									reason == 'None' ||
									(banPeriod == 0 && !checkPermanent)
										? 'disabled'
										: ''
								"
								id="delete-button"
								>Ban user</base-button
							>
						</div>
					</div>
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
	emits: ['exit', 'doneSuccessfully', 'clickedDelete'],
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
			banShown: true,
			banUserName: '',
			reason: 'None',
			modNote: '',
			charRemainingNote: 300,
			errorResponse: null,
			charRemainingReasonNote: 5000,
			reasonNote: '',
			checkPermanent: true,
			banPeriod: '',
		};
	},
	// @vuese
	//load List of Rules before mount
	beforeMount() {
		this.loadListOfRules();
	},

	computed: {
		// @vuese
		//return list of Rules
		// @type object
		listOfRules() {
			return this.$store.getters['moderation/listOfRules'];
		},
	},
	methods: {
		//@vuese
		//Hide dialog
		//@arg no argument
		hideBan() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		//@vuese
		//Decrease characters count while typing
		//@arg no argument
		charCount(title) {
			if (title == 'note') {
				this.charRemainingNote = 300 - this.modNote.length;
			} else if (title == 'reasonNote') {
				this.charRemainingReasonNote = 5000 - this.reasonNote.length;
			}
		},

		// @vuese
		//load Rules list from the store
		// @arg no argument
		async loadListOfRules() {
			try {
				await this.$store.dispatch('moderation/loadListOfRules', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		//@vuese
		//handle submit ban user
		//@arg no argument
		async submitBan() {
			this.errorResponse = null;
			if (this.checkPermanent) {
				this.banPeriod = '';
			}
			try {
				await this.$store.dispatch('moderation/banUser', {
					//////userId not ban user name
					userId: this.banUserName,
					banPeriod: this.banPeriod,
					//////not enum
					reasonForBan: this.reason,
					modNote: this.modNote,
					noteInclude: this.reasonNote,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/banUserSuccessfully']) {
					this.hideBan();
					this.$emit('doneSuccessfully');
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},

		//@vuese
		//handle delete rule
		//@arg no argument
		async deleteBan() {
			this.hideBan();
		},
	},
};
</script>

<style scoped>
.ban-dialog {
	max-height: 100%;
	max-width: 53.8rem;
	min-width: 41rem;
}
.ban-box {
	margin-bottom: 3rem;
}
.ban-box-title {
	max-width: 100%;
	margin-bottom: -4px;
	margin-right: 8px;
}
.title-black {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	color: var(--color-grey-dark-8);
	display: block;
	margin-bottom: 0.8rem;
}
.title-grey {
	font-weight: 400;
	color: var(--color-grey-dark-2);
	font-size: 12px;
	line-height: 16px;
}
.ban-box-input {
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
.type-item {
	outline: 0 none;
	align-items: flex-start;
	margin-bottom: 16px;
	display: flex;
	flex-direction: row;
	column-gap: 5px;
}
.bi {
	color: var(--color-grey-dark-2);
}
.bi-record-circle-fill {
	fill: var(--color-blue-2);
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
.small-title {
	color: var(--color-grey-light-5);
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	display: block;
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
.delete-button {
	margin-right: auto;
	color: var(--color-red-dark-1);
	position: relative;
	border: 1px solid transparent;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
}
.delete-button:hover {
	background-color: var(--color-grey-light-4);
}
.no-messages {
	margin-top: 2rem;
	padding: 1rem;
}
.permanent {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 0.7rem;
	color: var(--color-dark-3);
	display: inline-block;
	vertical-align: text-top;
	margin-left: 4px;
}
.long {
	display: flex;
	flex-direction: row;
}
.input-1 {
	background: var(--main-white-color);
}
.input-number {
	background-color: var(--main-white-color);
	border: 1px solid var(--color-grey-light-9);
	border-radius: 4px 0 0 4px;
	color: var(--color-dark-3);
	display: inline-block;
	width: 7.5rem;
	box-sizing: border-box;
	padding: 1.2rem;
	outline: none;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
	height: 3.6rem;
}
.p-input-1 {
	border: 1px solid var(--color-grey-light-9);
	border-left: none;
	border-radius: 0 4px 4px 0;
	box-sizing: border-box;
	display: inline-block;
	height: 100%;
	padding-left: 1.6rem;
	padding-right: 1.6rem;
	padding-top: 0.3rem;
	vertical-align: top;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	color: var(--color-dark-3);
	font-size: 1.4rem;
	line-height: 2.1rem;
}
.input-2 {
	margin: 9px 0 0 16px;
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
.footer {
	flex-flow: row wrap;
	background-color: #edeff1;
	border-top: 1px solid var(--color-grey-dark-5);
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: end;
	justify-content: flex-end;
	padding: 16px;
	border-bottom-right-radius: 4px;
	border-bottom-left-radius: 4px;
	flex-direction: column;
	margin: 0;
	margin: 16px -16px -16px;
}
.footer-p {
	float: left;
	margin-top: 6px;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #1c1c1c;
	display: inline-block;
	vertical-align: text-top;
}
.box-buttons {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-align: center;
	align-items: center;
	margin-left: auto;
}
.footer-buttons {
	margin-bottom: 0;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	margin-bottom: 8px;
	width: 100%;
	box-sizing: border-box;
	/* padding: 16px; */
	/* margin: 16px -16px -16px 16px; */
	/* display: flex; */
	/* justify-content: flex-end; */
	/* border-bottom-right-radius: 4px; */
	/* box-sizing: border-box; */
}
.disable-period {
	opacity: 0.6;
	cursor: not-allowed;
}
.options {
	color: var(--color-grey-dark-8);
	cursor: pointer;
	overflow: hidden;
	padding: 8px 16px 8px 8px;
	text-overflow: ellipsis;
	border-top: 1px solid var(--color-grey-light-9);
	border-bottom: none;
}
</style>
