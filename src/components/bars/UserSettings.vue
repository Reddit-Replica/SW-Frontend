<template>
	<ul>
		<li>
			ِ<router-link
				to="/settings/account"
				:class="$route.path == '/settings' ? 'router-link-active' : ''"
				>Account</router-link
			>
		</li>
		<li><router-link to="/settings/profile">Profile</router-link></li>
		<li><router-link to="/settings/privacy">Safety & Privacy</router-link></li>
		<li><router-link to="/settings/feed">Feed Settings</router-link></li>
		<li><router-link to="/settings/emails">Email</router-link></li>
		<li>
			<router-link to="/settings/messaging">Chat & Messaging</router-link>
		</li>
	</ul>
</template>
<style scopde>
ul {
	list-style: none;
	padding: 0px 20px;
	margin: 0px;
	border-bottom: 1px solid #f0ecf4;
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
	color: #7c7c7c;
}
li:hover a {
	color: black;
}
li:has(a.router-link-active) {
	border-bottom: 3px solid var(--color-blue);
	color: black;
}
a.router-link-active {
	color: black;
}
</style>
