<template>
	<div>
		<div id="google-login" @click="handlesign" class="log-google log-ag">
			<div><img src="../../img/Google__G__Logo.svg.png" alt="" /></div>
			<div>continue with Google</div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
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
.log-google {
	align-items: center;
	justify-content: space-between;
	display: flex;
	height: 50px;
	width: 300px;
	margin: 8px 8px;
	padding: 4.2px;
	cursor: pointer;
	font-weight: 600;
}
.log-google:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
}
img {
	width: 22px;
	height: 22px;
	background-color: white;
}
</style>
