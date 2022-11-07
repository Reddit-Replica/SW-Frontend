<template>
	<ul class="ul-messages">
		<li>
			ِ<router-link to="/message/inbox" id="go-to-all-messages"
				>All</router-link
			>
		</li>
		<li>
			<router-link to="/message/unread" id="go-to-unread-messages"
				>Unread</router-link
			>
		</li>
		<li>
			<router-link to="/message/messages" id="go-to-messages-messages"
				>Messages</router-link
			>
		</li>
		<li>
			<router-link to="/message/selfreply" id="go-to-post-replies-messages"
				>Post Replies</router-link
			>
		</li>
		<li>
			<router-link to="/message/mentions" id="go-to-username-mentions"
				>Username Mentions</router-link
			>
		</li>
	</ul>
</template>
<style scoped>
ul {
	list-style: none;
	padding: 0px 20px;
	margin: 0px;
	border-bottom: 1px solid #f0ecf4;
	background-color: var(--color-blue-2);
}
li {
	display: inline-block;
	cursor: pointer;
	font-size: 14px;
	font-weight: 700;
	margin-right: 8px;
	padding: 15px 12px 12px;
}
a {
	color: var(--color-grey-light-3);
	font-family: 'IBM Plex Sans', Arial, sans-serif;
}
li:has(a.router-link-active) {
	border-bottom: 2px solid var(--color-grey-light-3);
}
li:hover {
	border-bottom: 2px solid var(--color-grey-light-3);
}
li:first-of-type {
	margin-left: 10rem;
}
/* 788 */
@media only screen and (max-width: 49.25em) {
	li:first-of-type {
		margin-left: 0.3rem;
	}
}
</style>
