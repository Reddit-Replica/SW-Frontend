<template>
	<div>
		<base-user-post
			v-for="(postData, index) in getUserPostData.postData.children"
			:key="index"
			:post-data="postData"
		></base-user-post>
	</div>
</template>

<script>
import BaseUserPost from '../../../components/UserComponents/BaseUserComponents/BaseUserPost.vue';
export default {
	components: {
		BaseUserPost,
	},
	data() {
		return {
			counter: 0,
			upClicked: false,
			downClicked: false,
		};
	},
	async created() {
		this.loading = true;
		const requestStatus = await this.RequestUserPostData();
		this.loading = false;
		if (requestStatus == 200) console.log('Successfully fetched data');
		else if (requestStatus == 404) console.log('not found');
		else if (requestStatus == 500) console.log(' internal server error');
	},
	computed: {
		getUserPostData() {
			// console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserPostData'];
		},
	},
	methods: {
		async RequestUserPostData() {
			try {
				await this.$store.dispatch('user/getUserPostData', {
					baseurl: this.$baseurl,
					userName: this.$route.params.userName,
					params: {
						sort: 'new',
						time: 'all',
						before: '',
						after: '',
						limit: '25',
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>
