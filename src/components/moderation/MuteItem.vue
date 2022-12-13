<template>
	<div>
		<!-- should be v-if show -->
		<li class="item" v-if="show">
			<div class="image" id="ban">
				<img
					v-if="!mute.avatar"
					src="../../../img/default_inbox_avatar.png"
					alt="img"
					class="img"
					:id="'moderator-img-' + index"
				/>
				<img
					v-else
					:src="$baseurl + '/' + mute.avatar"
					alt="img"
					class="img"
					:id="'moderator-img-' + index"
				/>
				<h5 class="heading-5" :id="'ban-name-' + index">
					{{ mute.username }}
				</h5>
			</div>
			<div class="time">
				<span> {{ handleTime }}</span>
				<!-- <span>{{ moderator.dateOfModeration }}</span> -->
			</div>
			<div class="permissions">
				<base-button
					class="button-ban"
					id="button-edit"
					@click="showUnMuteFunction()"
					>Unmute</base-button
				>
				<base-button
					class="button-ban"
					id="button-more-details"
					@click="viewDetailsFunction()"
					>More Details<svg
						v-if="!viewDetails"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-caret-down"
						viewBox="0 0 16 16"
					>
						<path
							d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
						/>
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-caret-up"
						viewBox="0 0 16 16"
					>
						<path
							d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
						/>
					</svg>
				</base-button>
			</div>
		</li>
		<div class="show-more" v-if="viewDetails">
			<div v-if="muteReason"><div class="banned-for">No mod note.</div></div>
			<div v-if="muteReason">
				<div class="banned-for">Mod note:</div>
				<div class="reason">{{ muteReason }}</div>
			</div>
			<div v-else>
				<div class="banned-for">No mod note.</div>
			</div>
		</div>
		<div id="sure-popup-form">
			<base-dialog
				:show="showUnMute"
				@close="showUnMuteFunction()"
				title="Confirm"
			>
				<div class="rule-dialog flex-column">
					<div class="rule-box-p flex-column">
						<p class="sure-text">Are you sure you want to unmute mute?</p>
					</div>
					<div class="rule-box box-buttons">
						<base-button
							@click="showUnMuteFunction()"
							class="button-white"
							id="cancel-button"
							>Cancel</base-button
						>
						<base-button
							@click="Unmute()"
							class="button-blue"
							id="delete-button"
							>Unmute</base-button
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
	emits: ['doneSuccessfully'],
	props: {
		// @vuese
		//details of moderator
		// @type object
		mute: {
			type: Object,
			required: true,
			default: () => ({
				username: '',
				avatar: '',
				dateOfMute: '',
				muteReason: '',
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
			viewDetails: false,
			showAddBan: false,
			showUnMute: false,
			handleTime: '',
			errorResponse: null,
		};
	},
	beforeMount() {
		this.calculateTime();
	},
	computed: {
		// @vuese
		//at searching check if it is the value of seacrhing or not
		// @type boolean
		show() {
			if (this.search != '') {
				if (this.search == this.mute.username) {
					return true;
				} else return false;
			}
			return true;
		},

		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
	},
	methods: {
		// @vuese
		// Used to show view Details
		// @arg no argument
		viewDetailsFunction() {
			this.viewDetails = !this.viewDetails;
		},
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		showAddBanFunction() {
			this.showAddBan = !this.showAddBan;
		},
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		doneSuccessfully() {
			this.$emit('doneSuccessfully');
		},
		// @vuese
		//used to show sure unmute popup
		// @arg no argument
		showUnMuteFunction() {
			this.showUnMute = !this.showUnMute;
		},
		calculateTime() {
			// this.$store.dispatch('moderation/handleTime', {
			// 	time: this.moderator.dateOfModeration,
			// });

			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.mute.dateOfMute);
			console.log(this.mute);
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
		//used to handle unmute request
		// @arg no argument
		async Unmute() {
			console.log('unmute');
			try {
				await this.$store.dispatch('moderation/unmuteUser', {
					username: this.mute.username,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/unmuteUserSuccessfully']) {
					this.$emit('doneSuccessfully');
					this.showUnMuteFunction();
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
.permissions {
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
.permissions {
	margin-right: 2rem;
}
.heading-5 {
	color: var(--color-dark-1);
}
.delete-icon {
	margin-left: 1rem;
	cursor: pointer;
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
.button-ban {
	background-color: transparent;
	color: var(--color-blue-2) !important;
	fill: var(--color-blue-2);
}
.button-ban:hover {
	background-color: var(--color-grey-light-4);
}
.show-more {
	background-color: var(--color-grey-light-10);
	border-top: 0;
	padding: 16px;
	word-break: break-all;
}
.banned-for {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase;
	color: var(--color-grey-dark-8);
	display: inline-block;
	margin-right: 3px;
}
.reason {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	display: inline-block;
	padding-top: 10px;
	color: var(--color-dark-1);
}
/* 340px */
@media only screen and (max-width: 21.25em) {
	.permissions {
		display: none;
	}
}
</style>
