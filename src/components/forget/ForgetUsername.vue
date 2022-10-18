<template>
	<div class="container">
		<button class="x-button">
			<div class="x" />
		</button>
		<div class="box">
			<form>
				<h1>Recover your username</h1>
				<p class="description">
					Tell us the email address associated with your Reddit account, and
					we’ll send you an email with your username.
				</p>
				<div class="input-field">
					<input type="text" required="required" />
					<span class="span-input">Email Address</span>
				</div>
				<p class="invalid">Please enter an email address to continue</p>
				<base-button
					button-text="Email Me"
					:disable-button="buttonIsactive"
					class="button-class"
				/>

				<div class="bottomText">
					Don't have an email or need assistance logging in?
					<a class="link">Get Help </a>
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
.link {
	color: #0079d3;
	text-decoration: underline;
	font-family: IBMPlexSans, sans-serif;
	cursor: pointer;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.5px;
	text-transform: capitalize;
}
.input-field {
	position: relative;
}
.input-field input {
	border-radius: 100px;
	font-family: IBMPlexSans, sans-serif;
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
	font-family: IBMPlexSans, sans-serif;
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
.button-class {
	margin: 16px 0px 0px;
	color: #ffffff;
	padding: 5px 10px;
	/*background: linear-gradient(89.57deg, #ec0623, #ff8717);*/
	background: var(--button-color);
	border-radius: 24px;
	font-size: 16px;
	height: 40px;
	line-height: 20px;
	width: 100%;
}
.container {
	background-color: white;
	border-radius: 10px;
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
	min-width: 260px;
	max-width: 440px;
}
h1 {
	color: #1a1a1b;
	margin: 24px 0px 8px 0px;
	font-size: 20px;
	font-family: IBMPlexSans, sans-serif;
	font-weight: 500;
	line-height: 24px;
}

.description {
	color: #1a1a1b;
	margin: 8px 0px 8px;
	font-size: 12px;
	font-family: Noto Sans, sans-serif;
	font-weight: 400;
	line-height: 21px;
	width: 100%;
}
.bottomText {
	font-family: Noto Sans, sans-serif;
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
