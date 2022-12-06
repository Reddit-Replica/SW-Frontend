<template>
	<div id="create-rule-form">
		<base-dialog
			:show="addInviteShown"
			@close="hideAddInvite"
			title="Invite Moderators"
		>
			<div class="rule-dialog flex-column">
				<div class="rule-box flex-column">
					<div class="rule-box-input flex-column">
						<input
							class="input-name"
							maxlength="100"
							rows="5"
							type="text"
							placeholder="Enter Username"
							v-model.trim="userName"
							id="invited-user-name"
						/>
					</div>
				</div>
				<div class="rule-box flex-column">
					<div class="rule-box-title">
						<div class="title-black">Give them access to...</div>
					</div>
					<div class="box-1">
						<input type="checkbox" name="everything" id="everythig" />
						<span class="title-grey">Everything </span>
					</div>
					<p class="p-text">
						Full access including the ability to manage moderator access and
						permissions
					</p>
				</div>
				<hr class="border" />
				<div class="rule-box box-buttons">
					<base-button
						@click="hideAddInvite"
						class="button-white"
						id="cancel-button"
						>Cancel</base-button
					>
					<base-button
						@click="submitInvite()"
						class="button-blue"
						:class="userName == '' ? 'disabled' : ''"
						id="create-rule-button"
						>Invite
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
			addInviteShown: true,
			userName: '',
			errorResponse: null,
		};
	},
	methods: {
		//@vuese
		//Hide dialog
		//@arg no argument
		hideAddInvite() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		//@vuese
		//handle submit adding rule
		//@arg no argument
		async submitInvite() {
			this.errorResponse = null;
			if (this.reportReason == '') {
				this.reportReason = this.ruleName;
			}
			try {
				await this.$store.dispatch('moderation/addRule', {
					ruleName: this.ruleName,
					appliesTo: this.appliedType,
					reportReason: this.reportReason,
					description: this.description,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/addRuleSuccessfully']) {
					this.hideAddInvite();
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
	color: var(--color-dark-3);
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
}
.box-1 {
	display: block;
	margin-top: 1.6rem;
}
.p-text {
	margin: 0.2rem 0 0 2.4rem;
	color: var(--color-grey-light-5);
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
}
.border {
	margin: 1.6rem 0 0;
	border: 0;
	border-top: 1px solid var(--color-grey-light-9);
}

.title-grey {
	font-weight: 400;
	color: var(--color-dark-3);
	font-size: 1.2rem;
	line-height: 0rem;
	margin-left: 0.5rem;
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
input:focus {
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
</style>
