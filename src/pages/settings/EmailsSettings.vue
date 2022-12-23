<template>
	<div class="settings-page">
		<div class="settings-block">
			<!-- <div>
				<h2 class="h2-main-title">Manage Emails</h2>
				<h3 class="h3-main-title">messages</h3>

				<div class="box-con">
					<h3 class="h3-title">Inbox messages</h3>
					<div class="box-switch-button">
						<switch-button id="btn1"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Chat requests</h3>

					<div class="box-switch-button">
						<switch-button id="btn2"></switch-button>
					</div>
				</div>
			</div> -->

			<div style="margin-top: 30px">
				<h3 class="h3-main-title">ACTIVITY</h3>

				<!-- <div class="box-con">
					<h3 class="h3-title">New user welcome</h3>
					<div class="box-switch-button">
						<switch-button id="btn3"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Comments on your posts</h3>

					<div class="box-switch-button">
						<switch-button id="btn4"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Replies to your comments</h3>

					<div class="box-switch-button">
						<switch-button id="btn5"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Upvotes on your posts</h3>

					<div class="box-switch-button">
						<switch-button id="btn6"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Upvotes on your comments</h3>

					<div class="box-switch-button">
						<switch-button id="btn7"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Username mentions</h3>

					<div class="box-switch-button">
						<switch-button id="btn8"></switch-button>
					</div>
				</div> -->
				<div class="box-con">
					<h3 class="h3-title">New followers</h3>

					<div class="box-switch-button">
						<switch-button
							id="btn9"
							@checked="getnewFollowerEmail"
							:val="newFollowerEmail"
							v-if="create"
						></switch-button>
					</div>
				</div>
				<!-- <h3 class="h3-main-title">NEWSLETTERS</h3>

				<div class="box-con">
					<h3 class="h3-title">Daily Digest</h3>
					<div class="box-switch-button">
						<switch-button id="btn10"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Weekly Recap</h3>

					<div class="box-switch-button">
						<switch-button id="btn11"></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Community Discovery</h3>

					<div class="box-switch-button">
						<switch-button id="btn12"></switch-button>
					</div>
				</div> -->
			</div>
			<div>
				<h3 class="h3-main-title"></h3>

				<div class="box-con">
					<h3 class="h3-title">Unsubscribe from all emails</h3>
					<div class="box-switch-button">
						<switch-button
							id="btn13"
							@checked="getunsubscribeFromEmails"
							:val="unsubscribeFromEmails"
							v-if="create"
						></switch-button>
					</div>
				</div>
			</div>
		</div>
		<div class="positioning">
			<SaveUnsavePopupMessage
				v-for="message in savedUnsavedPosts"
				:key="message.id"
				:type="message.type"
				:state="message.state"
				:typeid="message.postid"
				@undo-action="undoSaveUnsave"
			></SaveUnsavePopupMessage>
		</div>
	</div>
</template>

<script>
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue'; //
export default {
	async created() {
		await this.getSettings();
		console.log('after creation');
		console.log(this.newFollowerEmail);
		console.log(this.unsubscribeFromEmails);
		this.create = true;
	},
	components: {
		SaveUnsavePopupMessage,
	},
	data() {
		return {
			create: false,
			newFollowerEmail: false,
			unsubscribeFromEmails: false,
			savedUnsavedPosts: [],
		};
	},
	// emits: ['checked'],
	methods: {
		// @vuese
		// get new Follower Email
		// @arg The argument is a Boolean value representing new Follower Email
		getnewFollowerEmail(value) {
			this.newFollowerEmail = value;
			console.log('this.newFollowerEmail');
			console.log(this.newFollowerEmail);
			this.changenewFollowerEmail();
		},
		// @vuese
		// get unsubscribe From Emails
		// @arg The argument is a Boolean value representing unsubscribe From Emails
		getunsubscribeFromEmails(value) {
			this.unsubscribeFromEmails = value;
			console.log('this.unsubscribeFromEmails');
			console.log(this.unsubscribeFromEmails);
			this.changeunsubscribeFromEmails();
		},
		// @vuese
		// send request to change new Follower Email
		async changenewFollowerEmail() {
			const actionPayload = {
				newFollowerEmail: this.newFollowerEmail,

				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changenewFollowerEmail',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
		// @vuese
		// send request to change unsubscribe From Emails
		async changeunsubscribeFromEmails() {
			const actionPayload = {
				unsubscribeFromEmails: this.unsubscribeFromEmails,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeunsubscribeFromEmails',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
		// @vuese
		//send a request to get the settings
		async getSettings() {
			const actionPayload = {
				baseurl: this.$baseurl,
			};
			console.log(actionPayload);
			try {
				const response = await this.$store.dispatch(
					'setting/fetchAccountSettings',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
			this.setting = await this.$store.getters['setting/getAccountSettings'];
			console.log(this.setting);
			this.newFollowerEmail = this.setting.newFollowerEmail;
			this.unsubscribeFromEmails = this.setting.unsubscribeFromEmails;
			console.log(this.newFollowerEmail);
			console.log(this.unsubscribeFromEmails);
		},
		////////////////////////////////
		// @vuese
		//send a request to get the settings
		doneSuccessfully(title) {
			this.savePost(title);
		},
		// @vuese
		// Used to show handle save action popup
		// @arg the argument is the title used in show popup
		savePost(title) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'settings',
				state: title,
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
		// @vuese
		// Used to show handle unsave action popup
		// @arg no argument
		unsavePost() {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'post',
				state: 'unsaved',
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
	},
};
</script>

<style scoped>
* {
	font-family: 'IBM Plex Sans', Arial, sans-serif;
}
.box-con {
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 32px;
}
.positioning {
	position: fixed;
	bottom: 0;
	/* display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	display: flex;
	flex-direction: column; */
}
</style>
