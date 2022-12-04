<template>
	<div>
		<div
			class="bar"
			v-if="
				title != 'Rules' && title != 'Post flair' && title != 'Content controls'
			"
		>
			<base-button class="button-white" v-if="isModeratorList"
				>Leave as mod</base-button
			>
			<base-button class="base-button">{{ barTitle }}</base-button>
		</div>
		<div class="bar" v-if="title == 'Rules' && !dragDrop">
			<base-button
				class="reorder-button"
				id="reorder-rules-button"
				:class="rulesCount > 1 ? '' : 'disable-button'"
				@click="reorderRules()"
				>Reorder rules</base-button
			>
			<base-button
				class="base-button"
				@click="showAddRuleFunction()"
				id="add-rules-button"
				:class="rulesCount == 15 ? 'content-controls-button' : ''"
				>Add rule</base-button
			>
		</div>
		<div class="bar" v-if="title == 'Rules' && dragDrop">
			<base-button
				class="button-white"
				id="cancel-rules-button"
				@click="reorderRules()"
				>Cancel</base-button
			>
			<base-button
				class="base-button"
				id="save-rules-button"
				@click="saveReorderRules()"
				>Save</base-button
			>
		</div>
		<div class="bar" v-if="title == 'flair'">
			<!-- <base-button class="button-white" id="post-flair-button"
				>Post flair settings</base-button
			> -->
			<base-button
				class="reorder-post-flair-button"
				id="reorder-post-flair-button"
				>Reorder</base-button
			>
			<base-button
				class="base-button"
				id="add-flair-button"
				@click="showAddFlairFunction()"
				:class="showAddFlair ? 'disable-button ' : ''"
				>Add flair</base-button
			>
		</div>
		<!-- <div class="bar" v-if="title == 'Post flair'">
			<base-button class="button-white">Post flair settings</base-button>
			<base-button class="reorder-post-flair-button">Reorder</base-button>
			<base-button class="base-button">Add flair</base-button>
		</div> -->
		<div class="bar" v-if="title == 'Content controls'">
			<base-button class="content-controls-button" id="content-controls-button"
				>Save changes</base-button
			>
		</div>
	</div>
</template>

<script>
export default {
	emits: ['showAddRuleFunction', 'reorderRules', 'saveReorderRules'],
	props: {
		// @vuese
		// title to be written in bar
		// @type string
		title: {
			type: String,
			default: '',
			required: true,
		},
		// @vuese
		// subreddit name
		// @type string
		subredditName: {
			type: String,
			default: '',
			required: true,
		},
		// @vuese
		// rules count
		// @type string
		rulesCount: {
			type: Number,
			default: 0,
			required: true,
		},
		// @vuese
		// if there is drag and drop or not
		// @type string
		dragDrop: {
			type: Boolean,
			default: false,
			required: true,
		},
		// @vuese
		// if clicked on add flair or not
		// @type string
		showAddFlair: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	computed: {
		barTitle() {
			if (this.title == 'Banned') {
				return 'Ban user';
			} else if (this.title == 'Muted') {
				return 'Mute user';
			} else if (this.title == 'Approved') {
				return 'Approve user';
			} else if (this.title == 'Moderators of t/' + this.subredditName) {
				return 'Invite user as mod';
			} else if (this.title == 'Rules') {
				return 'Rules';
			} else if (this.title == 'Schedule Post') {
				return 'Schedule Post';
			} else return '';
		},
		isModeratorList() {
			return this.barTitle == 'Invite user as mod';
		},
	},
	methods: {
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		showAddRuleFunction() {
			this.$emit('showAddRuleFunction', this.showAddRule);
		},
		// @vuese
		// Used to show add flair
		// @arg no argument
		showAddFlairFunction() {
			this.$emit('showAddFlairFunction');
		},
		// @vuese
		// Used to handle re-order rules action
		// @arg no argument
		reorderRules() {
			this.$emit('reorderRules');
		},
		// @vuese
		// Used to handle re-order rules action
		// @arg no argument
		saveReorderRules() {
			this.$emit('saveReorderRules');
		},
	},
};
</script>

<style scoped>
.bar {
	-ms-flex-align: center;
	align-items: center;
	background-color: var(--color-grey-light-10);
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	height: 4.8rem;
	-ms-flex-pack: end;
	justify-content: flex-end;
	left: 28rem;
	padding: 0 2.4rem;
	position: fixed;
	right: 0;
	z-index: 3;
}
button {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 4px 1.6rem;
	-ms-flex-align: center;
	align-items: center;
	border-radius: 9999px;
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
	text-align: center;
	width: auto;
}
.base-button:hover {
	background-color: var(--color-blue-6);
}
.button-white {
	margin-right: 0.8rem;
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
	background-color: transparent;
}
.button-white:hover {
	background-color: var(--color-blue-light-5);
}
.reorder-button {
	color: var(--color-blue-2) !important;
	fill: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
	margin-right: 1rem;
	background-color: transparent;
}
.disable-button {
	filter: grayscale(1);
	cursor: not-allowed;
	color: var(--color-grey-light-5);
	fill: var(--color-grey-light-5);
}
.reorder-button:hover,
.reorder-post-flair-button:hover {
	background-color: var(--color-grey-light-4);
}
.reorder-post-flair-button {
	margin-left: 0.8rem;
	margin-right: 1.6rem;
	min-width: 10rem;
	cursor: not-allowed;
	filter: grayscale(1);
	border-color: var(--color-grey-light-5);
	border: 1px solid var(--color-grey-light-5);
	color: var(--color-grey-light-5);
	fill: var(--color-grey-light-5);
	background-color: transparent;
}
.content-controls-button {
	min-width: 15rem;
	cursor: not-allowed;
	filter: grayscale(1);
	border: none;
	color: rgba(255, 255, 255, 0.5);
	fill: rgba(255, 255, 255, 0.5);
	background-color: var(--color-grey-light-5);
}
.content-controls-button:hover {
	opacity: 0.8;
}
</style>
