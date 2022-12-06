<template>
	<div class="moderators">
		<div class="header">Moderators</div>
		<div class="body">
			<base-button
				><font-awesome-icon icon="fa-regular fa-envelope" class="icon" />Message
				the mods</base-button
			>
			<p v-for="moderator in moderators" :key="moderator.username">
				u/{{ moderator.username }}
			</p>
			<p>
				<router-link :to="'/r/' + subredditName + '/about/moderators'"
					>VIEW ALL MODERATORS</router-link
				>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		moderators: {
			type: Array,
			required: true,
		},
	},
};
</script>
<style scoped>
.moderators {
	border-radius: 5px;
	margin: 22px 0;
	overflow: hidden;
	background-color: white;
}
.header {
	height: 34px;
	background-color: var(--color-green-2);
	color: white;
	font-size: 14px;
	font-weight: 600;
	padding: 12px;
	display: flex;
	align-items: center;
}
button {
	border: 1px solid var(--color-pink);
	font-size: 15px;
	width: 100%;
	height: 32px;
	background-color: white;
	font-weight: 600;
	color: var(--color-pink);
	margin-bottom: 10px;
}
.body {
	color: var(--color-pink);
	padding: 12px 12px 6px 12px;
	font-size: 12px;
}
.icon {
	margin-right: 5px;
}
a {
	display: block;
	color: var(--color-pink);
	text-align: right;
	font-weight: 600;
}
</style>
