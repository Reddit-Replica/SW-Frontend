<template>
	<div>
		<the-spinner style="position: absolute; left: 50%; top: 50%"></the-spinner>
	</div>
</template>

<script>
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	data() {
		return {
			loading: true,
			id: this.$route.params.id,
			token: this.$route.params.token,
		};
	},
	components: { TheSpinner },
	created() {
		this.verify();
		// try {
		// 	await this.verify();
		// } catch (err) {
		// 	this.error = err;
		// }
	},
	methods: {
		// @vuese
		// Request to Verify Email
		// @arg no argument
		async verify() {
			try {
				const actionPayload = {
					id: this.id,
					token: this.token,
					baseurl: this.$baseurl,
				};
				await this.$store.dispatch('verifyEmail', actionPayload);

				this.$router.push('/main');
			} catch (err) {
				this.error = err;
			}
		},
	},
};
</script>
