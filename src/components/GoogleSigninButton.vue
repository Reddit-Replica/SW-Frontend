<template>
	<button @click="handlesign">
		<div><img src="../../img/Google__G__Logo.svg.png" alt="" /></div>
		<div>continue with Google</div>
	</button>
</template>
<script>
export default {
	methods: {
		async handlesign() {
			try {
				const googleUser = await this.$gAuth.signIn();
				this.$store.state.userName = googleUser.lv.Af;
				this.$store.state.access_token = googleUser.Bc.access_token;
				console.log(this.$store.state.access_token);
				console.log(this.$store.getters.getUserName);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
<style scoped>
button {
	padding: 2.2px;
}
img {
	width: 22px;
	height: 22px;
}
div:first-of-type {
	background-color: white;
	border-radius: 5px;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 50px;
}
div:last-of-type {
	margin: 0px 20px 0px 20px;
}
</style>
