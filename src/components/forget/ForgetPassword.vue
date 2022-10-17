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
				<input type="text" placeholder="Username" />
				<p class="invalid">Please enter a username to continue</p>
				<input type="email" placeholder="Email " />
				<p class="invalid">Please enter an email address to continue</p>
				<base-button button-text="Email Me" class="emailMe" />

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
		return {};
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
input {
	overflow: visible;
	background: rgb(246, 247, 248);
	background-color: #f6f7f8;
	padding: 22px 12px 10px;
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 100px;
	font-family: IBMPlexSans, sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	height: 46px;
	padding-left: 16px;
	padding-right: 36px;
}
input:hover,
input:focus {
	border-color: rgba(0, 0, 0, 0.2);
}
.emailMe {
	margin: 20px auto;
	color: #ffffff;
	padding: 5px 10px;
	background: linear-gradient(89.57deg, #ec0623, #ff8717);
	border-radius: 24px;
	font-size: 16px;
	height: 48px;
	line-height: 20px;
	text-transform: capitalize;
	width: 100%;
}
.container {
	background-color: white;
	border: 0.1px solid #00000066;
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
	padding: 20px;
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

	font-size: 14px;
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
