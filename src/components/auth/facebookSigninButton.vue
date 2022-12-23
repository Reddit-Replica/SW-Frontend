<template>
	<div id="facebook-login" @click="facebookLogin()">
		<div>
			<img
				class="marigned"
				src="../../../img/Facebook_f_logo_(2021).svg.png"
				alt=""
			/>
		</div>
		<!-- <div class="cont">continue with Facebook</div> -->
		<v-btn
			id="fb-sign-btn"
			rounded
			color="#3B5998"
			style="font-size: 14px"
			large
			block
			@click="signUpWithFacebook"
			>Continue with Facebook</v-btn
		>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		/**
		 * @vuese
		 * Request To Sign With FaceBook.
		 * @arg No arg.
		 */
		async signUpWithFacebook() {
			this.errorMessage = '';
			this.errorState = false;
			this.fbErrorState = false;
			this.fbErrorMessage = '';
			window.FB.login(
				(response) => {
					if (response.status == 'connected') {
						this.loading = true;
						console.log(response.authResponse);
						this.sendAccessToken(response.authResponse.signedRequest);
					} else {
						this.fbErrorState = true;
						this.fbErrorMessage =
							'cannot connect to facebook ... Please try again later';
					}
				},
				{ scope: 'public_profile,email' }
			);
		},
		/**
		 * @vuese
		 * Request To Send AccessToken From FaceBook.
		 * @arg No arg.
		 */
		async sendAccessToken(token) {
			try {
				const actionPayload = {
					type: 'facebook',
					id_token: token,
					baseurl: this.$baseurl,
				};
				try {
					await this.$store.dispatch('googleSign', actionPayload);
					this.$router.push('/main');
				} catch (err) {
					this.error = err;
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
<style scoped>
img {
	width: 22px;
	height: 22px;
	margin-left: 12px;
	background-color: white;
	margin-right: 8px;
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
