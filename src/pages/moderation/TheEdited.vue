<template>
	<div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
		<queue-bar :title="'Edited'" @getarr="getdata"></queue-bar>
		<div
			v-if="
				EditedPosts &&
				EditedPosts.length == 0 &&
				EditedComments &&
				EditedComments.length == 0
			"
		>
			<clean-queue></clean-queue>
		</div>
		<div v-else>
			<div v-if="posts">
				<div v-for="value in EditedPosts" :key="value.id">
					<new-base-post :spam="value" :index="value.id"></new-base-post>
				</div>
			</div>
			<div v-if="comments">
				<div v-for="value in EditedComments" :key="value.id">
					<new-base-post :spam="value" :index="value.id"></new-base-post>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import QueueBar from '../../components/moderation/QueueBar.vue';
import NewBasePost from '../../components/moderation/NewBasePost.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	data() {
		return {
			posts: true,
			comments: false,
			loading: false,
		};
	},
	components: { CleanQueue, QueueBar, NewBasePost, TheSpinner },
	computed: {
		subredditName() {
			return this.$route.params.subredditName;
		},
		EditedPosts() {
			// //console.log(this.$store.getters['moderation/EditedPosts']);
			return this.$store.getters['moderation/EditedPosts'];
		},
		EditedComments() {
			//console.log(this.$store.getters['moderation/EditedComments']);
			return this.$store.getters['moderation/EditedComments'];
		},
	},
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			await this.EditPosts();
			await this.EditComments();
		}
		this.loading = false;
	},
	methods: {
		getdata(val) {
			//console.log(val);
			if (val == 'Posts') {
				this.comments == false;
				this.posts == true;
			} else {
				this.comments == true;
				this.posts == false;
			}
		},
		async EditPosts() {
			try {
				await this.$store.dispatch('moderation/EditedPosts', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					sort: 'new',
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async EditComments() {
			try {
				await this.$store.dispatch('moderation/EditedComments', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style></style>
