<template>
	<div>
		<clean-queue :title="'Spam'"></clean-queue>
		<base-post></base-post>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import BasePost from '../../components/moderation/BasePost.vue';
export default {
	components: { CleanQueue, BasePost },
};
</script>

<style></style>
