<template>
	<div class="big-container">
		<div class="left-box">
			<div class="art"></div>
		</div>
		<div class="right-box">
			<div class="box">
				<form @submit.prevent="handleSubmit">
					<div class="snoo-icon"></div>
					<h1>Reset your password</h1>
					<p class="description">
						Choose a new password here, then log in to your account.
					</p>
					<div class="input-box">
						<input
							id="password"
							type="password"
							required="required"
							v-model="password"
							:class="
								!showSignpassword
									? ''
									: !checkedPassword || error
									? 'red-border'
									: 'blue-border'
							"
						/>
						<span class="span-input"> New password</span>
						<span
							v-if="showSignpassword"
							:class="
								!checkedPassword || error ? 'wrong-check' : 'correct-check'
							"
						></span>
					</div>
					<p 
					id="invalidPassword"
					class="invalid" v-if="invalidPassword">
						Password must be at least 8 characters long
					</p>
					<div class="separate"></div>
					<div class="input-box">
						<input
							id="password-verify"
							type="password"
							required="required"
							v-model="passwordVerify"
							:class="
								!showSignpasswordverify
									? ''
									: !checkedPasswordverify || error
									? 'red-border'
									: 'blue-border'
							"
						/>
						<span class="span-input"> verify password</span>
						<span
							v-if="showSignpasswordverify"
							:class="
								!checkedPasswordverify || error
									? 'wrong-check'
									: 'correct-check'
							"
						></span>
					</div>
					<p id="invalidPasswordverify" class="invalid" v-if="invalidPasswordverify">
						Password must match
					</p>

					<label class="check-box">
						<input type="checkbox" v-model="checked" />
						Changing your password logs you out of all browsers on your
						device(s). Checking this box also logs you out of all apps you have
						authorized.
					</label>

					<div>
						<base-button
							button-text="Set password"
							:disable-button="buttonIsactive"
							class="button-class"
						>
						</base-button>
					</div>
					<p id="success" class="valid" v-if="success">password reset successfully</p>
					<p id="error" class="invalid" v-if="!success">{{ error }}</p>
				</form>
				<div class="end">
					<router-link to="/login" class="link">Log in</router-link>
					<span class="linkSeparator">•</span>
					<router-link to="/signup" class="link">Sign Up</router-link>
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
			showSignpassword: false,
			showSignpasswordverify: false,
			checkedPassword: false,
			checkedPasswordverify: false,
			invalidPassword: false,
			invalidPasswordverify: false,
			password: '',
			passwordVerify: '',
			id: this.$route.params.id,
			token: this.$route.params.token,
			checked: false,
			success: null,
			error: null,
		};
	},
	methods: {
		// @vuese
		// validate Password
// @arg The argument is a string value representing password 
		validatePassword(value) {
			if (value.length < 8) {
				//
				this.invalidPassword = true;
				console.log('hello');
				this.checkedPassword = false;
				this.showSignpassword = true;
			} else {
				this.showSignpassword = true;
				this.checkedPassword = true;
				this.invalidPassword = false;
			}
		},
		// @vuese
		// validate Password Verify
		// @arg The argument is a string value representing password verify
		validatepasswordVerify(value) {
			if (value != this.password) {
				//
				this.invalidPasswordverify = true;
				console.log('hello');
				this.checkedPasswordverify = false;
				this.showSignpasswordverify = true;
			} else {
				this.showSignpasswordverify = true;
				this.checkedPasswordverify = true;
				this.invalidPasswordverify = false;
			}
		},
		// @vuese
		// validate form submission
		async handleSubmit() {
			if (this.checkedPasswordverify && this.checkedPassword) {
				const actionPayload = {
					password: this.password,
					passwordVerify: this.passwordVerify,
					id: this.id,
					token: this.token,
					baseurl: this.$baseurl,
				};

				try {
					await this.$store.dispatch('resethandle', actionPayload);
					this.success = true;
				} catch (err) {
					this.error = err;
					this.success = false;
				}
			} else {
				this.error = 'make sure to fill al things';
				this.success = false;
			}
		},
	},

	watch: {
		// @vuese
		// watch password
		password(value) {
			this.password = value;
			this.validatePassword(value);
		},
		// @vuese
		// watch password verify
		passwordVerify(value) {
			this.passwordVerify = value;
			this.validatepasswordVerify(value);
		},
	},

	components: {},
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
	margin-top: 5px;
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

.input-box input:hover ~ .span-input::after,
.input-box input:focus ~ .span-input::after,
.input-box input:valid ~ .span-input::after {
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	vertical-align: top;
	margin-left: 7px;
	content: '';
	color: #24a0ed;
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
	font-family: IBMPlexSans, sans-serif;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.5px;
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
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
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
.valid {
	margin: 0;
	margin-bottom: 0.5rem;
	padding: 0;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	font-family: 'IBM Plex Sans', sans-serif;
	opacity: 1;
	color: #0079d3;
	transition: all 0.2s ease-in-out;
}

.linkSeparator {
	color: #0079d3;
	margin: 0 4px;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
}
.end {
	margin-top: 10px;
}
.check-box {
	font-family: 'Noto Sans', sans-serif;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	display: block;
	min-height: 20px;
	padding-left: 5px;
	margin-top: 2rem;
	margin-right: 0;
	margin-bottom: 20px;
	font-weight: 400;
	cursor: pointer;
}
.separate {
	margin-top: 2rem;
}
.input-box .red-border {
	border: 0.5px solid #ea0027;
}
.input-box .blue-border {
	border: 0.5px solid #0079d3;
}
</style>
