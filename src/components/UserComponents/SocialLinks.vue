<template>
	<div>
		<base-dialog
			:show="show"
			center="true"
			title="Adding Social link"
			@close="tryClose"
		>
			<template #default>
				<div class="links-container">
					<sociallink-item
						v-for="sociallinkItem in sociallinkItems"
						:key="sociallinkItem.id"
						:text="sociallinkItem.text"
						:img-src="sociallinkItem.imgSrc"
						:alt="sociallinkItem.alt"
						@click="openSocialLinkConfig(sociallinkItem.id)"
					></sociallink-item>
				</div>
			</template>
		</base-dialog>
		<sociallinks-config
			v-if="showSocialLinkConfig"
			:data="socialLinkData"
			@back="backToSociallinkDialog"
		></sociallinks-config>
	</div>
</template>

<script>
import BaseDialog from '../BaseComponents/BaseDialog.vue';
import SociallinkItem from './BaseUserComponents/SociallinkItem.vue';
import SociallinksConfig from './SociallinksConfig.vue';
export default {
	components: {
		BaseDialog,
		SociallinkItem,
		SociallinksConfig,
	},
	props: {
		show: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	emits: ['close', 'open'],
	data() {
		return {
			sociallinkItems: [
				{
					id: '1',
					text: 'Custom URL',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/custom.png',
					alt: 'custom url',
					type: 'link' /* link or username */,
				},
				{
					id: '2',
					text: 'Reddit',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',
					alt: 'Reddit',
					type: 'username',
				},
				{
					id: '3',
					text: 'Instagram',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/instagram.png',
					alt: '',
					type: 'username',
				},
				{
					id: '4',
					text: 'Twitter',
					imgSrc:
						'https://www.redditstatic.com/desktop2x/img/social-links/twitter.png',
					alt: '',
					type: 'username',
				},
			],
			showSocialLinkConfig: false,
			socialLinkData: {},
		};
	},
	methods: {
		tryClose() {
			this.$emit('close');
		},
		tryOpen() {
			this.$emit('open');
		},
		openSocialLinkConfig(id) {
			this.socialLinkData = this.sociallinkItems.find(
				(socialLink) => socialLink.id == id
			);
			console.log(this.socialLinkData);
			this.tryClose();
			this.showSocialLinkConfig = true;
		},
		backToSociallinkDialog() {
			this.showSocialLinkConfig = false;
			this.tryOpen();
		},
	},
};
</script>
<style scoped>
.links-container {
	display: flex;
	flex-wrap: wrap;
}
</style>
