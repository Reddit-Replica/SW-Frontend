<template>
	<div
		id="base-user-data-moderation-spam-spammedBy"
		v-if="moderatorFlag"
		class="post-tooltip"
	>
		<i class="fa-solid fa-shield" style="color: #46d160"></i>
	</div>
	<div
		id="base-user-data-moderation-spam-spammedBy"
		v-if="moderationSpamHandler"
		class="post-tooltip"
	>
		<i class="fa-regular fa-calendar-xmark" style="color: #ff585b"></i>
		<span
			class="post-tooltiptext"
			id="base-user-post-data-moderation-spam-spammedBy-tool-tip"
			>Spammed by {{ moderation.spam.spammedBy }} at
			{{ moderation.spam.spammedDate }}</span
		>
	</div>
	<div
		id="base-user-data-moderation-lock-lockedBy"
		v-if="moderationLockHandler"
		class="post-tooltip"
	>
		<i
			id="base-user-data-moderation-lock-lockedBy-icon"
			class="fa-solid fa-lock"
			style="color: #ffd635"
		></i>
		<span
			id="base-user-data-moderation-lock-lockedBy-tool-tip"
			class="post-tooltiptext"
			>Comments are locked</span
		>
	</div>
	<div
		id="base-user-data-moderation-pin-pinnedBy"
		v-if="pinnedPost"
		class="post-tooltip"
	>
		<i class="fa-solid fa-thumbtack" style="color: #46d160"></i>
		<span class="post-tooltiptext">post are Pinned</span>
	</div>
	<div
		id="base-user-data-moderation-remove-removedBy"
		v-if="moderationRemoveHandler"
		class="post-tooltip"
	>
		<i
			id="base-user-data-moderation-icon-removedBy"
			style="color: #ff585b"
			class="fa-solid fa-ban"
		></i>
		<span
			class="post-tooltiptext"
			id="base-user-data-moderation-remove-removedBy-tool-tip"
			>Removed by {{ moderation.remove.removedBy }} at
			{{ moderation.remove.removedDate }}</span
		>
	</div>
	<div
		id="base-user-data-moderation-approve-approveBy"
		v-if="moderationApproveHandler"
		class="post-tooltip"
	>
		<i
			id="base-user-data-moderation-approve-approvedBy-icon"
			class="fa-solid fa-check"
			style="color: #46d160"
		></i>
		<span
			class="post-tooltiptext"
			id="base-user-data-moderation-approve-approvedBy-tool-tip"
			>Approved by
			{{ moderation.approve.approvedBy }}
			at
			{{ moderation.approve.approvedDate }}</span
		>
	</div>
</template>
<script>
export default {
	props: {
		moderation: {
			type: Object,
			required: true,
		},
		pinnedPost: {
			type: Boolean,
		},
		moderatorFlag: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		moderationSpamHandler() {
			return (
				this.moderation != null &&
				this.moderation.spam != null &&
				this.moderation.spam.spammedBy != null
			);
		},
		moderationLockHandler() {
			return (
				this.moderation != null &&
				this.moderation.lock != null &&
				this.moderation.lock
			);
		},
		moderationRemoveHandler() {
			return (
				this.moderation != null &&
				this.moderation.remove != null &&
				this.moderation.remove.removedBy != null
			);
		},
		moderationApproveHandler() {
			return (
				this.moderation != null &&
				this.moderation.approve != null &&
				this.moderation.approve.approvedBy != null
			);
		},
	},
};
</script>
<style scoped>
/* tool tip  */
.post-tooltip {
	position: relative;
	display: inline-block;
	/* border-bottom: 1px dotted black; */
}

.post-tooltip .post-tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 10;
	bottom: 150%;
	left: 50%;
	margin-left: -60px;
}

.post-tooltip .post-tooltiptext::after {
	content: '';
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}

.post-tooltip:hover .post-tooltiptext {
	visibility: visible;
}
/* */
</style>
