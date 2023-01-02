<template>
	<div class="big-container">
		<button class="x-button">
			<div class="x" />
		</button>
		<!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Times_symbol.svg/640px-Times_symbol.svg.png" alt="My Happy SVG" width="45" height="45" /> -->
		<div class="box">
			<form>
				<h1>Log In</h1>
				<p class="description">
					By continuing, you agree to our
					<a href="https://www.redditinc.com/policies/user-agreement"
						>User Agreement</a
					>
					and
					<a href="https://www.redditinc.com/policies/privacy-policy"
						>Privacy Policy</a
					>.
				</p>
				<form @submit.prevent="handleSubmit">
					<div class="login-google-apple">
						<GoogleSigninButton id="google-login" class="log-google log-ag" />
						<facebookSigninButton
							id="facebook-login"
							class="log-google log-ag"
						/>
						<div class="page-divider-comp">
							<span class="page-divider-comp-line"></span>
							<span class="page-divider-comp-text">or</span>
							<span class="page-divider-comp-line"></span>
						</div>
					</div>
					<div class="input-box usr-pass-div">
						<input
							id="user-name"
							type="text"
							required="required"
							v-model="username"
							:class="
								!showSignuser ? '' : !checkedUser ? 'red-border' : 'blue-border'
							"
						/>
						<span class="span-input"> Username</span>
						<span
							v-if="showSignuser"
							:class="checkedUser ? 'correct-check' : 'wrong-check'"
						></span>

						<div class="username-error-message" v-if="messageErrorShowUser">
							{{ error_message }}
						</div>
					</div>
					<!-- <p class="invalid">Please enter a username to continue</p> -->
					<div class="input-box usr-pass-div">
						<input
							id="password"
							type="password"
							required="required"
							v-model="password"
							:class="messageErrorShowPass ? 'red-border' : ''"
						/>
						<span class="span-input"> Password</span>
						<span
							v-if="showSignPass"
							:class="checkedPass ? 'correct-check' : 'wrong-check'"
						></span>
					</div>
					<!-- <p class="invalid">Please enter an email address to continue</p> -->
					<div class="forgot-usr-pass-comp">
						<span>Forgot your</span> <a href="/forgetUsername">username</a>
						<span> or </span> <a href="/forgetPassword">password</a
						><span>?</span>
					</div>
					<base-button button-text="Log In" class="button-class"> </base-button>

					<div class="bottomText">
						<label>
							Don't have an email or need assistance logging in?
							<a class="link">Get Help </a></label
						>
					</div>
				</form>
				<div class="register-bottom-Comp">
					New to Reddit?

					<li><router-link to="/signupcomp">Sign Up </router-link></li>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import GoogleSigninButton from '../../components/auth/GoogleSigninButton.vue';
import facebookSigninButton from '../../components/auth/facebookSigninButton.vue';
export default {
	data() {
		return {
			username: '', // username
			password: '', // password user
			showSignuser: false, // true or error for user
			checkedUser: true, // true or error for user
			error_message: '', // error message shown
			messageErrorShowUser: false, // showing err message
			messageErrorShowPass: false,
			showSignPass: false, // true or error for pass
			Check: false, // flag for validation
			users: {}, //test array
			checkedPass: true, //true or error for pass
			done_message: '',
			done_login: false,
		};
	},
	methods: {
		// @vuese
		// Validation for UserName (Not a long or Short Input)
		validateUser(value) {
			this.showSignuser = false;
			this.messageErrorShowUser = false;
			this.showSignPass = false;
			this.messageErrorShowPass = false;
			if (value.length < 3 || value.length > 20) {
				this.showSignuser = true;
				this.checkedUser = false;
				this.messageErrorShowUser = true;
				this.error_message = 'Username must be between 3 and 20 characters';
			} else {
				this.showSignuser = true;
				this.checkedUser = true;
				this.messageErrorShowUser = false;
			}
		},
		// @vuese
		// posting username and password and wait for token to get login
		async handleSubmit() {
			const actionPayload = {
				username: this.username,
				password: this.password,
				baseurl: this.$baseurl,
			};

			try {
				await this.$store.dispatch('loginhandle', actionPayload);
				const response = localStorage.getItem('response');
				// // //console.log(response);
				// //console.log(response);
				if (response == 200) {
					await this.$store.dispatch('notifications/createNotificationToken', {
						baseurl: this.$baseurl,
						token: localStorage.getItem('accessToken'),
					});

					location.reload();
					// this.done_login = true;
					// this.done_message =
					// 	'youre now logged in, You will be redirected to main page';
					// this.$router.replace('/main');
					// setTimeout(() => this.$router.replace('/main'), 1000);
				}
			} catch (err) {
				this.showSignuser = true;
				this.checkedUser = false;
				this.messageErrorShowUser = true;
				this.error_message = 'Incorrect username or password';
				this.showSignPass = true;
				this.checkedPass = false;
				this.messageErrorShowPass = true;
				// this.error = err;
				// document.querySelector('#user-name').style.border =
				// 	'0.5px solid #ea0027';
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
* {
	box-sizing: border-box;
}
div {
	display: block;
}
.page-divider-comp {
	margin: 20px 0 24px;
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.page-divider-comp-line {
	border-top: 1px solid #edeff1;
	width: 40%;
}
.page-divider-comp-text {
	font-size: 14px;
	line-height: 18px;
	color: #787c7e;
	font-family: IBMPlexSans, sans-serif;
	font-weight: 700;
	text-transform: uppercase;
}
.usr-pass-div {
	margin-top: 16px;
	max-width: 280px;
	position: relative;
}
.forgot-usr-pass-comp {
	font-family: 'Noto Sans', sans-serif;
	font-size: 12px;
	letter-spacing: unset;
	line-height: 16px;
	margin-bottom: 0;
	margin-top: 16px;
}
.register-bottom-Comp {
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	letter-spacing: unset;
	line-height: 16px;
	margin-bottom: 0;
	margin-top: 16px;
}
.link {
	color: #0079d3;
	text-decoration: underline;
	font-family: 'IBM Plex Sans', sans-serif;
	cursor: pointer;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.05em;
	text-transform: capitalize;
}
.input-box {
	position: relative;
}
.input-box input {
	border-radius: 100px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	height: 46px;
	padding-left: 16px;
	width: 100%;
	padding-right: 36px;
	background: rgb(246, 247, 248);
	border-color: transparent;
	outline: none;
	transition: all 0.2s ease-in-out;
	box-sizing: border-box;
	padding-top: 15px;
	text-align: left;
}

.input-box .span-input {
	position: absolute;
	left: 0;
	padding: 15px 20px 20px 15px;
	pointer-events: none;
	font-size: 14px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	transition: all 0.2s ease-in-out;
}
.input-box input:valid ~ .span-input,
.input-box input:focus ~ .span-input,
.input-box input:hover ~ .span-input {
	transform: translateX(3px) translateY(-10px);
	font-size: 10px;
}

.input-box input:active {
	border: 0.5px solid #0079d3;
}
/*.input-field input:focus {
	border: 0.5px solid rgba(0, 0, 0, 0.2);
}*/
.button-class {
	margin: 16px 0px 0px;
	color: #ffffff;
	padding: 5px 10px;
	/*background: linear-gradient(89.57deg, #ec0623, #ff8717);*/
	background: var(--button-color);
	border-radius: 24px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 14px;
	height: 40px;
	line-height: 10px;
	width: 100%;
}
.big-container {
	background-color: white;
	border-color: transparent;
	border-radius: 10px;
	-webkit-box-align: center;
	margin: 10px auto 10px auto;
	padding: 20px;
	display: flex;
	align-items: center;
	max-width: 400px;
	height: 640px;
	min-height: 100v;
	overflow-x: hidden;
	position: relative;
}
.box {
	padding: 36px;
	min-width: 150px;
	max-width: 440px;
}
h1 {
	color: #1a1a1b;
	margin: 24px 0px 8px 0px;
	font-size: 20px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	line-height: 24px;
}

.description {
	margin: 8px 0px 8px;
	font-size: 12px;
	font-family: 'Noto Sans', sans-serif;
	font-weight: 400;
	line-height: 16px;
	width: 100%;
}
.bottomText {
	font-family: 'Noto Sans', sans-serif;
	margin-top: 8px;
	margin-bottom: 20px;
	font-weight: 400;

	font-size: 12px;
	line-height: 18px;
	margin-bottom: 14px;
	margin-top: 14px;
}

.invalid {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	margin-top: 4px;
	max-height: 1000px;
	opacity: 1;
	color: #ea0027;
	transition: all 0.2s ease-in-out;
}
.x-button {
	position: absolute;
	left: 93%;
	top: 3%;
	visibility: hidden;
}
.x {
	visibility: visible;
	width: 1.7px;
	height: 14.9px;

	transform: translate(-50%, -50%);
	background: transparent;
}
.x::before,
.x::after {
	content: '';
	position: absolute;
	width: inherit;
	height: inherit;
	background: #878a8c;
}

.x::before {
	transform: rotate(-45deg);
}
.x::after {
	transform: rotate(45deg);
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
.input-box .correct-check {
	position: absolute;
	z-index: 1;
	right: 20px;
	top: 50%;
	height: 10px;
	width: 12px;
	background: url(https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg);
}
.input-box .wrong-check {
	position: absolute;
	right: 20px;
	top: 28%;
	height: 12px;
	width: 2px;
	background: url(https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg);
}
.input-box .red-border {
	border: 0.5px solid #ea0027;
}
.input-box .blue-border {
	border: 0.5px solid #0079d3;
	border-color: #24a0ed;
}
</style>
