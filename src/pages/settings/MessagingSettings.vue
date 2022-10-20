<template>
	<div class="box">
		<h3 class="heading-3">Chat & Messaging</h3>

		<div class="setting-box">
			<div class="setting-choice">Who can send you chat requests</div>
			<div>EVERYONE</div>
		</div>

		<div class="setting-box">
			<div>Who can send you private messages</div>
			<div>EVERYONE</div>
		</div>

		<div class="setting-box">
			<div>Invite someone to chat</div>
			<button>Copy link</button>
			<div>Copy a link to invite someone to a direct chatroom with you.</div>
		</div>

		<div class="setting-box">
			<div>Mark all as read</div>
			<button>Mark as Read</button>
			<div>Mark all conversations and invites as read.</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
	background-color: #fff;
	border-bottom: var(--line);
	width: auto;
	height: 57.5rem;
	padding: 3rem 0rem 0 10rem;
}
.heading-3 {
	color: var(--color-dark-1);
	margin-bottom: 3rem;
}
.setting-choice {
	color: var(--color-dark-1);
}
</style>
