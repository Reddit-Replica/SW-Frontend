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
					<!--LogIn with google and apple accounts -->

					<div class="login-google-apple">
						<div id="google-login" class="log-google log-ag">
							Continue with Google
						</div>
						<div id="apple-login" class="log-apple log-ag">
							Continue with Apple
						</div>

						<div class="page-divider">
							<span class="page-divider-line"></span>
							<span class="page-divider-text">or</span>
							<span class="page-divider-line"></span>
						</div>
					</div>

					<fieldset class="username-field field-pass-usr">
						<!--Group of UserName Element -->

						<input
							id="login-username"
							class="username-text usr-pass-text"
							type="text"
							v-model="username"
							name="username"
							required
							placeholder="
          Username"
						/>
						<div class="username-error-message"></div>
						<!--Error Message Shown here -->
					</fieldset>

					<fieldset class="password-field field-pass-usr">
						<!--Group of Password Element -->

						<input
							id="login-password"
							class="password-text usr-pass-text"
							type="password"
							v-model="password"
							name="password"
							required
							placeholder="
          Password
        "
						/>

						<div class="username-error-message"></div>
						<!--Error Message Shown here -->
					</fieldset>

					<button class="submit-login" type="submit">Log In</button>

					<div class="forgot-usr-pass">
						<span>Forgot your</span> <a href="/username">username</a>
						<span>or</span> <a href="/password">password</a><span>?</span>
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
export default {
	name: 'LogIn',
	data() {
		return {
			user: {
				username: '',
				password: '',
			},
			test: 'BEFORE SUBMIT',
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
	width: 50%;
	height: 100%;
	overflow: hidden;
}
.back-image {
	background-image: url('../../../img/bck.png');
	background-color: #0079d3;
	height: 100%;
	width: 20%;
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

.field-pass-usr {
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
.forgot-usr-pass,
.register-bottom {
	font-family: Noto Sans, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	margin-top: 8px;
	margin-bottom: 20px;
}
.submit-login,
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
	width: 60%;
	min-width: 155px;
}
.usr-pass-text {
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
</style>
