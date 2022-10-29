<template>
	<div class="content">
		<div class="home-banner"></div>
		<div class="home-title">
			<div class="snoo-home"></div>
			<div class="snoo-home-title"><span class="title">Home</span></div>
		</div>
		<h3 class="heading-3">
			Your personal Reddit frontpage. Come here to check in with your favorite
			communities.
		</h3>
		<div class="line"></div>
		<div class="buttons">
			<base-button class="button create-post" @click="goToSubmit()"
				>Create Post</base-button
			>
			<base-button class="button blue-button" @click="showCreateCommunity"
				>Create Community</base-button
			>
		</div>
		<create-community
			v-if="createCommunityShown"
			@exit="showCreateCommunity"
		></create-community>
	</div>
</template>

<script>
import CreateCommunity from '../CommunityComponents/CreateCommunity.vue';
export default {
	components: {
		CreateCommunity,
	},
	data() {
		return {
			createCommunityShown: false,
		};
	},
	methods: {
		goToSubmit() {
			this.$router.push('/submit');
		},
		showCreateCommunity() {
			this.createCommunityShown = !this.createCommunityShown;
		},
	},
};
</script>

<style scoped>
.content {
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	fill: var(--color-dark-1);
	width: 310px;
	border: 1px solid var(--color-grey-light-4);
	border-radius: 4px;
	overflow: visible;
	word-wrap: break-word;
	position: relative;
}
.home-banner {
	background-color: var(--color-blue-2);
	background-image: url(../../../img/home-banner.png);
	background-repeat: no-repeat;
	background-position-y: center;
	background-position-x: center;
	background-size: cover;
	border-radius: 3px 3px 0 0;
	height: 3.4rem;
}
.home-title {
	-ms-flex-align: center;
	align-items: center;
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 0.8rem;
}
.snoo-home {
	display: inline-block;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	position: absolute;
	background-image: url(../../../img/snoo-home.png);
	background-size: 4rem 6.8rem;
	height: 6.8rem;
	width: 4rem;
	top: 2rem;
	left: 1rem;
}
.snoo-home-title {
	margin-left: 1rem;
	margin-top: 3rem;
}
.title {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
	display: inline-block;
	position: absolute;
	top: 6rem;
	left: 7rem;
}
.heading-3 {
	font-size: 1.3rem;
	font-weight: 300;
	margin-top: 2rem;
}
.line {
	border-bottom: var(--line-8);
	margin: 1rem;
}
.buttons {
	margin: 1.2rem;
}
.button {
	padding: 0.4rem 1.6rem;
	-ms-flex-pack: center;
	justify-content: center;
	margin-top: 12px;
	width: 100%;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	min-height: 3.2rem;
	min-width: 3.2rem;
}
.blue-button {
	color: var(--color-blue-2) !important;
	border: 1px solid var(--color-blue-2) !important;
}
.create-post {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);
}
.create-post:hover {
	opacity: 0.92;
}
</style>
