<template>
	<div>
		<li class="item">
			<span class="rule-order"> {{ rule.ruleOrder + 1 }}</span>
			<span class="rule-name"> {{ rule.ruleName }}</span>
			<span class="rule-edit">
				<button
					class="button-edit"
					@click="showAddRuleFunction()"
					id="edit-button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-pencil"
						viewBox="0 0 16 16"
						id="edit-icon"
					>
						<path
							d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
						/>
					</svg>
				</button>
				<button
					class="expand"
					@click="viewDetailsFunction()"
					id="expand-button"
				>
					<svg
						v-if="!viewDetails"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrows-angle-expand"
						viewBox="0 0 16 16"
						id="expand-icon"
					>
						<path
							fill-rule="evenodd"
							d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
						/>
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrows-angle-contract"
						viewBox="0 0 16 16"
						id="contract-icon"
					>
						<path
							fill-rule="evenodd"
							d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
						/>
					</svg>
				</button>
			</span>
		</li>
		<div class="details-box" v-if="viewDetails">
			<span class="box-span">
				<span class="details-title">Report Reason</span>
				<span class="details-value">{{ rule.reportReason }}</span></span
			>
			<span class="box-span apply-box">
				<div class="applies-to">
					<div class="details-title">Applies To</div>
					<div class="details-value">{{ rule.appliesTo }}</div>
				</div>
				<div class="applies-to">
					<div class="details-title">Created</div>
					<div class="details-value">{{ rule.createdAt }}</div>
				</div>
			</span>
			<span class="box-span">
				<span class="details-title">Full Description</span>
				<span class="details-value">{{ rule.description }}</span></span
			>
		</div>
		<addrule-popup
			v-if="showAddRule"
			:subreddit-name="subredditName"
			@exit="showAddRuleFunction"
			@done-successfully="doneSuccessfully('updated')"
			@clicked-delete="clickDelete"
			:rule-name-edit="rule.ruleName"
			:report-reason-edit="rule.reportReason"
			:applies-to-edit="rule.appliesTo"
			:description-edit="rule.description"
			:rule-order="rule.ruleOrder"
			:rule-id="rule.ruleId"
			:edit="true"
		></addrule-popup>
		<sure-popup
			v-if="showSureDelete"
			:subredditName="subredditName"
			:rule-id="rule.ruleId"
			@exit="clickDelete()"
			@doneSuccessfully="doneSuccessfully('deleted')"
		></sure-popup>
	</div>
</template>

<script>
import AddrulePopup from '../../components/moderation/AddrulePopup.vue';
import SurePopup from '../../components/moderation/SurePopup.vue';
export default {
	emits: ['doneSuccessfully'],
	components: {
		AddrulePopup,
		SurePopup,
	},
	props: {
		// @vuese
		//details of moderator
		// @type object
		rule: {
			type: Object,
			required: true,
			default: () => ({
				ruleId: '',
				ruleName: '',
				ruleOrder: '',
				createdAt: '',
				appliesTo: '',
				reportReason: '',
				description: '',
			}),
		},
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			return this.$store.state.subredditName;
		},
	},
	data() {
		return {
			viewDetails: false,
			showAddRule: false,
			showSureDelete: false,
		};
	},
	methods: {
		// @vuese
		// Used to show rule details
		// @arg no argument
		viewDetailsFunction() {
			this.viewDetails = !this.viewDetails;
		},
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		showAddRuleFunction() {
			this.showAddRule = !this.showAddRule;
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
		// @vuese
		// handle load rules instead of refreshing
		// @arg no argument
		doneSuccessfully(title) {
			this.loadListOfRules();
			this.$emit('doneSuccessfully', title);
		},
		// @vuese
		// Used to show delete rule popup
		// @arg no argument
		clickDelete() {
			this.showSureDelete = !this.showSureDelete;
		},
	},
};
</script>

<style scoped>
.item {
	display: flex;
	align-items: center;
	height: 5rem;
	justify-content: space-between;
	border-bottom: var(--line);
	color: var(--color-dark-3);
}
.rule-order {
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2rem;
	-ms-flex-align: center;
	align-items: center;
	display: -ms-flexbox;
	display: flex;
	-ms-flex: 0 0 4.8rem;
	flex: 0 0 4.8rem;
	height: 100%;
	-ms-flex-pack: center;
	justify-content: center;
	width: 4.8rem;
}
.rule-name {
	font-size: 1.4rem;
	line-height: 1.8rem;
	margin: 1.6rem 0.8rem;
	word-break: break-word;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
}
.rule-edit {
	display: -ms-flexbox;
	display: flex;
	margin-left: auto;
	padding-right: 4px;
}
.button-edit,
.expand {
	display: -ms-flexbox;
	display: flex;
	padding: 0;
	background: transparent;
	border: none;
	color: inherit;
	cursor: pointer;
	padding: initial;
	margin-right: 2rem;
}
.button-edit svg,
.expand svg {
	color: var(--color-grey-dark-8);
	fill: var(--color-grey-dark-8);
	width: 1.6rem;
}
.details-box {
	background-color: var(--color-grey-dark-5);
	border: 1px solid #d6d6d6;
	display: block;
	padding: 0.4rem 2rem 0.8rem;
	word-break: break-word;
	align-items: center;
	color: var(--color-dark-3);
}
.box-span {
	display: block;
	padding: 0.8rem 0;
}
.details-title {
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.6rem;
	display: block;
	text-transform: uppercase;
}
.details-value {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
}
.applies-to {
	margin-right: 4.8rem;
}
.apply-box {
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	display: -ms-flexbox;
	display: flex;
	padding: 0.8rem 0;
}
.positioning {
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	display: flex;
	flex-direction: column;
}
</style>
