<template>
	<div id="google-login" @click="handlesign" class="log-google log-ag">
		<div><img src="../../../img/Google__G__Logo.svg.png" alt="" /></div>
		<div class="cont">continue with Google</div>
	</div>
</template>
<script>
export default {
	methods: {
		//@vuese
		//Login And SignUp with Google
		async handlesign() {
			try {
				const googleUser = await this.$gAuth.signIn();
				this.$store.state.userName = googleUser.lv.Af;
				this.$store.state.id_token = googleUser.Bc.id_token;
				console.log(this.$store.state.id_token);
				console.log(this.$store.getters.getUserName);
				const actionPayload = {
					type: 'google',
					id_token: googleUser.Bc.id_token,
					baseurl: this.$baseurl,
				};
				try {
					await this.$store.dispatch('googleSign', actionPayload);
					this.$router.replace('/main');
				} catch (err) {
					this.error = err;
				}
			} catch (error) {
				console.log(error);
			}
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
	border-color: darkgrey;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;
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
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
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
