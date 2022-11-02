<template>
	<!-- header component -->
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<profile-nav :user-name="getUserName" />
		<base-container>
			<div class="profilebox">
				<!-- <main>
				<createpost-bar />
			</main> -->
				<main>
					<sortposts-bar></sortposts-bar>
				</main>
				<aside>
					<profile-card :user-name="getUserName" />
				</aside>
			</div>
		</base-container>
	</div>
</template>

<script>
import ProfileCard from '../../components/UserComponents/ProfileCard.vue';
import BaseContainer from '../../components/BaseComponents/BaseContainer.vue';
import profileNav from '../../components/UserComponents/ProfileNav.vue';
// import SocialLinks from '../../components/UserComponents/SocialLinks.vue';
// import createpostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
export default {
	props: {},
	created() {
		document.title = this.$store.state.userName + ' - Reddit';
	},
	components: {
		ProfileCard,
		BaseContainer,
		profileNav,
		SortpostsBar,
		// SocialLinks,
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
