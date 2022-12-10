<template>
	<div id="invite-moderation-form">
		<base-dialog
			:show="addInviteShown"
			@close="hideAddInvite"
			title="Invite Moderators"
		>
			<div class="invite-moderation-dialog flex-column">
				<div class="invite-moderation-box flex-column">
					<div class="invite-moderation-box-input flex-column">
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
				<div class="invite-moderation-box flex-column">
					<div class="invite-moderation-box-title">
						<div class="title-black">Give them access to...</div>
					</div>
					<div class="box-1">
						<input
							type="checkbox"
							name="everything"
							id="everythig"
							v-model="permissionToEverything"
							@change="customMethod('everything')"
						/>
						<span class="title-grey">Everything </span>
					</div>
					<p class="p-text">
						Full access including the ability to manage moderator access and
						permissions
					</p>
				</div>
				<hr class="border" />
				<div class="invite-moderation-box flex-column">
					<div class="box-1">
						<input
							type="checkbox"
							name="manage-users"
							id="manage-users"
							v-model="permissionToManageUsers"
							@change="customMethod('manageUsers')"
						/>
						<span class="title-grey">Manage Users </span>
					</div>
					<p class="p-text">
						Access mod notes, ban and mute users, and approve submitters*.
					</p>
				</div>
				<div class="invite-moderation-box flex-column">
					<div class="box-1">
						<input
							type="checkbox"
							name="manage-settings"
							id="manage-settings"
							v-model="permissionToManageSettings"
							@change="customMethod('manageSettings')"
						/>
						<span class="title-grey">Manage Settings </span>
					</div>
					<p class="p-text">
						Manage community settings, appearance, emojis, rules, and AutoMod*.
					</p>
				</div>
				<div class="invite-moderation-box flex-column">
					<div class="box-1">
						<input
							type="checkbox"
							name="manage-flair"
							id="manage-flair"
							v-model="permissionToManageFlair"
							@change="customMethod('manageFlair')"
						/>
						<span class="title-grey">Manage Flair </span>
					</div>
					<p class="p-text">Create and manage user and post flair.</p>
				</div>
				<div class="invite-moderation-box flex-column">
					<div class="box-1">
						<input
							type="checkbox"
							name="manage-posts-comments"
							id="manage-posts-comments"
							v-model="permissionToManagePostsComments"
							@change="customMethod('managePostsComments')"
						/>
						<span class="title-grey">Manage Posts & Comments </span>
					</div>
					<p class="p-text">
						Access queues, take action on content, and manage collections and
						events.
					</p>
				</div>
				<div class="invite-moderation-box box-buttons">
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
						id="invite-moderation-button"
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
			permissionToEverything: true,
			permissionToManageUsers: true,
			permissionToManageSettings: true,
			permissionToManageFlair: true,
			permissionToManagePostsComments: true,
		};
	},
	methods: {
		customMethod(title) {
			if (title == 'everything' && this.permissionToEverything == true) {
				this.permissionToManageUsers = true;
				this.permissionToManageSettings = true;
				this.permissionToManageFlair = true;
				this.permissionToManagePostsComments = true;
			} else {
				this.permissionToEverything = false;
			}
		},
		//@vuese
		//Hide dialog
		//@arg no argument
		hideAddInvite() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		//@vuese
		//handle submit inviting moderation
		//@arg no argument
		async submitInvite() {
			this.errorResponse = null;
			try {
				await this.$store.dispatch('moderation/inviteMod', {
					username: this.userName,
					subreddit: this.subredditName,
					permissionToEverything: this.permissionToEverything,
					permissionToManageUsers: this.permissionToManageUsers,
					permissionToManageSettings: this.permissionToManageSettings,
					permissionToManageFlair: this.permissionToManageFlair,
					permissionToManagePostsComments: this.permissionToManagePostsComments,
					baseurl: this.$baseurl,
				});
				if (this.$store.getters['moderation/inviteModSuccessfully']) {
					this.$emit('doneSuccessfully');
					this.hideAddInvite();
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
.invite-moderation-dialog {
	max-height: 100%;
	max-width: 53.8rem;
	min-width: 41rem;
}
.invite-moderation-box {
	margin-bottom: 3rem;
}
.invite-moderation-box-title {
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
.invite-moderation-box-input {
	align-items: flex-start;
	margin-top: 1.2rem;
	margin-bottom: 3rem;
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
