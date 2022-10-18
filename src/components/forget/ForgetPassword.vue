<template>
	<div class="container">
		<button class="x-button">
			<div class="x" />
		</button>
		<!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Times_symbol.svg/640px-Times_symbol.svg.png" alt="My Happy SVG" width="45" height="45" /> -->
		<div class="box">
			<form>
				<h1>Reset your password</h1>
				<p class="description">
					Tell us the username and email address associated with your Reddit
					account, and we’ll send you an email with a link to reset your
					password.
				</p>
				<div class="input-field">
					<input type="text" required="required" />
					<span class="span-input"> Username</span>
				</div>
				<p class="invalid">Please enter a username to continue</p>
				<div class="input-field">
					<input type="email" required="required" />
					<span class="span-input"> Email</span>
				</div>
				<p class="invalid">Please enter an email address to continue</p>
				<label class="label-class"> Forget your </label
				><a class="link user-name">username</a>
				<label class="question-mark"> ?</label>
				<base-button
					button-text="Reset password"
					:disable-button="buttonIsactive"
					class="button-class"
				>
				</base-button>

				<div class="bottomText">
					<label>
						Don't have an email or need assistance logging in?
						<a class="link">Get Help </a></label
					>
				</div>
			</form>
			<div class="">
				<a class="link">Sign Up </a>
				<span class="linkSeparator">•</span>
				<a class="link">Log In </a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonIsactive: true,
		};
	},
	methods: {},
	components: {},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
	/* font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #1a1a1b;
    font-family: IBMPlexSans,sans-serif;
    position: relative;*/
}
div {
	display: block;
}

.question-mark {
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	color: #1a1a1b;
	font-family: 'IBM Plex Sans', sans-serif;
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
.user-name {
	text-transform: lowercase;
}
.input-field {
	position: relative;
}
.input-field input {
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
	/*overflow: visible;
	background: rgb(246, 247, 248);
	background-color: #f6f7f8;
	padding: 22px 12px 10px;
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	
	font-family: IBMPlexSans, sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	height: 46px;
	padding-left: 16px;
	transition: all 0.2s ease-in-out;
	padding-right: 36px;*/
}

.input-field .span-input {
	position: absolute;
	left: 0;
	padding: 15px 20px 20px 15px;
	pointer-events: none;
	font-size: 14px;
	font-family: 'IBM Plex Sans', sans-serif;
	transition: all 0.2s ease-in-out;
}
.input-field input:valid ~ .span-input,
.input-field input:focus ~ .span-input,
.input-field input:hover ~ .span-input {
	transform: translateX(3px) translateY(-10px);
	font-size: 10px;
}

.input-field input:active {
	border: 0.5px solid #0079d3;
}
/*.input-field input:focus {
	border: 0.5px solid rgba(0, 0, 0, 0.2);
}*/
.label-class {
	font-size: 12px;
	font-family: 'Noto Sans', sans-serif;
	margin: 16px 2px 0px 0px;
	font-weight: 400;
	line-height: 16px;
	padding: 0px 1px 0px 0px;
}
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
.container {
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
	/* display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: hidden;
    min-height: 100vh;*/
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

.linkSeparator {
	color: #0079d3;
	margin: 0 4px;
}
</style>
