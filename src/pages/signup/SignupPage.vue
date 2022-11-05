<template>
	<div class="Abd">
		<div class="largest-div" v-if="page1">
			<div class="back-image"></div>
			<div class="sec-largest-div">
				<h1>Sign Up</h1>

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

				<form class="signing-up">
					<div class="signup-google-apple">
						<div id="google-signup" class="sign-google sign-ag">
							Continue with Google
						</div>
						<div id="apple-signup" class="sign-apple sign-ag">
							Continue with Apple
						</div>

						<div class="page-divider">
							<span class="page-divider-line"></span>
							<span class="page-divider-text">or</span>
							<span class="page-divider-line"></span>
						</div>
					</div>

					<fieldset class="email-field">
						<input v-model="email" type="text" required="required" />
						<span class="animation-email">Email</span>
						<div class="error-email-msg" v-if="error_email">
							{{ error_email_message }}
						</div>
					</fieldset>

					<fieldset class="submit-signup-field">
						<button
							class="submit-signup continue-button"
							type="submit"
							@click.prevent="handleSubmit"
						>
							Continue
						</button>
					</fieldset>

					<div class="register-bottom">
						Already a redditor?

						<li><router-link to="/login">Log In </router-link></li>
					</div>
				</form>
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

			<div class="div-2">
				<form>
					<fieldset class="register-username-field">
						<input
							id="regUsername"
							class="username-textInput"
							type="text"
							name="username"
							placeholder="Choose a Username"
							v-model="username"
						/>
						<div class="username-errorMessage" data-for="username"></div>
					</fieldset>

					<fieldset id="register-password-field">
						<input
							id="reg-password"
							class="password-textInput"
							type="password"
							name="password"
							placeholder="Password"
							v-model="password"
						/>
						<div class="password-errorMessage" data-for="password"></div>
					</fieldset>
				</form>
			</div>
		</div>
		<div class="bottom-div" v-if="bottom_div">
			<button class="back-bottom" @click="togglepages">Back</button>
			<button
				class="submit-signup signup-page2"
				type="submit"
				data-step="username-and-password"
			>
				Sign Up
			</button>
		</div>
	</div>
</template>

<script>
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
		};
	},
	methods: {
		handleSubmit() {
			if (!this.email) {
				this.error_email = true;
				this.error_email_message = 'invalid email';
			} else {
				this.page1 = !this.page1;
				this.page2 = !this.page2;
				this.bottom_div = !this.bottom_div;
				this.error_email = false;
			}
		},
		togglepages() {
			this.page1 = !this.page1;
			this.page2 = !this.page2;
			this.bottom_div = !this.bottom_div;
		},
	},
	components: {},
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
	width: 70rem;
	height: 100%;
	overflow: hidden;
}
.back-image {
	background-image: url('../../../img/bck.png');
	min-height: 100%;
	width: 12rem;
	float: left;
	/* background-position: center; */
	background-repeat: no-repeat;
	background-size: cover;
}
.sec-largest-div {
	/* align-self: center; */
	padding: 24px;
	overflow: hidden;
}
.user-agreement {
	margin-bottom: 48px;
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
}

/* class of log in with google and log in with apple */
.sign-ag {
	font-size: 14px;
	font-family: IBMPlexSans, sans-serif;
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
	padding: 12px 28px;
	width: 60%;
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
.email-field input {
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
.animation-email {
	width: 55%;
}
.email-field .animation-email {
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
	outline: none;
	/* justify-content: space-between; */
}
.email-field input:focus ~ .animation-email,
.email-field input:hover ~ .animation-email,
.email-field input:active ~ .animation-email,
.email-field ~ .animation-email {
	transform: translateX(0.8px) translateY(-10px);
	font-size: 9px;
	padding: 12px 0px;
	padding-right: 36px;
	border-radius: 4px;
	border-color: #24a0ed;
}
.animation-email::after {
	content: '\2713';
	display: inline-block;
	color: #24a0ed;
	right: 2px;
	top: 18.5px;
	position: absolute;
	display: block;
	transition: all 0.2s ease-in-out;
	/* display: none; */
}
.error-email-msg {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	margin-top: 4px;
	max-height: 1000px;
	opacity: 1;
	color: #ea0027;
	transition: all 0.2s ease-in-out;
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
	align-self: stretch;
	/* display: flex; */
	flex-direction: column;
	height: 100%;
	position: relative;
	padding: 24px;
	/* display: none; */
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
