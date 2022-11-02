<template>
	<ul class="social-link" id="social-media-links">
		<a href="">
			<sociallink-item
				imgSrc="https://www.redditstatic.com/desktop2x/img/social-links/custom.png"
				text="Custom URL"
			></sociallink-item>
		</a>
		<sociallink-item
			imgSrc="https://www.redditstatic.com/desktop2x/img/social-links/custom.png"
			text="Custom URL"
		></sociallink-item>
		<li>
			<button class="add-social-link" @click="openSocialLinkDialog">
				<span><i class="fa-solid fa-plus" /></span>Add social link
			</button>
		</li>
	</ul>
</template>

<script>
import SociallinkItem from './SociallinkItem.vue';
export default {
	components: {
		SociallinkItem,
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	border-bottom: none;
}
.social-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 8px;
}
</style>
