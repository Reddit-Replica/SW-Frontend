<template>
	<div class="content">
		<li class="message-button">
			<router-link to="/message/compose">Send A Private Message</router-link>
		</li>
		<li class="message-button">
			<router-link to="/message/inbox">Inbox</router-link>
		</li>
		<li class="message-button">
			<router-link to="/message/sent">Sent</router-link>
		</li>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped>
.content {
	background-color: var(--color-blue-2);
	margin: 0;
	padding: 0;
	border-bottom: none;
	display: flex;
	flex-direction: row;
	align-items: center;
}
/* .message-button:first-of-type {
	margin-left: 13rem;
} */
.message-button {
	font-size: 1.5rem;
	padding: 0;
	display: inline;
	font-weight: bold;
	margin: 0px 3px;
	display: list-item;
	text-align: -webkit-match-parent;
	cursor: pointer;
	list-style-type: none;
	white-space: nowrap;
	display: inline-block;
	margin-top: 5px;
	vertical-align: bottom;
	list-style: none;
	margin: 2rem;
	font-weight: bold;
}
a {
	color: var(--color-grey-light-3);
	font-family: 'IBM Plex Sans', Arial, sans-serif;
}
a.router-link-active {
	color: var(--color-grey-light-4);
}
.message-button:first-of-type {
	margin-left: 12rem;
}
/* 788 */
@media only screen and (max-width: 49.25em) {
	.message-button:first-of-type {
		margin-left: 2rem;
	}
}
</style>
