<template>
	<div>
		<div class="item" v-if="!showAddFlair">
			<div class="flair-text-box">
				<span
					class="flair-text"
					:style="{ background: flair.backgroundColor, color: flair.textColor }"
					>{{ flair.flairName }}</span
				>
			</div>
			<div class="buttons">
				<button class="small-button" @click="showAddFlairFunction()">
					Edit
				</button>
				<button class="small-button" @click="clickDelete">
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
		<div class="add-flair" v-if="showAddFlair">
			<add-flair
				@done-successfully="doneSuccessfully('updated')"
				@exit="showAddFlairFunction()"
				:flair-name-edit="flair.flairName"
				:background-color-edit="flair.backgroundColor"
				:text-color-edit="flair.textColor"
				:flair-id="flair.flairId"
				:edit="true"
			></add-flair>
		</div>
		<delete-flair
			v-if="showSureDelete"
			:subreddit-name="subredditName"
			:flair-id="flair.flairId"
			@exit="clickDelete()"
			@done-successfully="doneSuccessfully('deleted')"
		></delete-flair>
	</div>
</template>

<script>
import AddFlair from '../../components/moderation/AddFlair.vue';
import deleteFlair from '../../components/moderation/deleteFlair.vue';
export default {
	emits: ['doneSuccessfully'],
	components: {
		AddFlair,
		deleteFlair,
	},
	data() {
		return {
			showAddFlair: false,
			showSureDelete: false,
		};
	},
	props: {
		// @vuese
		//details of flair
		// @type object
		flair: {
			type: Object,
			required: true,
			default: () => ({
				flairId: '',
				flairName: '',
				flairOrder: '',
				backgroundColor: '',
				textColor: '',
			}),
		},
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//at searching check if it is the value of seacrhing or not
		// @type boolean
		show() {
			if (this.search != '') {
				if (this.search == this.moderator.username) {
					return true;
				} else return false;
			}
			return true;
		},
	},
	methods: {
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		showAddFlairFunction() {
			this.showAddFlair = !this.showAddFlair;
		},
		// @vuese
		// handle load flairs instead of refreshing
		// @arg no argument
		doneSuccessfully(title) {
			this.$emit('doneSuccessfully', title);
		},
		// @vuese
		// Used to show delete flair popup
		// @arg no argument
		clickDelete() {
			this.showSureDelete = !this.showSureDelete;
		},
	},
};
</script>

<style scoped>
.item {
	border-radius: 0 0 4px 4px;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	background-color: #ffffff;
	border-bottom: 1px solid #edeff1;
	color: #1c1c1c;
	display: -ms-flexbox;
	display: flex;
	padding: 12px 16px;
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
.buttons {
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 24px;
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
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	text-transform: uppercase;
	border-radius: 1rem;
}
.small-button:hover {
	background-color: var(--color-grey-light-7);
}
.add-flair {
	border-radius: 0 0 0.4rem 0.4rem;
	background-color: var(--color-grey-light-9);
	color: var(--color-dark-3);
	min-height: 60vh;
}
</style>
