<template>
	<div class="big-container">
		<div class="left-box">
			<div class="art"></div>
		</div>
		<div class="right-box">
			<div class="box">
				<form>
					<div class="snoo-icon"></div>
					<h1>Update your password</h1>
					<div class="input-box">
						<input
							id="userName"
							type="password"
							required="required"
							v-model="oldPassword"
							:class="
								!showSignuser
									? ''
									: fieldEmpty || shortPassword
									? 'red-border'
									: 'blue-border'
							"
						/>
						<span class="span-input"> OLD PASSWORD</span>
						<span
							id="showSignuser"
							v-if="showSignuser"
							:class="!checkedUser || error ? 'wrong-check' : 'correct-check'"
						></span>
					</div>
					<p class="invalid" v-if="fieldEmpty">This field is required</p>
					<p class="invalid" v-if="incorrectPassword">incorrect password</p>

					<div class="separate"></div>

					<div class="input-box">
						<input
							id="userName"
							type="password"
							required="required"
							v-model="newPassword"
							:class="
								!showSignuser
									? ''
									: shortPassword || shortPassword
									? 'red-border'
									: 'blue-border'
							"
						/>
						<span class="span-input"> NEW PASSWORD</span>
						<span
							id="showSignuser"
							v-if="showSignuser"
							:class="!checkedUser || error ? 'wrong-check' : 'correct-check'"
						></span>
					</div>
					<p class="invalid" v-if="shortPassword">
						Password must be at least 8 characters long
					</p>
					<p class="invalid" v-if="oldMatchNew">
						New and old passwords must not match
					</p>

					<div class="separate"></div>

					<div class="input-box">
						<input
							id="userName"
							type="password"
							required="required"
							v-model="confirmPassword"
							:class="
								!showSignuser
									? ''
									: dntMatch || shortPassword
									? 'red-border'
									: 'blue-border'
							"
						/>
						<span class="span-input"> CONFIRM PASSWORD</span>
						<span
							id="showSignuser"
							v-if="showSignuser"
							:class="!checkedUser || error ? 'wrong-check' : 'correct-check'"
						></span>
					</div>
					<p class="invalid" v-if="dntMatch">Password must match</p>

					<div class="separate"></div>
				</form>
				<div>
					<base-button
						id="reset-btn"
						button-text="Save"
						@click="savePassword"
						:class="!success ? 'button-class' : 'button-success'"
					>
					</base-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @vuese
// @it is forget password component
export default {
	emits: ['close'],
	data() {
		return {
			oldPassword: '',
			showSignuser: false,
			fieldEmpty: false,
			shortPassword: false,
			incorrectPassword: false,
			newPassword: '',
			confirmPassword: '',
		};
	},
	methods: {
		async changePassword() {
			this.changePasswordDialog = false;
			try {
				await this.$store.dispatch('setting/changePassword', {
					baseurl: this.$baseurl,
					currentPassword: this.oldPassword,
					newPassword: this.newPassword,
					confirmNewPassword: this.confirmPassword,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.$emit('close');
		},
		savePassword() {
			if (this.oldPassword == '') {
				this.fieldEmpty = true;
				this.incorrectPassword = false;
			} else if (this.oldPassword != localStorage.getItem('Password')) {
				console.log(localStorage.getItem('Password'));
				console.log(this.oldPassword);
				this.fieldEmpty = false;
				this.incorrectPassword = true;
			} else {
				this.fieldEmpty = false;
				this.incorrectPassword = false;
			}
			if (this.newPassword.length < 8) {
				this.shortPassword = true;
				this.oldMatchNew = false;
			} else if (this.newPassword == this.oldPassword) {
				this.shortPassword = false;
				this.oldMatchNew = true;
			} else {
				this.shortPassword = false;
				this.oldMatchNew = false;
			}
			if (this.confirmPassword == this.newPassword) {
				this.dntMatch = false;
			} else {
				this.dntMatch = true;
			}
			if (
				!this.shortPassword &&
				!this.dntMatch &&
				!this.incorrectPassword &&
				!this.oldMatchNew
			)
				this.changePassword();
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
.success {
	position: absolute;
	left: 40%;

	font-size: 2.5rem;
	color: white;
	z-index: 5;
	opacity: 1;
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
.input-box .blue-border {
	border: 0.5px solid #0079d3;
	border-color: #24a0ed;
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
	position: relative;
	width: 800px;
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
	min-height: 430px;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
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
.separate {
	margin-top: 2rem;
}
.button-success {
	color: #ffffff;
	background: var(--color-blue-2);
	/*cursor: ;*/
	pointer-events: none;
	color: transparent;
	position: relative;
	overflow: hidden;
	/*text-indent: -9999px;*/
	border-radius: 4px;
	text-align: center;
	min-height: 35px;
	max-width: 392px;
	width: auto;
	min-width: 155px;
	padding: 5px 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-height: 1000px;
	margin-top: 2rem;
	transition: color 0.01s ease-in, text-indent 0.25s ease-in,
		opacity 0.25s ease-in;
}
</style>
