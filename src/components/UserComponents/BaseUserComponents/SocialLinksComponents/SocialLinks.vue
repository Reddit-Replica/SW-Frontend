<template>
	<!-- for showing Static Social links dialog -->
	<div id="root-static-social-links">
		<base-dialog
			:show="show"
			center="true"
			title="Adding Social link"
			id="close-social-link-dialog"
			@close="tryClose"
		>
			<template #default>
				<div class="links-container" id="static-social-links">
					<!-- loop for showing all social links item -->
					<sociallink-item
						v-for="sociallinkItem in sociallinkItems"
						:key="sociallinkItem.text"
						:text="sociallinkItem.text"
						:img-src="sociallinkItem.imgSrc"
						:alt="sociallinkItem.alt"
						:id="`static-${sociallinkItem.text}`"
						@click="openSocialLinkConfig(sociallinkItem.text)"
					></sociallink-item>
				</div>
			</template>
		</base-dialog>
		<!-- social link configuration dialog -->
		<sociallinks-config
			v-if="showSocialLinkConfig"
			:data="socialLinkData"
			@back="backToSociallinkDialog"
			@save="saveSocialLink"
		></sociallinks-config>
	</div>
</template>

<script>
import BaseDialog from '../../../BaseComponents/BaseDialog.vue';
import SociallinkItem from './SociallinkItem.vue';
import SociallinksConfig from './SociallinksConfig.vue';
export default {
	components: {
		BaseDialog,
		SociallinkItem,
		SociallinksConfig,
	},
	props: {
		// @vuese
		// for showing or hiding the dialog
		show: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	/**
	 * @vuese
	 * at creation will get all Static social links from vuex store using getters
	 * @arg no arg
	 */
	created() {
		// console.log('in social link');
		// console.log(this.$store.getters['user/getStaticSocialLinks']);
		this.sociallinkItems = this.$store.getters['user/getStaticSocialLinks'];
	},
	// @vuese
	// dialog emits to events close for closing dialog , open for opening it
	emits: ['close', 'open'],
	data() {
		return {
			sociallinkItems: [],
			showSocialLinkConfig: false,
			socialLinkData: {},
		};
	},
	methods: {
		/**
		 * @vuese
		 * this function triggered at clicking on closing button on dialog will emits event and parent component will
		 * listen on it and make show to false to hide the dialog
		 * @arg no arg
		 */
		tryClose() {
			/* when this event was emitted  the parent component will
			listen on it and make show to false to hide the dialog*/
			this.$emit('close');
		},
		/**
		 * @vuese
		 * this function triggered at clicking on back button on configuration dialog will emits open event and parent component will
		 * listen on to show it
		 * @arg no arg
		 */
		tryOpen() {
			/* when this event was emitted  the parent component will
			listen on it and make show to true to open the dialog*/
			this.$emit('open');
		},
		/**
		 * @vuese
		 * this function triggered at choosing a SociallinkItem to open its configuration dialog
		 * @arg text argument unique for Knowing which socialLinkItem I clicked on
		 */
		openSocialLinkConfig(text) {
			this.socialLinkData = this.sociallinkItems.find(
				(socialLink) => socialLink.text == text
			);
			console.log(this.socialLinkData);
			this.tryClose();
			this.showSocialLinkConfig = true;
		},
		/**
		 * @vuese
		 * this function triggered when clicking on the back button in sociallinkConfiguration to back to
		 * social link dialog
		 * @arg no arg
		 */
		backToSociallinkDialog() {
			this.showSocialLinkConfig = false;
			this.tryOpen();
		},
		/**
		 * @vuese
		 * this function triggered when clicking on the save button in sociallinkConfiguration to save item to
		 * user social link
		 * @arg no arg
		 */
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
	max-width: 538px;
}
</style>
