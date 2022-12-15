<template>
	<div>
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
					<new-base-post
						:spam="UnmoderatedPosts"
						:index="value.id"
					></new-base-post>
				</div>
			</div>
			<div v-if="comments">
				<div v-for="value in EditedComments" :key="value.id">
					<new-base-post
						:spam="EditedComments"
						:index="value.id"
					></new-base-post>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import QueueBar from '../../components/moderation/QueueBar.vue';
import NewBasePost from '../../components/moderation/NewBasePost.vue';
export default {
	data() {
		return {
			posts: true,
			comments: false,
		};
	},
	components: { CleanQueue, QueueBar, NewBasePost },
	computed: {
		subredditName() {
			return this.$route.params.subredditName;
		},
		EditedPosts() {
			return this.$store.getters['moderation/EditedPosts'];
		},
		EditedComments() {
			return this.$store.getters['moderation/EditedComments'];
		},
	},
	beforeMount() {
		this.EditPosts();
		this.EditComments();
	},
	methods: {
		getdata(arr) {
			this.comments = arr[0];
			this.posts = arr[1];
			console.log(arr[0]);
			console.log(arr[1]);
		},
		async EditPosts() {
			try {
				await this.$store.dispatch('moderation/EditedPosts', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
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
