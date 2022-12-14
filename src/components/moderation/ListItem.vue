<template>
	<div>
		<li class="item" v-if="show">
			<div class="image" id="moderator">
				<img
					v-if="!moderator.avatar"
					src="../../../img/default_inbox_avatar.png"
					alt="img"
					class="img"
					:id="'moderator-img-' + index"
				/>
				<img
					v-else
					:src="$baseurl + '/' + moderator.avatar"
					alt="img"
					class="img"
					:id="'moderator-img-' + index"
				/>
				<h5 class="heading-5" :id="'moderator-name-' + index">
					{{ moderator.username }}
				</h5>
			</div>
			<div class="time">
				<span>{{ handleTime }}</span>
				<!-- <span>{{ moderator.dateOfModeration }}</span> -->
			</div>
			<div class="permissions">
				<span
					v-for="(permission, index1) in moderator.permissions"
					:key="permission"
					:id="'permission-' + index1"
					>{{ permission }}</span
				>
				<svg
					v-if="invitedMod"
					@click="sureShownFunction()"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-trash delete-icon"
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
			</div>
		</li>
		<div id="create-rule-form">
			<base-dialog :show="sureShown" title="Confirm">
				<div class="rule-dialog flex-column">
					<div class="rule-box-p flex-column">
						<p class="sure-text">
							Are you sure you want to rescind the moderator invite to
							{{ moderator.username }}?
						</p>
					</div>
					<div class="rule-box box-buttons">
						<base-button
							@click="sureShownFunction()"
							class="button-white"
							:id="'cancel-button' + index"
							>Cancel</base-button
						>
						<base-button
							@click="removeInvitation()"
							class="button-blue"
							:id="'create-rule-button' + index"
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
	emits: ['doneSuccessfully'],
	props: {
		// @vuese
		//details of moderator
		// @type object
		moderator: {
			type: Object,
			required: true,
			default: () => ({
				username: '',
				avatar: '',
				dateOfModeration: '',
				permissions: [],
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
		// @vuese
		//index to handle unique ids
		// @type number
		invitedMod: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	data() {
		return {
			sureShown: false,
			handleTime: '',
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
				if (this.search == this.moderator.username) {
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
		// @vuese
		//handle display date
		// @type boolean
		// date() {
		// 	// var currentDate = new Date();
		// 	var dateOfModeration = new Date(this.moderator.dateOfModeration);

		// 	// if (currentDate.getFullYear() != dateOfModeration.getFullYear()) {
		// 	// 	return dateOfModeration.toJSON().slice(0, 10).replace(/-/g, '/');
		// 	// } else if (currentDate.getMonth() != dateOfModeration.getMonth()) {
		// 	// 	return (
		// 	// 		currentDate.getMonth() - dateOfModeration.getMonth() + ' Month ago'
		// 	// 	);
		// 	// } else if (currentDate.getDate() != dateOfModeration.getDate()) {
		// 	// 	return currentDate.getDate() - dateOfModeration.getDate() + ' Days ago';
		// 	// } else if (currentDate.getHours() != dateOfModeration.getHours()) {
		// 	// 	return (
		// 	// 		currentDate.getHours() - dateOfModeration.getHours() + ' Hours ago'
		// 	// 	);
		// 	// } else if (currentDate.getMinutes() != dateOfModeration.getMinutes()) {
		// 	// 	return (
		// 	// 		currentDate.getMinutes() -
		// 	// 		dateOfModeration.getMinutes() +
		// 	// 		' Minutes ago'
		// 	// 	);
		// 	// }
		// 	// return 'Just now';
		// },

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
			var myTime = new Date(this.moderator.dateOfModeration);
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
		//used to show sure remove popup
		// @arg no argument
		sureShownFunction() {
			this.sureShown = !this.sureShown;
		},
		// remove invitation request
		// @vuese
		//used to send remove invitation request
		// @arg no argument
		async removeInvitation() {
			try {
				await this.$store.dispatch('moderation/cancelInvitation', {
					username: this.moderator.username,
					baseurl: this.$baseurl,
					subreddit: this.subredditName,
				});
				if (this.$store.getters['moderation/cancelSuccessfully']) {
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
@media only screen and (max-width: 499px) {
	.time {
		display: none;
	}
	.icon-delete {
		display: none;
	}
	.permissions {
		margin-right: 0;
	}
	.image {
		margin: 0;
	}
	button {
		padding: 4px 2px;
		font-size: 1rem;
	}
}
</style>
