<template>
	<div class="Abd">
		<div class="largest-div" v-if="page1">
			<div class="back-image"></div>
			<div class="sec-largest-div">
				<div class="right-side">
					<h1>Sign Up</h1>

					<p class="user-agreement">
						By continuing, you agree to our
						<a href="/help">User Agreement</a>
						and
						<a href="/help">Privacy Policy</a>.
					</p>

					<form class="signing-up">
						<div class="signup-google-apple">
							<GoogleSigninButton id="google-login" class="log-google log-ag" />
							<facebookSigninButton
								id="facebook-login"
								class="log-google log-ag"
							/>

							<div class="page-divider">
								<span class="page-divider-line"></span>
								<span class="page-divider-text">or</span>
								<span class="page-divider-line"></span>
							</div>
						</div>
						<fieldset class="email-field input-box">
							<input
								id="email-input"
								v-model="email"
								type="text"
								:class="
									!messageErrorShowEmail
										? ''
										: !checkedEmail
										? 'red-border'
										: 'blue-border'
								"
								required="required"
							/>
							<span class="animation-email">Email</span>
							<span
								v-if="showSignemail"
								:class="checkedEmail ? 'correct-check' : 'wrong-check'"
							></span>
							<div class="username-error-message" v-if="messageErrorShowEmail">
								{{ error_email_message }}
							</div>
						</fieldset>

						<fieldset class="submit-signup-field">
							<button
								class="submit-signup continue-button"
								type="submit"
								id="button-Continue"
								@click.prevent="
									handleSubmit();
									doRandom();
								"
							>
								Continue
							</button>
						</fieldset>

						<div class="register-bottom">
							Already a redditor?

							<li>
								<router-link to="/login">Log In </router-link>
							</li>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div class="all-div" v-if="page2">
			<div class="div-1">
				<h1 class="page-header">Choose your username</h1>
				<p class="description">
					Your username is how other community members will see you. This name
					will be used to credit you for things you share on Reddit. What should
					we call you?
				</p>
			</div>

			<div class="div-2" id="div-2">
				<form>
					<fieldset class="user-pass-box input-box">
						<input
							id="regUsername"
							:class="
								messageErrorShowUser
									? ''
									: !checkedUser
									? 'red-border'
									: 'blue-border'
							"
							type="text"
							v-model="username"
							required="required"
						/>
						<span class="animation-email usr-pass-anmie"
							>Choose A username</span
						>
						<span
							v-if="showSignuser"
							:class="checkedUser ? 'correct-check-usr' : 'wrong-check-usr'"
						></span>

						<div class="username-error-message" v-if="messageErrorShowUser">
							{{ error_message_user }}
						</div>
					</fieldset>

					<fieldset class="input-box user-pass-box">
						<input
							id="reg-password"
							type="password"
							required="required"
							v-model="password"
							:class="
								!messageErrorShowPass
									? ''
									: !checkedPass
									? 'red-border'
									: 'blue-border'
							"
							@focusout="validatepass"
						/>
						<span class="animation-email usr-pass-anmie">Password</span>
						<span
							v-if="showSignPass"
							:class="checkedPass ? 'correct-check-pass' : 'wrong-check-pass'"
						></span>

						<div class="username-error-message" v-if="messageErrorShowPass">
							{{ error_message_pass }}
						</div>
					</fieldset>
					<TheRecaptcha @verified="verifyRec" id="repatcha" />
				</form>
				<div class="username-generator" style="display: block">
					<p>
						Here are some username suggestions
						<a
							href="#"
							class="Onboarding__usernameRefresh"
							@click="doRandom"
						></a>
					</p>
					<div class="suggestions">
						<div
							class="usernames-data-gen"
							v-for="Username in RandomUsers[0]"
							:key="Username"
							@click="doPutUserName(Username)"
						>
							{{ Username }}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-div" v-if="bottom_div" id="bottom-div">
			<button id="back-button" class="back-bottom" @click="togglepages">
				Back
			</button>
			<base-button
				id="signup-button"
				:disable-button="buttonDisabled"
				:class="!success ? 'button-class' : 'button-success'"
				type="submit"
				data-step="username-and-password"
				@click.prevent="handleSignClick"
			>
				Sign Up
			</base-button>
		</div>
	</div>
</template>

<script>
// var check_email = false;
// var check_user = false;
// var check_pass = false;
import GoogleSigninButton from '../../components/auth/GoogleSigninButton.vue';
import facebookSigninButton from '../../components/auth/facebookSigninButton.vue';
import TheRecaptcha from '../../components/auth/TheRecaptcha.vue';
export default {
	data() {
		return {
			email: '',
			username: '',
			password: '',
			page1: true,
			page2: false,
			bottom_div: false,
			error_email: false,
			error_email_message: '',
			showSignemail: false,
			messageErrorShowEmail: false,
			checkedEmail: true,
			messageErrorShowUser: false,
			checkedUser: true,
			error_message_user: '',
			error_message_pass: '',
			messageErrorShowPass: false,
			showSignPass: false,
			showSignuser: false,
			checkedPass: true,
			showRepatcha: false,
			checkused: false,
			success: false,
			buttonDisabled: true,
			flag: false,
		};
	},
	computed: {
		// @vuese
		//Get Random Names from store get
		// @arg no argument
		RandomUsers() {
			return this.$store.getters['getRandomUsers'];
		},
	},
	methods: {
		// @vuese
		//Validate Email for having (@(gmail).(com) in their domain)
		// @arg email input
		validatEmail(value) {
			if (
				/^[a-zA-Z0-9\\/*+;&%?#@!^()_="\-:~`|[\]{}\s]*$/i.test(value) ||
				!value
			) {
				this.error_email = true;
				this.error_email_message = 'Please fix your email to continue';
				this.showSignemail = true;
				this.checkedEmail = false;
				this.messageErrorShowEmail = true;
				this.flag = false;
				// document.querySelector('#email-input').style.border =
				// 	'0.5px solid #ea0027';
			} else {
				this.messageErrorShowEmail = false;
				this.showSignemail = true;
				this.checkedEmail = true;
				this.flag = true;
				// document.querySelector('#email-input').style.border =
				// 	'0.5px solid #0079d3';
				// check_email = true;
			}
		},
		// @vuese
		//Validate new password to users (not to short)
		// @arg no argument
		validatepass() {
			if (this.password.length < 8) {
				this.messageErrorShowPass = true;
				this.error_message_pass = 'Password must be at least 8 characters long';
				this.showSignPass = true;
				this.checkedPass = false;
				// document.querySelector('#reg-password').style.border =
				// 	'0.5px solid #ea0027';
			} else {
				this.messageErrorShowPass = false;
				this.showSignPass = true;
				this.checkedPass = true;
				// document.querySelector('#reg-password').style.border =
				// 	'0.5px solid #0079d3';
				// check_pass = true;
			}
		},
		// @vuese
		//In SignUp page to show second Page
		// @arg no argument
		handleSubmit() {
			// var flag = false;
			if (!this.checkedEmail || this.email == '') {
				this.validatEmail(this.email);
				// this.flag = true;
			} else if (!this.checkused && this.email != '') {
				this.email_available();
			} else {
				this.togglepages();
			}
		},
		// @vuese
		//In SignUp page to show second Page or return to the first one
		// @arg no argument
		togglepages() {
			this.page1 = !this.page1;
			this.page2 = !this.page2;
			this.bottom_div = !this.bottom_div;
		},
		// @vuese
		//Validate User Input (Not too long or too Short)
		// @arg no argument
		validateUser(value) {
			this.showSignuser = false;
			this.messageErrorShowUser = false;
			this.showSignPass = false;
			this.messageErrorShowPass = false;
			// document.querySelector('#regUsername').style.border =
			// 	'1px solid rgba(0, 0, 0, 0.1)';
			if (value.length < 3 || value.length > 20) {
				this.showSignuser = true;
				this.checkedUser = false;
				this.messageErrorShowUser = true;
				this.error_message_user =
					'Username must be between 3 and 20 characters';
				// document.querySelector('#regUsername').style.border =
				// 	'0.5px solid #ea0027';
			}
		},
		//@vuese
		//Check if User is available or not
		// @arg no argument
		async usr_available() {
			const actionPayload = {
				username: this.username,
				baseurl: this.$baseurl,
			};
			try {
				await this.$store.dispatch('available_user', actionPayload);
				// const response = localStorage.getItem('response');
				// console.log(response);
				this.messageErrorShowUser = false;
				this.showSignuser = true;
				this.checkedUser = true;
				// document.querySelector('#regUsername').style.border =
				// 	'0.5px solid #0079d3';
			} catch (err) {
				const response = localStorage.getItem('response');
				console.log(response);
				this.showSignuser = true;
				this.checkedUser = false;
				this.messageErrorShowUser = true;
				this.error_message_user = 'That username is already taken';
				// document.querySelector('#regUsername').style.border =
				// 	'0.5px solid #ea0027';
				// this.error = err;
			}
		},
		// @vuese
		//Verify Do Recpatcha
		// @arg no argument
		verifyRec() {
			console.log('verified 2');
			this.buttonDisabled = false;
		},
		//@vuese
		//Check if Email is available or not
		// @arg no argument
		async email_available() {
			const actionPayload = {
				email: this.email,
				baseurl: this.$baseurl,
			};
			try {
				await this.$store.dispatch('available_email', actionPayload);
				// const response = localStorage.getItem('response');
				// console.log(response);
				this.messageErrorShowEmail = false;
				this.showSignemail = true;
				this.checkused = true;
				this.checkedEmail = true;
				// document.querySelector('#email-input').style.border =
				// 	'0.5px solid #0079d3';
			} catch (err) {
				if (this.flag) {
					const response = localStorage.getItem('response');
					console.log(response);
					this.error_email = true;
					this.error_email_message = 'Email is already taken';
					this.showSignemail = true;
					this.checkedEmail = false;
					this.messageErrorShowEmail = true;
					this.checkused = false;
				}
				// document.querySelector('#email-input').style.border =
				// 	'0.5px solid #ea0027';
				// this.error = err;
			}
		},
		// @vuese
		//post new user and email and password to server
		// @arg no argument
		async handleSignClick() {
			if (this.username == '' || this.password == '') {
				this.validateUser(this.username);
				this.validatepass(this.password);
			} else {
				const actionPayload = {
					username: this.username,
					password: this.password,
					email: this.email,
					baseurl: this.$baseurl,
				};

				try {
					await this.$store.dispatch('signuphandle', actionPayload);
					await this.$store.dispatch('notifications/createNotificationToken', {
						host: 'http://localhost:8081',
						baseurl: this.$baseurl,
					});

					this.$router.replace('/main');
				} catch (err) {
					this.error = err;
				}
			}
		},
		// @vuese
		//Get Request to get Random Names
		// @arg no argument
		async doRandom() {
			const actionPayload = {
				baseurl: this.$baseurl,
			};
			try {
				await this.$store.dispatch('getRandomUsers', actionPayload);
				console.log(this.$store.getters['getRandomUsers']);
				console.log('hassan');
			} catch (err) {
				this.error = err;
			}
		},
		// @vuese
		//Put username a Random Name that selected
		// @arg Random UserName
		doPutUserName(userRandom) {
			this.username = userRandom;
		},
	},
	components: { GoogleSigninButton, facebookSigninButton, TheRecaptcha },
	watch: {
		email(value) {
			this.email = value;
			this.validatEmail(value);
			this.email_available();
		},
		username(value) {
			this.username = value;
			this.validateUser(value);
			this.usr_available();
		},
		password(value) {
			this.password = value;
			this.showRepatcha = true;
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.Abd {
	margin: 0;
	height: 100vh;
	font-family: IBMPlexSans, sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #1a1a1b;
	background-color: #fff;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
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
	transition: background-color 0.2s;
}

.largest-div {
	background-color: white;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	overflow-x: hidden;
	min-height: 100vh;
	position: relative;
	width: 100%;
}
.button-class {
	color: #ffffff;
	background: var(--color-blue-2);
	text-transform: uppercase;
	cursor: pointer;
	line-height: unset;
	min-height: 35px;
	max-width: 392px;
	width: auto;
	min-width: 155px;
	padding: 5px 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
	border: none;
	border-radius: 4px;
	text-align: center;
	position: relative;
	font-family: 'IBMPlexSans', sans-serif;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.5px;
	max-height: 1000px;
	margin-top: 2rem;
}
.button-success {
	color: #ffffff;
	background: var(--color-blue-2);
	/*cursor: ;*/
	pointer-events: none;
	color: transparent;
	position: relative;
	overflow: hidden;
	/*text-indent: -9999px;*/
	border-radius: 4px;
	text-align: center;
	min-height: 35px;
	max-width: 392px;
	width: auto;
	min-width: 155px;
	padding: 5px 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-height: 1000px;
	margin-top: 2rem;
	transition: color 0.01s ease-in, text-indent 0.25s ease-in,
		opacity 0.25s ease-in;
}

.back-image {
	background-image: url('../../../img/bck.png');
	height: 100vh;
	min-height: 430px;
	width: 12rem;
	float: left;
	background-repeat: no-repeat;
	background-size: cover;
}

.sec-largest-div {
	width: 100%;
	padding: 0px;
	margin: 0;
}

.user-agreement {
	font-family: 'Noto Sans', sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	margin-top: 8px;
	margin-bottom: 48px;
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

.log-google {
	width: 280px;
	display: flex;
	align-items: center;
	/*justify-content: space-between;*/
}

.log-google:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
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
.right-side {
	padding: 24px;
	min-width: 260px;
	max-width: 440px;
}
.input-box input {
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
	outline: none;
}

.user-pass-box {
	width: 540px;
}

.animation-email {
	width: 55%;
}

.input-box .animation-email {
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.5px;
	font-family: 'IBM Plex Sans', sans-serif;
	color: #a5a4a4;
	position: absolute;
	left: 12px;
	padding: 20px;
	pointer-events: none;
	line-height: 20px;
	transition: all 0.2s ease-in-out;
	text-transform: uppercase;
	/* justify-content: space-between; */
}

.input-box input:focus ~ .animation-email,
.input-box input:hover ~ .animation-email,
.input-box input:active ~ .animation-email,
.input-box input:valid ~ .animation-email,
.input-box ~ .animation-email {
	transform: translateX(0.8px) translateY(-10px);
	font-size: 9px;
	padding: 12px 0px;
	padding-right: 36px;
	border-radius: 4px;
	border-color: #24a0ed;
}

.usr-pass-anmie::after {
	content: '\2022';
	color: #24a0ed;
	font-size: 18px;
	font-weight: 600;
	line-height: 25px;
	display: inline-block;
	margin-left: 5px;
}

.user-pass-box input:focus ~ .usr-pass-anmie::after,
.user-pass-box input:hover ~ .usr-pass-anmie::after,
.user-pass-box input:valid ~ .usr-pass-anmie::after,
.user-pass-box ~ .usr-pass-anmie::after {
	display: none;
}
/*.animation-email::after {
	content: '\2713';
	display: inline-block;
	color: #24a0ed;
	right: 2px;
	top: 18.5px;
	position: absolute;
	display: block;
	transition: all 0.2s ease-in-out;
	 display: none; 
}*/
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

.input-box .red-border {
	border: 0.5px solid #ea0027;
}

.input-box .correct-check {
	position: absolute;
	z-index: 1;
	right: 43%;
	top: 50%;
	height: 10px;
	width: 12px;
	background-color: #878a8c;
	background: url(https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg);
}

.input-box .correct-check-usr {
	position: absolute;
	z-index: 1;
	right: 43%;
	top: 40%;
	height: 10px;
	width: 12px;
	background-color: #878a8c;
	background: url(https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg);
}

.input-box .wrong-check {
	position: absolute;
	right: 43%;
	top: 28%;
	height: 12px;
	width: 2px;
	background: url(https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg);
}

.input-box .wrong-check-usr {
	position: absolute;
	right: 43%;
	top: 34%;
	height: 12px;
	width: 2px;
	background: url(https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg);
}

.input-box .wrong-check-pass {
	position: absolute;
	right: 43%;
	top: 34%;
	height: 12px;
	width: 2px;
	background: url(https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg);
}

.register-bottom {
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	margin-top: 8px;
	margin-bottom: 20px;
}

.all-div {
	width: 100%;
	align-self: stretch;
	/* display: flex; */
	flex-direction: column;
	height: 100%;
	position: relative;
	padding: 24px;
	/* display: none; */
}
.div-2 {
	display: flex;
	-webkit-box-flex: 1;
	flex: 1;
	-webkit-box-pack: justify;
	justify-content: space-between;
	padding: 24px;
}
.bottom-div {
	background-color: #fcfcfb;
	border-top: 1px solid hsla(195, 2%, 65%, 0.36);
	/* padding: 8px 16px; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 55px;
	position: absolute;
	bottom: 0px;
	width: 100%;
	/* display: none; */
}

.div-1 {
	border-bottom: 1px solid hsla(195, 2%, 65%, 0.36);
}
.Onboarding__usernameRefresh {
	background: url(https://www.redditstatic.com/accountmanager/25f30c472d0243a2d874451a240fe08a.svg);
	background-size: contain;
	width: 16px;
	height: 16px;
	display: inline-block;
	margin-left: 8px;
	color: #24a0ed;
	vertical-align: text-top;
	text-decoration: none;
	cursor: pointer;
}

.usernames-data-gen {
	color: #24a0ed;
	cursor: pointer;
}
.description {
	margin-bottom: 20px;
}

.page-header {
	margin: 0px;
	font-size: 18px;
	font-weight: 100;
	line-height: 22px;
}

.password-textInput,
.username-textInput {
	width: 27%;
	transition: all 0.2s ease-in-out;
	height: 20px;
	padding: 22px 12px 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	background-color: #fcfcfb;
	line-height: 14px;
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.5px;
	display: inline-block;
	vertical-align: middle;
	top: 14px;
	left: 12px;
	color: #a5a4a4;
	text-transform: uppercase;
}

.submit-signup {
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
	width: auto;
	min-width: 155px;
}

.back-bottom {
	border: none;
}

.submit-signup {
	width: 60%;
}

.signup-page2 {
	width: 3rem;
}
</style>
