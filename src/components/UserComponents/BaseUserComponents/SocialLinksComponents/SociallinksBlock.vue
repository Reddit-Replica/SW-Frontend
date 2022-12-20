<template>
	<!-- Social Link Block (social link block in profile Card) -->
	<div>
		<ul class="social-link" id="social-media-links">
			<a
				v-for="data in socialData"
				:key="data.type"
				:href="data.link"
				target="_blank"
				:id="`social-link-${data.displayText}`"
			>
				<sociallink-item
					:img-src="getImgSrc(data.type)"
					:text="data.displayText"
					:type="data.type"
					:link="data.link"
				></sociallink-item>
			</a>
			<li>
				<button
					v-if="socialLinkCount < 4"
					class="add-social-link"
					id="add-social-link-button"
					@click="openSocialLinkDialog"
				>
					<span><i class="fa-solid fa-plus" /></span>Add social link
				</button>
			</li>
			<li>
				<button
					v-if="socialLinkCount >= 4"
					class="add-social-link"
					id="edit-social-link-button"
					@click="$router.push('/settings/profile')"
				>
					Edit
				</button>
			</li>
		</ul>
		<social-links
			:show="addSocialLinkDialog"
			@close="closeSocialLinkDialog"
			@open="openSocialLinkDialog"
			id="static-social-link-dialog"
		></social-links>
	</div>
</template>

<script>
import SociallinkItem from './SociallinkItem.vue';
import SocialLinks from './SocialLinks.vue';
export default {
	components: {
		SociallinkItem,
		SocialLinks,
	},
	// @vuese
	// social user data contains array of user social link item contains (type,displayedText,reference link )
	props: {
		// @vuese
		// Array of user social link data (displayed name , toLink)
		socialData: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			addSocialLinkDialog: false,
		};
	},
	computed: {
		/**
		 * @vuese
		 * return count of social link to check its maximum number of social links
		 * social link dialog
		 * @arg no arg
		 */
		socialLinkCount() {
			return this.socialData.length;
		},
	},
	methods: {
		/**
		 * @vuese
		 * this function triggered when clicking on the Add social link  button in profile card  to open
		 * social link dialog
		 * @arg no arg
		 */
		openSocialLinkDialog() {
			this.addSocialLinkDialog = true;
		},
		/**
		 * @vuese
		 * this function triggered when clicking on the close x button in social link dialog
		 * @arg no arg
		 */
		closeSocialLinkDialog() {
			this.addSocialLinkDialog = false;
		},
		/**
		 * @vuese
		 * this function take the type of social link and return its image link
		 * social link dialog
		 * @arg id unique id of the social link item (image text)
		 */
		getImgSrc(id) {
			let url = '';
			this.$store.getters['user/getStaticSocialLinks'].forEach((element) => {
				if (element.text == id) {
					url = element.imgSrc;
				}
			});
			return url;
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
