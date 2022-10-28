<template>
	<section>
		<h2>Page not found</h2>
		<p>the page you requested does not exist</p>
	</section>
	<the-recaptcha @verify="verifyMethod"></the-recaptcha>
	<button @click="handlesign">hh</button>
</template>

<script>
import TheRecaptcha from '../components/TheRecaptcha.vue';
export default {
	components: { TheRecaptcha },
	methods: {
		verifyMethod() {
			console.log('verified1');
		},
		async handlesign() {
			try {
				const gg = await this.$gAuth.signIn();
				console.log(gg);
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style></style>
