<template>
	<div id="facebook-login" class="log-google log-ag" @click="facebookLogin()">
		<div><img src="../../../img/Facebook_f_logo_(2021).svg.png" alt="" /></div>
		<div class="cont">continue with Facebook</div>
	</div>
	<!-- <facebook-login
		class="button"
		app-id="3257349194531334"
		@login="getUserData"
		@logout="onLogout"
		@sdk-loaded="sdkLoaded"
		@get-initial-status="getUserData"
	>
	</facebook-login> -->
</template>
<script>
// import facebookLogin from 'facebook-login-vuejs';
export default {
	data() {
		return {};
	},
	methods: {
		getUserData() {
			this.FB.api(
				'/me',
				'GET',
				{ fields: 'id,name,email' },
				(userInformation) => {
					console.warn('Get data from FB', userInformation);
					this.personalID = userInformation.personalID;
					this.email = userInformation.email;
					this.name = userInformation.name;
				}
			);
		},
		sdkLoaded(payload) {
			this.isConnected = payload.isConnected;
			this.FB = payload.FB;
			if (this.isConnected) {
				this.getUserData();
			}
		},
		onLogin() {
			this.isConnected = true;
			this.getUserData();
		},
		async facebookLogin() {},
		handleSdkInit({ FB, scope }) {
			this.FB = FB;
			this.scope = scope;
			console.log('saaf');
		},
		OnFacebookAuthSuccess(idToken) {
			console.log(idToken);
		},
		OnFacebookAuthFail(error) {
			console.log(error);
		},
	},
	// components: { facebookLogin },
};
</script>
<style scoped>
img {
	width: 22px;
	height: 22px;
	margin-left: 12px;
	background-color: white;
}
.log-google {
	align-items: center;
	display: inline-flex;
	height: 50px;
	width: 270px;
	margin: 8px 8px;
	padding: 4px;
	cursor: pointer;
	font-weight: 600;
}
.log-google:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
}
.log-google:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
}
.log-ag {
	font-size: 14px;
	font-family: 'IBMPlexSans', sans-serif;
	letter-spacing: 0.5px;
	border: 1px solid #0079d3;
	border-radius: 4px;
	text-align: center;
	text-transform: uppercase;
	background-color: #fff;
	color: #0079d3;
	display: inline-flex;
	/* width: 60%; */
}
.cont {
	padding-left: 25px;
}
</style>
