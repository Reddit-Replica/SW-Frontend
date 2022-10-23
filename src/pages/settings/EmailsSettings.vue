<template>
	<div class="settings-page">
		<div class="settings-block">
			<div>
				<h2 class="h2-main-title">Manage Emails</h2>
				<h3 class="h3-main-title">messages</h3>

				<div class="box-con">
					<h3 class="h3-title">Inbox messages</h3>
					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Chat requests</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
			</div>

			<div>
				<h3 class="h3-main-title">ACTIVITY</h3>

				<div class="box-con">
					<h3 class="h3-title">New user welcome</h3>
					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Comments on your posts</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Replies to your comments</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Upvotes on your posts</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Upvotes on your comments</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Username mentions</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">New followers</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<h3 class="h3-main-title">NEWSLETTERS</h3>

				<div class="box-con">
					<h3 class="h3-title">Daily Digest</h3>
					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Weekly Recap</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
				<div class="box-con">
					<h3 class="h3-title">Community Discovery</h3>

					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
			</div>
			<div>
				<h3 class="h3-main-title"></h3>

				<div class="box-con">
					<h3 class="h3-title">Unsubscribe from all emails</h3>
					<div class="box-switch-button">
						<switch-button></switch-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwitchButton from '../../components/SwitchButton.vue';
export default {
	components: {
		SwitchButton,
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
