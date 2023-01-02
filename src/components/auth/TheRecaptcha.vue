<template>
	<div>
		<vue-recaptcha
			ref="recaptcha"
			@verify="verifyMethod"
			@expired="expiredMethod"
			@render="renderMethod"
			@error="errorMethod"
			sitekey="6Lfv_7oiAAAAAFBYyztH9f4OKtEzwBNil-YteGVN"
			class="g-recaptcha"
		>
		</vue-recaptcha>
	</div>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
export default {
	components: { VueRecaptcha },
	emits: ['verified'],
	methods: {
		verifyMethod() {
			// //console.log(
			// 	'verified'
			// ); /* this will called after robot verification success */
			this.$emit('verified');
		},
		expiredMethod() {
			// //console.log('expired'); /* will be called when verification Expired */
		},
		renderMethod() {
			// //console.log(
			// 	'rendered'
			// ); /*will be called when the reCaptcha was Rendered on page */
		},
		errorMethod() {
			// //console.log('error'); /* will called when an error occurred */
		},
	},
};
</script>
<style scoped>
.g-recaptcha {
	transform: scale(0.77); /* this the way to resize the reCaptcha  */
	-webkit-transform: scale(0.77); /*this the way to resize the reCaptcha*/
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
}
</style>
