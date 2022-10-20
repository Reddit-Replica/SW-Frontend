<template>
	<profile-nav :user-name="getUserName" />
	<base-container>
		<div class="profilebox">
			<createpost-bar />
			<!-- <h1>user page</h1> -->
			<profile-card :user-name="getUserName" />
		</div>
	</base-container>
</template>

<script>
import ProfileCard from '../../components/UserComponents/ProfileCard.vue';
import BaseContainer from '../../components/BaseComponents/BaseContainer.vue';
import profileNav from '../../components/UserComponents/ProfileNav.vue';
import createpostBar from '../../components/bars/CreatepostBar.vue';
export default {
	props: {
		// userName: {
		// 	type: String,
		// 	default: 'Abdelhameed',
		// },
	},
	created() {
		document.title = this.$store.state.userName + ' - Reddit';
	},
	components: {
		ProfileCard,
		BaseContainer,
		profileNav,
		createpostBar,
	},
	computed: {
		getUserName() {
			console.log(this.$store.state.userName);
			return this.$store.getters.getUserName;
		},
	},
};
</script>

<style scoped>
.profilebox {
	display: flex;
	justify-content: center;
	margin: 0 auto;
	box-sizing: border-box;
}

.content {
	width: 640px;
	margin: 0px 0px 0px 15px;
	margin-top: 1px;
}
@media (max-width: 960px) {
	.content {
		width: 100%;
	}
	.profilebox {
		display: block;
	}
}
body {
	min-width: 100%;
}
</style>
