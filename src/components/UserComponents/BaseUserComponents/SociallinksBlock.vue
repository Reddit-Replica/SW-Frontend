<template>
	<ul class="social-link" id="social-media-links">
		<a href="">
			<sociallink-item
				img-src="https://www.redditstatic.com/desktop2x/img/social-links/custom.png"
				text="Custom URL"
			></sociallink-item>
		</a>
		<sociallink-item
			img-src="https://www.redditstatic.com/desktop2x/img/social-links/custom.png"
			text="Custom URL"
		></sociallink-item>
		<li>
			<button class="add-social-link" @click="openSocialLinkDialog">
				<span><i class="fa-solid fa-plus" /></span>Add social link
			</button>
		</li>
	</ul>
	<social-links
		:show="addSocialLinkDialog"
		@close="closeSocialLinkDialog"
		@open="openSocialLinkDialog"
	></social-links>
</template>

<script>
import SociallinkItem from './SociallinkItem.vue';
import SocialLinks from '../SocialLinks.vue';
export default {
	components: {
		SociallinkItem,
		SocialLinks,
	},
	data() {
		return {
			addSocialLinkDialog: false,
		};
	},
	methods: {
		openSocialLinkDialog() {
			this.addSocialLinkDialog = true;
		},
		closeSocialLinkDialog() {
			this.addSocialLinkDialog = false;
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	border-bottom: none;
	margin: 0;
	padding: 0;
}
.link-item {
	margin: 0;
	margin-right: 8px;
}
.social-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 8px;
}
.social-link button {
	background-color: var(--color-grey-dark-5);
	border-radius: 9999px;
	color: var(--color-dark-3);
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	cursor: pointer;
	margin-right: 8px;
	padding: 10px 12px;
	text-align: center;
	line-height: 16px;
	display: flex;
	align-items: center;
	border: none;
}
.social-link button span {
	font-size: 20px;
	margin-right: 8px;
	vertical-align: middle;
	font-weight: 500;
}
</style>
