<template>
	<div id="sure-popup-form">
		<base-dialog :show="sureShown" @close="hideSure()" title="Delete rule">
			<div class="rule-dialog flex-column">
				<div class="rule-box-p flex-column">
					<p class="sure-text">Are you sure you want to delete this rule?</p>
				</div>
				<div class="rule-box box-buttons">
					<base-button
						@click="hideSure()"
						class="button-white"
						id="cancel-button"
						>Cancel</base-button
					>
					<base-button
						@click="deleteRule()"
						class="button-blue"
						id="delete-button"
						>Delete</base-button
					>
				</div>
				<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
			</div>
		</base-dialog>
	</div>
</template>

<script>
export default {
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
		// @vuese
		//return rule id
		// @type string
		ruleId: {
			type: String,
			default: '',
			required: true,
		},
	},
	data() {
		return {
			sureShown: true,
			errorResponse: null,
		};
	},
	methods: {
		//@vuese
		//Hide dialog
		//@arg no argument
		hideSure() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},

		//@vuese
		//handle delete rule
		//@arg no argument
		async deleteRule() {
			this.errorResponse = null;
			try {
				await this.$store.dispatch('moderation/deleteRule', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					ruleId: this.ruleId,
				});
				if (this.$store.getters['moderation/deleteRuleSuccessfully']) {
					this.hideSure();
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
.sure-text {
	line-height: 2.2rem;
	margin: 1rem 0;
	white-space: pre-wrap;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	color: var(--color-dark-3);
	font-size: 1.4rem;
	line-height: 2.1rem;
	display: block;
}
.rule-box-p {
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
.button-blue:hover {
	background-color: rgb(248, 89, 89);
	border: 1px solid rgb(248, 89, 89);
	padding: 0.4rem 1.6rem;
}
.button-white {
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
}
.button-white:hover {
	border: 1px solid var(--color-grey-dark-8);
	color: var(--color-grey-dark-8);
	padding: 0.4rem 1.6rem;
}
.button-blue {
	background-color: var(--color-blue-2);
	border: 1px solid var(--color-blue-2);
	color: var(--color-white-1);
	padding: 0.4rem 1.6rem;
}
.no-messages {
	margin-top: 2rem;
	padding: 1rem;
}
</style>
