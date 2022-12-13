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
						></switch-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newFollowerEmail: false,
			unsubscribeFromEmails: false,
		};
	},
	// emits: ['checked'],
	methods: {
		getnewFollowerEmail(value) {
			this.newFollowerEmail = value;
			console.log('this.newFollowerEmail');
			console.log(this.newFollowerEmail);
			this.changenewFollowerEmail();
		},
		getunsubscribeFromEmails(value) {
			this.unsubscribeFromEmails = value;
			console.log('this.unsubscribeFromEmails');
			console.log(this.unsubscribeFromEmails);
			this.changeunsubscribeFromEmails();
		},
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
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
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
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
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
</style>
