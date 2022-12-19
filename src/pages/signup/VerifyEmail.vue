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
	async created() {
		try {
			await this.$store.dispatch('verifyEmail', actionPayload);
			const actionPayload = {
				id: this.id,
				token: this.token,
				baseurl: this.$baseurl,
			};

			this.$router.replace('/main');
		} catch (err) {
			this.error = err;
		}
	},
};
</script>
