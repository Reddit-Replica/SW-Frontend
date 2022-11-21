<template>
	<div id="create-rule-form">
		<base-dialog :show="addRuleShown" @close="hideAddRule" title="Add rule">
			<div class="rule-dialog flex-column">
				<div class="rule-box flex-column">
					<div class="rule-box-input flex-column">
						<label for="rule-input" class="title-black">Rule</label>
						<textarea
							class="input-name"
							maxlength="100"
							rows="5"
							type="text"
							placeholder="Rule displayed(e.g. 'No photo')"
							v-model.trim="ruleName"
							@blur="ruleName"
							@keyup="charCount('name')"
							id="rule-input"
						></textarea>
						<div
							class="title-grey"
							:class="charRemainingName == 0 ? 'zero-char' : ''"
						>
							{{ charRemainingName }} Characters remaining
						</div>
					</div>
				</div>
				<div class="rule-box flex-column">
					<div class="rule-box-title">
						<label for="type-post" class="title-black">Aplies to</label>
					</div>
					<div class="rule-box-input flex-column" role="radiogroup">
						<input type="hidden" />
						<div
							class="type-item"
							role="radio"
							value="public"
							@click="chooseType(0)"
							id="type-post"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-circle"
								viewBox="0 0 16 16"
								v-if="!typeChosen0"
							>
								<path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-record-circle-fill"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<div class="title-black">Posts & comments</div>
						</div>
						<div
							class="type-item"
							role="radio"
							value="restricted"
							@click="chooseType(1)"
							id="type-restricted"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-circle"
								viewBox="0 0 16 16"
								v-if="!typeChosen1"
							>
								<path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-record-circle-fill"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<div class="title-black">Posts only</div>
						</div>
						<div
							class="type-item"
							role="radio"
							value="private"
							@click="chooseType(2)"
							id="type-private"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-circle"
								viewBox="0 0 16 16"
								v-if="!typeChosen2"
							>
								<path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-record-circle-fill"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<div class="title-black">Comments only</div>
						</div>
					</div>
				</div>
				<div class="rule-box-input flex-column">
					<label for="rule-report" class="title-black"
						><p>Report reason</p>
						<p class="small-title">
							Defaults to rule name if left blank
						</p></label
					>
					<textarea
						class="input-name"
						maxlength="100"
						rows="5"
						type="text"
						:placeholder="ruleName"
						v-model.trim="reportReason"
						@blur="reportReason"
						@keyup="charCount('reason')"
						id="rule-report"
					></textarea>
					<div
						class="title-grey"
						:class="charRemainingReason == 0 ? 'zero-char' : ''"
					>
						{{ charRemainingReason }} Characters remaining
					</div>
				</div>
				<div class="rule-box-input flex-column">
					<label for="description" class="title-black">Full description</label>
					<textarea
						class="input-name large-input"
						maxlength="500"
						type="text"
						placeholder="Enter the full description of the rule"
						v-model.trim="description"
						@blur="description"
						@keyup="charCount('description')"
						id="description"
					></textarea>
					<div
						class="title-grey"
						:class="charRemainingDescription == 0 ? 'zero-char' : ''"
					>
						{{ charRemainingDescription }} Characters remaining
					</div>
				</div>
				<div class="rule-box box-buttons">
					<base-button
						@click="hideAddRule"
						class="button-white"
						id="cancel-button"
						>Cancel</base-button
					>
					<base-button
						@click="submitCommunity"
						class="button-blue"
						:class="ruleName == '' ? 'disabled' : ''"
						id="create-button"
						>Add new rule</base-button
					>
				</div>
			</div>
		</base-dialog>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { BaseButton },
	emits: ['exit'],
	data() {
		return {
			addRuleShown: true,
			typeChosen0: true,
			typeChosen1: false,
			typeChosen2: false,
			appliedType: 'Posts & comments',
			ruleName: '',
			reportReason: '',
			description: '',
			charRemainingName: '100',
			charRemainingReason: '100',
			charRemainingDescription: '500',
		};
	},
	methods: {
		//@vuese
		//Hide dialog
		//@arg no argument
		hideAddRule() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		//@vuese
		//Set chosen community type (public, restricted, private)
		//@arg index to indicate chosen type
		chooseType(index) {
			if (index == 2) {
				this.typeChosen2 = true;
				this.typeChosen1 = false;
				this.typeChosen0 = false;
				this.appliedType = 'Posts & comments';
			} else if (index == 1) {
				this.typeChosen1 = true;
				this.typeChosen2 = false;
				this.typeChosen0 = false;
				this.appliedType = 'Posts only';
			} else {
				this.typeChosen0 = true;
				this.typeChosen1 = false;
				this.typeChosen2 = false;
				this.appliedType = 'Comments only';
			}
		},
		//@vuese
		//Decrease characters count while typing
		//@arg no argument
		charCount(title) {
			if (title == 'reason') {
				this.charRemainingReason = 100 - this.reportReason.length;
			} else if (title == 'name') {
				this.charRemainingName = 100 - this.ruleName.length;
			} else if (title == 'description') {
				this.charRemainingDescription = 500 - this.description.length;
			}
		},
	},
};
</script>

<style scoped>
.rule-dialog {
	max-height: 100%;
	max-width: 53.8rem;
	min-width: 41rem;
}
.rule-box {
	margin-bottom: 3rem;
}
.rule-box-title {
	max-width: 100%;
	margin-bottom: -4px;
	margin-right: 8px;
}
.title-black {
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 2rem;
	color: var(--color-dark-1);
	/* display: flex; */
	margin-bottom: 0.4rem;
}
.title-grey {
	font-weight: 400;
	color: var(--color-grey-dark-2);
	font-size: 12px;
	line-height: 16px;
}
.rule-box-input {
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
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 16px;
	margin: 16px -16px -16px;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
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
.button-white {
	border: 1px solid var(--color-grey-dark-8);
	color: var(--color-grey-dark-8);
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
</style>
