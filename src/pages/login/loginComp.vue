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
				<div class="login-google-apple">
					<GoogleSigninButton id="google-login" class="log-google log-ag" />
					<div class="page-divider-comp">
						<span class="page-divider-comp-line"></span>
						<span class="page-divider-comp-text">or</span>
						<span class="page-divider-comp-line"></span>
					</div>
				</div>
				<div class="input-box usr-pass-div">
					<input type="text" required="required" v-model="username" />
					<span class="span-input"> Username</span>
				</div>
				<!-- <p class="invalid">Please enter a username to continue</p> -->
				<div class="input-box usr-pass-div">
					<input type="password" required="required" v-model="password" />
					<span class="span-input"> Password</span>
				</div>
				<!-- <p class="invalid">Please enter an email address to continue</p> -->
				<div class="forgot-usr-pass-comp">
					<span>Forgot your</span> <a href="/forgetUsernamepage">username</a>
					<span> or </span> <a href="/forgetPasswordpage">password</a
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

				<li><router-link to="/signup">Sign Up </router-link></li>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonIsactive: true,
			username: '',
			password: '',
		};
	},
	methods: {},
	components: {},
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
</style>
