<template>
	<div class="Abd">
		<div class="largest-div">
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

				<form class="signing-up" @submit.prevent="handleSubmit">
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
						<input
							id="signup-email"
							class="email-text"
							type="text"
							v-model="email"
							name="email"
							required
							placeholder="
          Email"
						/>
					</fieldset>

					<fieldset class="submit-signup-field">
						<button class="submit-signup continue-button" type="submit">
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

		<div class="all-div">
			<div class="div-1">
				<h1>Choose your username</h1>
				<p class="description">
					Your username is how other community members will see you. This name
					will be used to credit you for things you share on Reddit. What should
					we call you?
				</p>
			</div>

			<div class="div-2">
				<form @submit.prevent="handleSubmit">
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
		<div class="bottom-div">
			<a href="#" class="back-bottom" data-step="username-and-password">Back</a>
			<button
				class="signup-button"
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
			user: {
				email: '',
				username: '',
				password: '',
			},
			test: 'BEFORE SUBMIT',
		};
	},
	methods: {
		handleSubmit() {
			let user = new user({
				email: this.email,
				username: this.username,
				password: this.password,
			});
			this.test = 'AFTER SUBMIT';
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
	margin: 0;
	padding: 0;
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
	width: 50%;
	height: 100%;
	overflow: hidden;
}
.back-image {
	background-image: url('https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png');
	min-height: 100%;
	width: 20%;
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

.email-field {
	position: relative;
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

.field-pass-usr,
.email-field {
	position: relative;
	margin: 10px 0px;
}
.usr-pass-text,
.email-text {
	width: 60%;
	transition: all 0.2s ease-in-out;
	height: 48px;
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
	display: none;
}

.bottom-div {
	background-color: #fcfcfb;
	border-top: 1px solid hsla(195, 2%, 65%, 0.36);
	padding: 8px 16px;
	/* display: flex; */
	justify-content: space-between;
	align-items: center;
	min-height: 55px;
	position: absolute;
	bottom: 0px;
	width: 96%;
	display: none;
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

/* fieldset {
        border: none;
        margin: 10px 0;
        padding: 0;
        position: relative;

    } */
.submit-signup {
	font-size: 14px;
	font-weight: 600;
	font-family: IBMPlexSans, sans-serif;
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
.submit-signup {
	width: 60%;
}
</style>
