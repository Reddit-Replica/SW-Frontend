<template>
	<div>
		<li class="item" v-if="show">
			<div class="image" id="moderator">
				<img
					v-if="!approve.avatar"
					src="../../../img/default_inbox_avatar.png"
					alt="img"
					class="img"
					:id="'moderator-img-' + index"
				/>
				<img
					v-else
					:src="$baseurl + '/' + approve.avatar"
					alt="img"
					class="img"
					:id="'moderator-img-' + index"
				/>
				<h5 class="heading-5" :id="'moderator-name-' + index">
					{{ approve.username }}
				</h5>
			</div>
			<div class="time">
				<span>{{ handleTime }}</span>
			</div>
			<div class="remove">
				<base-button
					class="button-remove"
					:id="'button-remove-' + index"
					@click="showApproveFunction()"
					>Remove</base-button
				>
			</div>
		</li>
		<div id="sure-popup-form">
			<base-dialog
				:show="showApprove"
				@close="showApproveFunction()"
				title="Confirm"
			>
				<div class="rule-dialog flex-column">
					<div class="rule-box-p flex-column">
						<p class="sure-text">
							Are you sure you want to remove {{ approve.username }} as an
							approved user?
						</p>
					</div>
					<div class="rule-box box-buttons">
						<base-button
							@click="showApproveFunction()"
							class="button-white"
							id="cancel-button"
							>Cancel</base-button
						>
						<base-button
							@click="removeFunction()"
							class="button-blue"
							id="delete-button"
							>Remove</base-button
						>
					</div>
					<div class="no-messages" v-if="errorResponse">
						{{ errorResponse }}
					</div>
				</div>
			</base-dialog>
		</div>
	</div>
</template>

<script>
export default {
	beforeMount() {
		this.calculateTime();
	},
	props: {
		// @vuese
		//details of approve
		// @type object
		approve: {
			type: Object,
			required: true,
			default: () => ({
				username: '',
				avatar: '',
				dateOfApprove: '',
			}),
		},
		// @vuese
		//seacrhing value
		// @type string
		search: {
			type: String,
			default: '',
		},
		// @vuese
		//index to handle unique ids
		// @type number
		index: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	data() {
		return {
			handleTime: '',
			showApprove: false,
			errorResponse: null,
		};
	},
	computed: {
		// @vuese
		//at searching check if it is the value of seacrhing or not
		// @type boolean
		show() {
			if (this.search != '') {
				if (this.search == this.approve.username) {
					return true;
				} else return false;
			}
			return true;
		},
		// @vuese
		//return handled time after calculated it
		// @type object
		// handleTime() {
		// 	return this.$store.getters['moderation/handleTime'];
		// },
	},
	methods: {
		// @vuese
		//calculate time
		// @type object
		calculateTime() {
			// this.$store.dispatch('moderation/handleTime', {
			// 	time: this.moderator.dateOfModeration,
			// });

			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.approve.dateOfApprove);
			if (currentDate.getFullYear() != myTime.getFullYear()) {
				returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			} else if (currentDate.getMonth() != myTime.getMonth()) {
				returnValue = currentDate.getMonth() - myTime.getMonth() + ' Month ago';
			} else if (currentDate.getDate() != myTime.getDate()) {
				returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
			} else if (currentDate.getHours() != myTime.getHours()) {
				returnValue = currentDate.getHours() - myTime.getHours() + ' Hours ago';
			} else if (currentDate.getMinutes() != myTime.getMinutes()) {
				returnValue =
					currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
			} else {
				returnValue = 'Just now';
			}
			this.handleTime = returnValue;
		},
		// @vuese
		//used to show sure approve popup
		// @arg no argument
		showApproveFunction() {
			this.showApprove = !this.showApprove;
		},
		// @vuese
		//used to handle remove request
		// @arg no argument
		removeFunction() {},
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
}
.image {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 1rem;
	margin-left: 1.5rem;
	border-radius: 0.5rem;
	margin-right: 4.5rem;
}
.image:hover {
	background-color: var(--color-grey-light-10);
}
.img {
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.3rem;
	margin-right: 0.6rem;
}
.time,
.remove {
	align-items: center;
	font-size: 1.2rem;
}
.time {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1 0 100px;
	line-height: normal;
}
.remove {
	margin-right: 2rem;
}
.button-remove {
	position: relative;
	border: 1px solid transparent;
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4 1.6rem;
	background-color: var(--color-white-1);
}
.heading-5 {
	color: var(--color-dark-1);
}
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
/* 340px */
@media only screen and (max-width: 21.25em) {
	.permissions {
		display: none;
	}
}
</style>
