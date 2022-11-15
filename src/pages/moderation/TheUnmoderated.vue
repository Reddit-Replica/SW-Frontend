<template>
	<div>
		<clean-queue :title="'Unmoderated'"></clean-queue>
	</div>
</template>

<script>
import CleanQueue from '../../components/moderation/CleanQueue.vue';
export default {
	components: { CleanQueue },
};
</script>

<style></style>
