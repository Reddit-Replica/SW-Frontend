<template>
	<div class="Abd">
		<div class="largest-div">
			<!--the div that include all page -->
			<div class="back-image"></div>
			<!--the div that include BackGround Image (Left side) -->
			<div class="sec-largest-div">
				<!--the div that include all right side  -->

				<h1>Log in</h1>

				<p class="user-agreement">
					By continuing, you agree to our
					<a href="https://www.redditinc.com/policies/user-agreement"
						>User Agreement</a
					>
					and
					<a href="https://www.redditinc.com/policies/privacy-policy"
						>Privacy Policy</a
					>.
				</p>

				<form class="logining-in">
					<!--LogIn with google and apple accounts -->

					<div class="login-google-apple">
						<GoogleSigninButton id="google-login" class="log-google log-ag" />
						<div
							id="facebook-login"
							class="log-facebook log-ag"
							@click="facebookLogin()"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-facebook logo-img"
								viewBox="0 0 16 16"
							>
								<path
									d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
								/>
							</svg>
							<span>Continue with Facebook</span>
						</div> -->
						<!-- <v-facebook-login
							id="facebook-login"
							class="log-facebook log-ag"
							app-id="651769123026203"
							v-model="model"
							@sdk-init="handleSdkInit"
						></v-facebook-login> -->

						<!-- <button
							v-facebook-signin-button="appId"
							class="facebook-signin-button"
						>
							Continue with Facebook
						</button> -->
						<fb:login-button
							scope="public_profile,email"
							onlogin="checkLoginState();"
						></fb:login-button>

						<div class="page-divider">
							<span class="page-divider-line"></span>
							<span class="page-divider-text">or</span>
							<span class="page-divider-line"></span>
						</div>
					</div>

					<fieldset class="username-field field-pass-usr">
						<!--Group of UserName Element -->

						<input type="text" required="required" />
						<span class="animation-usr-pass">UserName</span>

						<div class="username-error-message" v-if="error_show">
							{{ error_message }}
						</div>
						<!--Error Message Shown here -->
					</fieldset>

					<fieldset class="password-field field-pass-usr">
						<!--Group of Password Element -->

						<input type="password" required="required" />
						<span class="animation-usr-pass">Password</span>

						<div class="username-error-message"></div>
						<!--Error Message Shown here -->
					</fieldset>

					<button class="submit-login" type="submit">Log In</button>

					<div class="forgot-usr-pass">
						<span>Forgot your</span> <a href="/username">username</a>
						<span> or </span> <a href="/password">password</a><span>?</span>
					</div>
					<div class="register-bottom">
						New to Reddit?

						<li><router-link to="/signup">Sign Up </router-link></li>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import GoogleSigninButton from '../../components/GoogleSigninButton.vue';
export default {
	name: 'LogIn',
	data() {
		return {
			user: {
				username: '',
				password: '',
			},
			test: 'BEFORE SUBMIT',

			// FB: {},
			// model: {},
			// scope: {},
			// appId: '651769123026203',
		};
	},
	method: {
		handleSubmit() {
			let user = new user({
				username: this.username,
				password: this.password,
			});
			this.test = 'AFTER SUBMIT';
		},
		// async facebookLogin() {},
		// handleSdkInit({ FB, scope }) {
		// 	this.FB = FB;
		// 	this.scope = scope;
		// 	console.log('saaf');
		// },
		// OnFacebookAuthSuccess(idToken) {
		// 	console.log(idToken);
		// },
		// OnFacebookAuthFail(error) {
		// 	console.log(error);
		// },
	},
	components: { GoogleSigninButton },
};
</script>

<style scoped>
.facebook-signin-button {
	color: white;
	background-color: #3b5998;
	height: 50px;
	font-size: 16px;
	border-radius: 10px;
	padding: 10px 20px 25px 20px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.Abd {
	margin: 0;
	height: 100vh;
	font-family: 'IBMPlexSans', sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #1a1a1b;
	background-color: #fff;
}
h1 {
	display: block;
	margin-block-start: 0.7em;
	margin-block-end: 0.7em;
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
}
fieldset {
	border: none;
	margin: 10px 0;
	padding: 0;
	position: relative;
}
button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	box-sizing: border-box;
	cursor: pointer;
}
.largest-div {
	width: 70rem;
	height: 100%;
	overflow: hidden;
}
.back-image {
	background-image: url('../../../img/bck.png');
	background-color: #0079d3;
	height: 100%;
	width: 12rem;
	float: left;
	/* background-position: center; */
	background-repeat: no-repeat;
	background-size: cover;
	/* z-index: 1; */
}
.sec-largest-div {
	/* align-self: center; */
	padding: 24px;
	overflow: hidden;
	/* width: 50rem; */
}
.user-agreement {
	margin-bottom: 48px;
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
}
/* class of log in with google and log in with apple */
.log-ag {
	font-size: 14px;
	font-family: 'IBMPlexSans', sans-serif;
	letter-spacing: 0.5px;
	border: 1px solid #0079d3;
	border-radius: 4px;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 600;
	background-color: #fff;
	color: #0079d3;
	display: block;
	margin: 8px 0;
	/* width: 60%; */
}
.page-divider {
	align-items: center;
	display: flex;
	margin: 28px 0;
}
.page-divider-line {
	width: 20%;
	border-top: 1px solid #edeff1;
	margin-left: 10px;
	margin-right: 10px;
}
.page-divider-text {
	text-transform: uppercase;
	font-weight: 500;
	line-height: 18px;
	color: #878a8c;
	font-size: 14px;
}
.field-pass-usr input {
	position: relative;
	transform: translateZ(0);
	width: 60%;
	transition: all 0.2s ease-in-out;
	height: 48px;
	padding: 22px 12px 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	background-color: #fcfcfb;
	font-size: 14px;
	margin-top: 5px;
}
.field-pass-usr .animation-usr-pass {
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.5px;
	font-family: 'IBM Plex Sans', sans-serif;
	color: #a5a4a4;
	position: absolute;
	left: 12px;
	padding: 15px 20px 20px 15px;
	pointer-events: none;
	line-height: 20px;
	transition: all 0.2s ease-in-out;
	text-transform: uppercase;
}
.animation-usr-pass::after {
	content: '\2022';
	color: #24a0ed;
	font-size: 18px;
	font-weight: 600;
	line-height: 25px;
	display: inline-block;
	margin-left: 5px;
}

.field-pass-usr input:focus ~ .animation-usr-pass,
.field-pass-usr input:hover ~ .animation-usr-pass,
.field-pass-usr input:valid ~ .animation-usr-pass,
.field-pass-usr ~ .animation-usr-pass {
	transform: translateX(0.8px) translateY(-15px);
	font-size: 9px;
	padding: 20px 0px;
	padding-right: 36px;
	border-radius: 4px;
	border-color: #24a0ed;
}
.field-pass-usr input:focus ~ .animation-usr-pass::after,
.field-pass-usr input:hover ~ .animation-usr-pass::after,
.field-pass-usr input:valid ~ .animation-usr-pass::after,
.field-pass-usr ~ .animation-usr-pass::after {
	display: none;
}
.forgot-usr-pass,
.register-bottom {
	font-family: 'Noto Sans', sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	margin-top: 8px;
	margin-bottom: 20px;
}
.submit-login {
	font-size: 14px;
	font-weight: 600;
	font-family: 'IBMPlexSans', sans-serif;
	letter-spacing: 0.5px;
	border: none;
	border-radius: 4px;
	text-align: center;
	background: #0079d3;
	color: #fff;
	text-transform: uppercase;
	cursor: pointer;
	min-height: 35px;
	max-width: 392px;
	width: 60%;
	min-width: 155px;
}
.log-facebook,
.log-google {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.log-facebook:hover,
.log-google:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
}
.logo-img {
	height: 2rem;
	width: 2rem;
	margin: 0.5rem 0;
}
</style>
