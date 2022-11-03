<template>
	<!-- header component -->
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<profile-nav :user-name="getUserName" />
		<base-container>
			<div class="profilebox">
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
.sort-post-content {
	margin-top: 1px;
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
	main {
		width: 100%;
	}
}
body {
	min-width: 100%;
}
@media (min-width: 960px) {
	main {
		width: 640px;
	}
}
aside {
	width: 312px;
	margin-left: 24px;
	min-height: 2000px;
}
</style>
