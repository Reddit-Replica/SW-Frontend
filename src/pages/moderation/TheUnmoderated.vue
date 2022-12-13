<template>
	<div>
		<queue-bar :title="'Unmoderated'"></queue-bar>
		<clean-queue></clean-queue>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
import QueueBar from '../../components/moderation/QueueBar.vue';
export default {
	components: { CleanQueue, QueueBar },
};
</script>

<style></style>
