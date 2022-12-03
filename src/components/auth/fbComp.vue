<template>
	<div id="facebook-login" class="log-google log-ag" @click="facebookLogin()">
		<div><img src="../../../img/Facebook_f_logo_(2021).svg.png" alt="" /></div>
		<div class="cont">continue with Google</div>
	</div>
	<!-- <v-facebook-login
		v-model="model"
		@sdk-init="handleSdkInit"
	></v-facebook-login> -->
</template>
<script>
export default {
	data() {
		return {
			FB: {},
			model: {},
			scope: {},
			appId: '651769123026203',
		};
	},
	methods: {
		async facebookLogin() {},
		handleSdkInit({ FB, scope }) {
			this.FB = FB;
			this.scope = scope;
			console.log('saaf');
		},
		OnFacebookAuthSuccess(idToken) {
			console.log(idToken);
		},
		OnFacebookAuthFail(error) {
			console.log(error);
		},
	},
};
</script>
<style scoped>
img {
	width: 22px;
	height: 22px;
}
.log-google {
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-flow: row nowrap;
	justify-content: space-between;
	border-radius: 20px;
	border-color: rgba(0, 0, 0, 0.1);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	font-size: 12px;
	direction: ltr;
	font-synthesis: none;
	position: relative;
	letter-spacing: initial;
	width: 100%;
	height: 100%;
	min-width: 130px;
	max-width: 375px;
	min-height: 30px;
	max-height: 64px;
	text-align: center;
	user-select: none;
	white-space: nowrap;
	margin: 10px;
}
.log-google:hover {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
}

.log-ag {
	font-size: 14px;
	font-family: 'IBMPlexSans', sans-serif;
	letter-spacing: 0.5px;
	border: 1px solid #0079d3;
	border-radius: 4px;
	text-align: center;
	text-transform: uppercase;
	background-color: #fff;
	color: #1a1a1b;
	display: inline-flex;
	/* width: 60%; */
}
.cont {
	padding-left: 25px;
}
</style>
