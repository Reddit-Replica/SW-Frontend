<template>
	<base-dialog show="true" dialog-class="dialog-class">
		<template #header>
			<div class="social-link-config-header">
				<div @click="back">
					<i class="fa-solid fa-arrow-left icons"></i>
				</div>
				<h3>Add Social Link</h3>
				<base-button
					button-text="save"
					class="save-button"
					:class="[activeSaveButton ? 'active-save-button' : 'save-button']"
					id="save-button"
					@click="SaveSocialLink"
				></base-button>
			</div>
		</template>
		<template #default>
			<div class="social-link-config-header-body">
				<sociallink-item
					:text="data.text"
					:img-src="data.imgSrc"
					:alt="data.alt"
				></sociallink-item>
				<input
					type="text"
					:placeholder="socialPlaceholder"
					v-model="displayedTextField"
					@input="Validation"
				/>
				<input
					v-if="data.type == 'link'"
					type="text"
					placeholder="https://website.com"
					v-model="socialLinkUrl"
					@input="socialLinkModeration"
				/>
			</div>
		</template>
	</base-dialog>
</template>
<script>
import BaseDialog from '../BaseComponents/BaseDialog.vue';
import BaseButton from '../BaseComponents/BaseButton.vue';
import SociallinkItem from './BaseUserComponents/SociallinkItem.vue';
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	components: {
		BaseDialog,
		BaseButton,
		SociallinkItem,
	},
	data() {
		return {
			// showSocialLinkConfigDialog: true,
			socialLinkUrl: '',
			displayedTextField: '',
			activeSaveButton: false,
		};
	},
	emits: ['back', 'save'],
	methods: {
		back() {
			this.$emit('back');
		},
		socialLinkModeration() {
			const paragraph = 'http://';
			if (
				(!this.socialLinkUrl.startsWith('http://') &&
					paragraph.match(this.socialLinkUrl) == null) ||
				(!this.socialLinkUrl.startsWith('http://') &&
					!paragraph.startsWith(this.socialLinkUrl))
			) {
				this.socialLinkUrl = 'http://' + this.socialLinkUrl;
			}
			this.Validation();
		},
		Validation() {
			if (this.data.type == 'link') {
				if (this.socialLinkUrl != '' && this.displayedTextField != '')
					this.activeSaveButton = true;
				else this.activeSaveButton = false;
			} else {
				if (this.displayedTextField != '') this.activeSaveButton = true;
				else this.activeSaveButton = false;
			}
		},
		async SaveSocialLink() {
			if (this.activeSaveButton) {
				const newSocialLink = {
					type: this.data.text,
					displayText: this.displayedTextField,
					link: this.socialLinkUrl,
				};
				/* request to back end */

				/* */
				this.$emit('save');
				try {
					await this.$store.dispatch('user/AddNewSocialLink', {
						baseurl: this.$baseurl,
						newSocialLink,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
	},
	computed: {
		socialPlaceholder() {
			if (this.data.text == 'Reddit') return 'r/community, u/user';
			if (this.data.type == 'link') return 'Display text';
			else if (this.data.type == 'username') return '@username';
			else return 'Display text';
		},
	},
};
</script>
<!--!!!!! Not scoped Don't touch :) , it will not affect others contains complex nested classes!!!!!! -->
<style>
button#save-button:disabled {
	opacity: unset !important; /* override button component */
}
.dialog-class {
	width: 500px;
}
.social-link-config-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.social-link-config-header h3 {
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	color: var(--color-dark-4);
	text-align: center;
}
.social-link-config-header .icons {
	height: 24px;
	width: 24px;
	font-weight: 200;
	color: #878a8c;
	cursor: pointer;
}
.social-link-config-header .save-button {
	cursor: not-allowed;
	filter: grayscale(1);
	background-color: var(--color-blue-3);
	color: rgba(255, 255, 255, 0.5);
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
.social-link-config-header-body input {
	display: block;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	height: 36px;
	padding: 0 8px;
	box-sizing: border-box;
	background-color: #ffffff;
	color: #1c1c1c;
	width: 100%;
	border: 1px solid #edeff1;
	border-radius: 4px;
	margin: 12px 2px;
	outline: none;
}
.social-link-config-header-body input:focus {
	border-color: #0079d3;
}
/* .active-save-button {
	background-color: #0079d3;
	color: #ffffff;
	filter: unset;
	cursor: unset;
} */
.social-link-config-header .active-save-button {
	background-color: #0079d3;
	color: #ffffff;
	filter: unset;
	cursor: pointer;
}
</style>
