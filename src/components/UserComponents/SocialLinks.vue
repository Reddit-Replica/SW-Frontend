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
						:key="sociallinkItem.text"
						:text="sociallinkItem.text"
						:img-src="sociallinkItem.imgSrc"
						:alt="sociallinkItem.alt"
						@click="openSocialLinkConfig(sociallinkItem.text)"
					></sociallink-item>
				</div>
			</template>
		</base-dialog>
		<sociallinks-config
			v-if="showSocialLinkConfig"
			:data="socialLinkData"
			@back="backToSociallinkDialog"
			@save="saveSocialLink"
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
	created() {
		// console.log('in social link');
		// console.log(this.$store.getters['user/getStaticSocialLinks']);
		this.sociallinkItems = this.$store.getters['user/getStaticSocialLinks'];
	},
	emits: ['close', 'open'],
	data() {
		return {
			sociallinkItems: [],
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
		openSocialLinkConfig(text) {
			this.socialLinkData = this.sociallinkItems.find(
				(socialLink) => socialLink.text == text
			);
			console.log(this.socialLinkData);
			this.tryClose();
			this.showSocialLinkConfig = true;
		},
		backToSociallinkDialog() {
			this.showSocialLinkConfig = false;
			this.tryOpen();
		},
		saveSocialLink() {
			this.showSocialLinkConfig = false;
			this.tryClose();
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
