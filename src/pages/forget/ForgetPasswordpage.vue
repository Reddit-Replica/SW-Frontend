<template>
	<div class="big-container">
		<div class="left-box">
			<div class="art"></div>
		</div>
		<div class="right-box">
			<div class="box">
				<form @submit.prevent="test">
					<div class="snoo-icon"></div>
					<h1>Reset your password</h1>
					<p class="description">
						Tell us the username and email address associated with your Reddit
						account, and we’ll send you an email with a link to reset your
						password.
					</p>
					<div class="input-box">
						<input
							id="userName"
							type="text"
							required="required"
							v-model="userName"
							:class="invalidUsernamelength ? 'red-border' : ''"
						/>
						<span class="span-input"> Username</span>
						<span
							v-if="showSignuser"
							:class="checkedUser ? 'correct-check' : 'wrong-check'"
						></span>
					</div>
					<p class="invalid" v-if="inputIsempty">
						Please enter a username to continue
					</p>
					<p class="invalid" v-if="invalidUsernamelength">
						Username must be between 3 and 20 characters
					</p>
					<div class="separate"></div>
					<div class="input-box">
						<input
							id="emailAddress"
							type="email"
							required="required"
							v-model="emailAddress"
							:class="invalidEmail ? 'red-border' : ''"
						/>
						<span class="span-input"> Email Address</span>
						<span
							v-if="showSignemail"
							:class="checkedEmail ? 'correct-check' : 'wrong-check'"
						></span>
					</div>
					<p class="invalid" v-if="inputIsempty">
						Please enter an email address to continue
					</p>
					<p class="invalid" v-if="invalidEmail">
						Please enter an email address to continue
					</p>
					<div>
						<base-button
							button-text="Reset password"
							:disable-button="buttonIsactive"
							class="button-class"
							type="submit"
						>
						</base-button>
					</div>
					<div class="forgot-link">
						<router-link to="/forgetUsernamepage" class="link"
							>forgot username?</router-link
						>
					</div>
					<div class="bottomText">
						<label>
							Don't have an email or need assistance logging in?
							<a class="link">Get Help </a></label
						>
					</div>
				</form>
				<div class="">
					<router-link to="/login" class="link">Log in</router-link>
					<span class="linkSeparator">•</span>
					<router-link to="/signup" class="link">Sign Up</router-link>
					<button @click="test">test</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonIsactive: false,
			userName: '',
			emailAddress: '',
			invalidUsernamelength: false,
			invalidEmailtype: false,
			inputIsempty: false,
			showSignuser: false,
			checkedUser: true,
			showSignemail: false,
			checkedEmail: false,
			invalidEmail: false,
		};
	},
	methods: {
		validateUser(value) {
			if (value.length < 3 || value.length > 20) {
				//
				this.invalidUsernamelength = true;
				console.log('hello');
				this.checkedUser = false;
				this.showSignuser = true;
			} else {
				this.showSignuser = true;
				this.checkedUser = true;
				this.invalidUsernamelength = false;
			}
		},
		validatEmail(value) {
			if (/^[a-zA-Z0-9\\/*+;&%?#@!^()_="\-:~`|[\]{}\s]*$/i.test(value)) {
				this.invalidEmail = true;
				console.log('hello');
				this.checkedEmail = false;
				this.showSignemail = true;
			} else {
				this.showSignemail = true;
				this.checkedEmail = true;
				this.invalidEmail = false;
			}
		},
		handleSubmit() {
			fetch(this.$hostname + '/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					type: 'password',
					name: this.userName,
					email: this.emailAddress,
				}),
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				// .then((data) => {
				// 	console.log(data);
				// 	const res = [];
				// 	for (const id in data) {
				// 		res.push({ id: id, name: data[id].name, rating: data[id].rating });
				// 	}
				// 	this.results = res;
				// })
				.catch((error) => {
					console.log(error);
				});
		},
		test() {
			fetch(this.$hostname + '/users')
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},

	watch: {
		userName(value) {
			this.userName = value;
			this.validateUser(value);
		},
		emailAddress(value) {
			this.emailAddress = value;
			this.validatEmail(value);
		},
	},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

div {
	display: block;
}

.link {
	color: #0079d3;
	text-decoration: none;
	font-family: 'IBM Plex Sans', sans-serif;
	cursor: pointer;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}
.forgot-link {
	padding: 5px 0 0 0;
}

.input-box {
	position: relative;
}

.input-box input {
	transform: translateZ(0);
	outline: 0;
	width: 100%;
	-webkit-appearance: none;
	appearance: none;
	transition: all 0.2s ease-in-out;
	height: 48px;
	padding: 22px 12px 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	background-color: #fcfcfb;
	font-size: 14px;
	margin-top: 6px;
}

.input-box .span-input {
	position: absolute;
	left: 0;
	padding: 15px 20px 20px 15px;
	pointer-events: none;
	font-size: 10px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	line-height: 21px;
	transition: all 0.2s ease-in-out;
	text-transform: uppercase;
}
.input-box .span-input::after {
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	vertical-align: top;
	margin-left: 7px;
	content: '\2022';
	color: #24a0ed;
}
.input-box input:valid ~ .span-input,
.input-box input:focus ~ .span-input,
.input-box input:hover ~ .span-input {
	transform: translateX(0.5px) translateY(-10px);
	font-size: 10px;
}
.input-box input:hover ~ .span-input::after {
	display: none;
}
.input-box input:active {
	border: 0.5px solid #0079d3;
}
.input-box .correct-check {
	position: absolute;
	z-index: 1;
	right: 14px;
	top: 50%;
	height: 10px;
	width: 12px;
	background: url(https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg);
}
.input-box .wrong-check {
	position: absolute;
	right: 19px;
	top: 50%;
	height: 11px;
	width: 2px;
	background: url(https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg);
}
.input-box .red-border {
	border: 0.5px solid #ea0027;
}
/*.input-field input:focus {
	border: 0.5px solid rgba(0, 0, 0, 0.2);
}*/
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
.big-container {
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
.right-box {
	width: 100%;
	padding: 0px;
	margin: 0;
	/*padding: 36px;
	min-width: 150px;
	max-width: 440px;*/
}
.left-box {
	width: 156px;
	margin: 0;
}
.box {
	padding: 24px;
	min-width: 260px;
	max-width: 440px;
}
.art {
	background-image: url(https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png);
	height: 100vh;
	min-height: 430px;
	background-repeat: no-repeat;
	background-size: cover;
}
.snoo-icon {
	display: block;
	width: 40px;
	height: 40px;
	content: url(https://www.redditstatic.com/accountmanager/18e257d5fdea817c0f12cccf8867d930.svg);
	margin-bottom: 8px;
}
h1 {
	color: #1a1a1b;
	margin: 20px 1px 1px 1px;
	font-size: 18px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	line-height: 22px;
}

.description {
	margin: 0px 0px 10px;
	font-size: 14px;
	font-family: 'Noto Sans', sans-serif;
	font-weight: 400;
	line-height: 21px;
}
p {
	display: block;
	margin: 0;
	padding: 0;
	/*margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;*/
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
	margin: 0;
	margin-bottom: 0.5rem;
	padding: 0;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	font-family: 'IBM Plex Sans', sans-serif;
	opacity: 1;
	color: #ea0027;
	transition: all 0.2s ease-in-out;
}

.linkSeparator {
	color: #0079d3;
	margin: 0 4px;
}
.separate {
	margin-top: 2rem;
}
</style>
