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

				<form class="logining-in" @submit.prevent="handleSubmit">
					<!--LogIn with google and facebook accounts -->

					<div class="login-google-apple">
						<GoogleSigninButton id="google-login" class="log-google log-ag" />
						<facebookSigninButton
							id="facebook-login"
							class="log-google log-ag"
						/>
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
						<!-- <fb:login-button
							scope="public_profile,email"
							onlogin="checkLoginState();"
						></fb:login-button> -->

						<div class="page-divider">
							<span class="page-divider-line"></span>
							<span class="page-divider-text">or</span>
							<span class="page-divider-line"></span>
						</div>
					</div>

					<fieldset class="username-field field-pass-usr input-box">
						<!--Group of UserName Element -->

						<input
							id="user-name"
							type="text"
							required="required"
							v-model="username"
							:class="messageErrorShowUser ? 'red-border' : ''"
						/>
						<span class="animation-usr-pass">UserName</span>
						<span
							v-if="showSignuser"
							:class="checkedUser ? 'correct-check' : 'wrong-check'"
						></span>

						<div class="username-error-message" v-if="messageErrorShowUser">
							{{ error_message }}
						</div>
						<!--Error Message Shown here -->
					</fieldset>

					<fieldset class="password-field field-pass-usr input-box">
						<!--Group of Password Element -->

						<input
							id="password"
							type="password"
							required="required"
							v-model="password"
							:class="messageErrorShowPass ? 'red-border' : ''"
						/>
						<span class="animation-usr-pass">Password</span>
						<span
							v-if="showSignPass"
							:class="checkedPass ? 'correct-check' : 'wrong-check'"
						></span>

						<!-- <div class="username-error-message" v-if="messageErrorShowPass">
							{{ error_message }}
						</div> -->
						<!--Error Message Shown here -->
					</fieldset>

					<button class="submit-login" type="submit">Log In</button>

					<div class="forgot-usr-pass">
						<span>Forgot your</span> <a href="/forgetUsernamepage">username</a>
						<span> or </span> <a href="/forgetPasswordpage">password</a
						><span>?</span>
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
import facebookSigninButton from '../../components/facebookSigninButton.vue';
export default {
	name: 'LogIn',
	data() {
		return {
			username: '', // username
			password: '', // password user
			showSignuser: false, // true or error for user
			checkedUser: true, // true or error for user
			error_message: '', // error message shown
			messageErrorShowUser: false, // showing err message
			showSignPass: false, // true or error for pass
			Check: false, // flag for validation
			users: {}, //test array
			checkedPass: true, //true or error for pass
		};
	},
	methods: {
		// @vuese
		// Validation for UserName
		// validateUser(value) {
		// 	this.showSignuser = false;
		// 	this.messageErrorShowUser = false;
		// 	this.showSignPass = false;
		// 	this.messageErrorShowPass = false;
		// 	document.querySelector('#user-name').style.border =
		// 		'1px solid rgba(0, 0, 0, 0.1)';
		// 	if (value.length < 3 || value.length > 20) {
		// 		this.showSignuser = true;
		// 		this.checkedUser = false;
		// 		this.messageErrorShowUser = true;
		// 		this.error_message = 'Username must be between 3 and 20 characters';
		// 		document.querySelector('#user-name').style.border =
		// 			'0.5px solid #ea0027';
		// 	} else {
		// 		fetch(this.$baseurl + '/userTest')
		// 			.then((response) => {
		// 				if (response.ok) {
		// 					return response.json();
		// 				}
		// 			})
		// 			.then((data) => {
		// 				data.forEach((element) => {
		// 					if (element.username == this.username) {
		// 						this.showSignuser = true;
		// 						this.checkedUser = true;
		// 						document.querySelector('#user-name').style.border =
		// 							'0.5px solid #0079d3';
		// 					}
		// 				});
		// 			})
		// 			.catch((error) => {
		// 				console.log(error);
		// 			});
		// 	}
		// },
		// @vuese
		// posting username and password and wait for token
		async handleSubmit() {
			const actionPayload = {
				username: this.username,
				password: this.password,
				baseurl: this.$baseurl,
			};

			try {
				await this.$store.dispatch('loginhandle', actionPayload);
				// const response =localStorage.getItem('response');
				this.$router.replace('/main');
			} catch (err) {
				this.error = err;
			}
		},
	},
	watch: {
		// @vuese
		//watch username if it's not empty
		username(value) {
			this.username = value;
			this.validateUser(value);
		},
	},
	components: { GoogleSigninButton, facebookSigninButton },
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
	width: 28rem;
	transition: all 0.2s ease-in-out;
	height: 48px;
	padding: 22px 12px 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	background-color: #fcfcfb;
	font-size: 14px;
	margin-top: 5px;
	outline: none;
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
.username-error-message {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	margin-top: 4px;
	max-height: 1000px;
	opacity: 1;
	color: #ea0027;
	transition: all 0.2s ease-in-out;
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
.input-box .red-border {
	border: 0.5px solid #ea0027;
}
.input-box .correct-check {
	position: absolute;
	z-index: 1;
	right: 27rem;
	top: 40%;
	height: 10px;
	width: 12px;
	background-color: #878a8c;
	background: url(https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg);
}
.input-box .wrong-check {
	position: absolute;
	right: 27rem;
	top: 28%;
	height: 12px;
	width: 2px;
	background: url(https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg);
}
.password-field .wrong-check {
	top: 40%;
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
	width: 28rem;
	min-width: 155px;
}
.log-facebook,
.log-google {
	width: 280px;
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
	margin: 1rem;
}
</style>
