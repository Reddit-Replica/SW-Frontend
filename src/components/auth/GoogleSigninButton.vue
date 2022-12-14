<template>
	<div id="google-login" @click="handlesign" class="log-google log-ag">
		<div><img src="../../../img/Google__G__Logo.svg.png" alt="" /></div>
		<div class="cont">continue with Google</div>
	</div>
</template>
<script>
// import { inject } from 'vue';
export default {
	// setup() {
	// 	const vue3 = inject('Vue3GoogleOauth');
	// 	return {
	// 		vue3,
	// 	};
	// },
	methods: {
		//@vuese
		//Login And SignUp with Google
		async handlesign() {
			try {
				const googleUser = await this.$gAuth.signIn();
				console.log(googleUser);
				this.$store.state.userName = googleUser.kv.KX;
				this.$store.state.id_token = googleUser.Bc.access_token;
				console.log(this.$store.getters.getUserName);
				const actionPayload = {
					type: 'google',
					id_token: googleUser.Bc.access_token,
					baseurl: this.$baseurl,
				};
				try {
					await this.$store.dispatch('googleSign', actionPayload);
					this.$router.push('/main');
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
	margin-left: 12px;
	background-color: white;
}
.log-google {
	align-items: center;
	display: inline-flex;
	height: 50px;
	width: 270px;
	margin: 8px 8px;
	padding: 4.2px;
	cursor: pointer;
	font-weight: 600;
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
	color: #0079d3;
	display: inline-flex;
	/* width: 60%; */
}

.cont {
	padding-left: 25px;
}
</style>
