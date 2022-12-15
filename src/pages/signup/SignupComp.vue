<template>
	<div v-if="page1">
		<div class="big-container">
			<button class="x-button">
				<div class="x" />
			</button>
			<!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Times_symbol.svg/640px-Times_symbol.svg.png" alt="My Happy SVG" width="45" height="45" /> -->
			<div class="box">
				<form>
					<h1>Sign Up</h1>
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
								id="email-input"
								v-model="email"
								type="text"
								:class="
									!showSignemail
										? ''
										: !checkedEmail
										? 'red-border'
										: 'blue-border'
								"
								required="required"
								@focusout="email_available"
							/>
							<span class="span-input"> Email</span>
							<span
								v-if="showSignemail"
								:class="checkedEmail ? 'correct-check' : 'wrong-check'"
							></span>

							<div class="username-error-message" v-if="messageErrorShowEmail">
								{{ error_email_message }}
							</div>
						</div>
						<base-button
							button-text="Continue"
							class="button-class"
							:class="!success ? '' : 'button-success'"
						>
						</base-button>
					</form>
					<div class="register-bottom-Comp">
						Already a redditor?

						<li><router-link to="/logincomp">Log In </router-link></li>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div v-if="page2">
		<div class="big-container">
			<button class="x-button">
				<div class="x" />
			</button>
			<a class="back-button" @click="togglepages"></a>
			<!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Times_symbol.svg/640px-Times_symbol.svg.png" alt="My Happy SVG" width="45" height="45" /> -->
			<div class="box">
				<form>
					<h1>Create your username and password</h1>
					<p class="description">
						Reddit is anonymous, so your username is what you’ll go by here.
						Choose wisely—because once you get a name, you can’t change it
					</p>
					<form @submit.prevent="handleSubmit">
						<div class="input-box usr-pass-div">
							<input
								id="username-input"
								v-model="username"
								type="text"
								:class="
									!showSignuser
										? ''
										: !checkedUser
										? 'red-border'
										: 'blue-border'
								"
								required="required"
							/>
							<span class="span-input"> UserName</span>
							<span class="reload-usr"></span>

							<div
								:class="
									!checkedUser
										? 'username-error-message'
										: 'username-not-error-message'
								"
								v-if="messageErrorShowUser"
							>
								{{ error_message_user }}
							</div>
						</div>
						<div class="input-box usr-pass-div padding-div">
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
							<span class="span-input">Password</span>
							<span
								v-if="showSignPass"
								:class="checkedPass ? 'correct-check' : 'wrong-check'"
							></span>

							<div class="username-error-message" v-if="messageErrorShowPass">
								{{ error_message_pass }}
							</div>
						</div>
						<TheRecaptcha @verified="verifyRec" id="repatcha" />
						<base-button
							button-text="Continue"
							class="button-class"
							:class="!success2 ? '' : 'button-success'"
						>
						</base-button>
					</form>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import GoogleSigninButton from '../../components/auth/googleComp.vue';
import facebookSigninButton from '../../components/auth/fbComp.vue';
import TheRecaptcha from '../../components/auth/TheRecaptcha.vue';
export default {
	data() {
		return {
			email: '',
			username: '',
			password: '',
			buttonDisabled: false,
			error_email: false,
			error_email_message: '',
			showSignemail: false,
			messageErrorShowEmail: false,
			checkedEmail: true,
			flag: false,
			success: true,
			success2: true,
			page1: true,
			page2: false,
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
			flagUser: false,
		};
	},
	methods: {
		validatEmail(value) {
			if (
				/^[a-zA-Z0-9\\/*+;&%?#@!^()_="\-:~`|[\]{}\s]*$/i.test(value) ||
				!value
			) {
				this.error_email = true;
				this.error_email_message = 'Not a valid email address';
				this.showSignemail = true;
				this.checkedEmail = false;
				this.messageErrorShowEmail = true;
				this.flag = false;
				this.success = true;
			} else {
				this.messageErrorShowEmail = false;
				this.showSignemail = true;
				this.checkedEmail = true;
				this.flag = true;
				this.success = false;
			}
		},
		// @vuese
		//Validate new password to users (not to short)
		validatepass() {
			if (this.password.length < 8) {
				this.messageErrorShowPass = true;
				this.error_message_pass = 'Password must be at least 8 characters long';
				this.showSignPass = true;
				this.checkedPass = false;
			} else {
				this.messageErrorShowPass = false;
				this.showSignPass = true;
				this.checkedPass = true;
				this.verifyButton();
			}
		},
		// @vuese
		//Validate User Input (Not too long or too Short)
		validateUser(value) {
			this.showSignuser = false;
			if (value.length < 3 || value.length > 20) {
				this.showSignuser = true;
				this.checkedUser = false;
				this.messageErrorShowUser = true;
				this.error_message_user =
					'Username must be between 3 and 20 characters';
				this.flagUser = false;
			} else if (value != '' && value.length >= 3 && value.length <= 20) {
				this.showSignuser = true;
				this.messageErrorShowUser = false;
				this.showSignPass = false;
				this.messageErrorShowPass = false;
				this.checkedUser = true;
				this.flagUser = true;
				this.usr_available();
			}
		},
		//@vuese
		//Check if User is available or not
		async usr_available() {
			const actionPayload = {
				username: this.username,
				baseurl: this.$baseurl,
			};
			try {
				await this.$store.dispatch('available_user', actionPayload);
				await this.$store.dispatch('notifications/createNotificationToken', {
					host: 'http://localhost:8081',
					baseurl: this.$baseurl,
					token: localStorage.getItem('accessToken'),
				});

				const response = localStorage.getItem('response');
				console.log(response);
				this.messageErrorShowUser = true;
				this.showSignuser = true;
				this.checkedUser = true;
				this.error_message_user = 'Nice! Username available';
			} catch (err) {
				const response = localStorage.getItem('response');
				console.log(response);
				this.showSignuser = true;
				this.checkedUser = false;
				this.messageErrorShowUser = true;
				this.error_message_user = 'That username is already taken';
			}
		},
		verifyRec() {
			console.log('verified 2');
			this.buttonDisabled = true;
			this.verifyButton();
		},
		verifyButton() {
			if (this.buttonDisabled && this.checkedPass && this.checkedUser) {
				this.success2 = false;
			}
		},
		async email_available() {
			const actionPayload = {
				email: this.email,
				baseurl: this.$baseurl,
			};
			try {
				await this.$store.dispatch('available_email', actionPayload);
				const response = localStorage.getItem('response');
				console.log(response);
				this.messageErrorShowEmail = false;
				this.showSignemail = true;
				this.checkused = true;
				this.checkedEmail = true;
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
			}
		},
		handleSubmit() {
			// var flag = false;
			if (!this.checkedEmail || this.email == '') {
				this.validatEmail(this.email);
				// this.flag = true;
			} else {
				this.togglepages();
			}
		},
		togglepages() {
			this.page1 = !this.page1;
			this.page2 = !this.page2;
		},
	},
	watch: {
		email(value) {
			this.email = value;
			this.validatEmail(value);
		},
		username(value) {
			this.username = value;
			this.validateUser(value);
			// this.usr_available();
			this.verifyButton();
		},
		password(value) {
			this.password = value;
			this.showRepatcha = true;
			this.verifyButton();
		},
	},
	components: { GoogleSigninButton, facebookSigninButton, TheRecaptcha },
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
.back-button {
	background: url(https://www.redditstatic.com/accountmanager/f4b9765105964dd28c7f05fa783bd782.svg);
	background-position: 50%;
	background-repeat: no-repeat;
	box-sizing: content-box;
	color: #878a8c;
	display: block;
	height: 14px;
	margin-left: -8px;
	padding: 8px;
	position: absolute;
	top: 24px;
	width: 14px;
	cursor: pointer;
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
#google-login {
	border-radius: 20px;
	border-color: rgba(0, 0, 0, 0.1);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;
	font-size: 12px;
	direction: ltr;
	font-synthesis: none;
	position: relative;
	letter-spacing: initial;
	width: 100%;
	height: 100%;
	min-width: 130px;
	max-width: 375px;
	min-height: 30px;
	max-height: 64px;
	text-align: center;
	user-select: none;
	white-space: nowrap;
}
#google-login:focus,
#google-login:hover {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
	color: var(--color-grey-dark-2);
}
#facebook-login {
	border-radius: 20px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;
	font-size: 12px;
	direction: ltr;
	font-synthesis: none;
	position: relative;
	letter-spacing: initial;
	width: 100%;
	height: 100%;
	min-width: 130px;
	max-width: 375px;
	min-height: 30px;
	max-height: 64px;
	text-align: center;
	user-select: none;
	white-space: nowrap;
}
#facebook-login:hover,
#facebook-login:focus {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
	color: var(--color-grey-dark-2);
}

.register-bottom-Comp {
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	letter-spacing: unset;
	line-height: 16px;
	margin-bottom: 0;
	margin-top: 16px;
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
	text-transform: uppercase;
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
.padding-div {
	padding-bottom: 12px;
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
.username-not-error-message {
	color: #0079d3;
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 14px;
	margin-top: 8px;
	opacity: 1;
	padding: 0 24px;
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
.reload-usr {
	background: url(https://www.redditstatic.com/accountmanager/9b2bb577028d16657f1d5ff5960fce04.svg);
	background-repeat: no-repeat 50%;
	position: absolute;
	height: 18px;
	top: 28%;
	right: 15px;
	color: #0079d3;
	font-size: 12px;
	line-height: 16px;
	margin-right: 16px;
	width: 18px;
	max-width: 280px;
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
.button-success {
	cursor: not-allowed;
	opacity: 0.2;
	pointer-events: none;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 18px;
	background: #d93a00;
	border-radius: 999px;
	color: #fff;
	height: 40px;
	padding: 0 16px;
	font-family: IBMPlexSans, sans-serif;
	text-transform: unset;
	margin-top: 8px;
	width: 100%;
}
</style>
