<template>
	<div>
		<section>
			<h2>Page not found</h2>
			<p>the page you requested does not exist</p>
		</section>
		<the-recaptcha @verify="verifyMethod"></the-recaptcha>
	</div>
</template>

<script>
import TheRecaptcha from '../components/auth/TheRecaptcha.vue';
export default {
	components: { TheRecaptcha },
	methods: {
		verifyMethod() {
			console.log('verified1');
		},
	},
};
</script>
