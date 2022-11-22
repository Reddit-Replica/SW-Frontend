<template>
	<base-dialog show="true" dialog-class="dialog-class" id="social-link-config">
		<template #header>
			<div class="social-link-config-header" id="social-link-config-header">
				<div @click="back" id="back-button">
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
			<div class="social-link-config-header-body" id="social-link-config-item">
				<sociallink-item
					:text="data.text"
					:img-src="data.imgSrc"
					:alt="data.alt"
				></sociallink-item>
				<input
					type="text"
					:placeholder="socialPlaceholder"
					v-model="displayedTextField"
					@input="displayedModeration"
					id="social-link-config-input-displayedText"
				/>
				<input
					v-if="data.type == 'link'"
					type="text"
					:placeholder="`https://${
						data.text == 'Custom URL'
							? 'website'
							: data.text.toLowerCase().replace(/\s/g, '')
					}.com`"
					v-model="socialLinkUrl"
					@input="socialLinkModeration"
					id="social-link-config-input-sociallink"
				/>
				<div
					v-if="!validUrl"
					class="invalid-url"
					id="social-link-config-invalid-url"
				>
					Invalid URL
				</div>
				<div
					v-else-if="!correctSpelling"
					class="invalid-url"
					id="social-link-config-invalid-spelling"
				>
					Looks like this isn’t a valid URL. Double-check your spelling.
				</div>
			</div>
		</template>
	</base-dialog>
</template>
<script>
import BaseDialog from '../../../BaseComponents/BaseDialog.vue';
import BaseButton from '../../../BaseComponents/BaseButton.vue';
import SociallinkItem from './SociallinkItem.vue';
export default {
	// @vuese
	// data contain social link ( text ,imag-src, image alternate text )
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
			validUrl: true,
			correctSpelling: true,
		};
	},
	// @vuese
	// back event to back to social link dialog , save event for adding new social link to user
	emits: ['back', 'save'],
	methods: {
		validationOfUrl() {
			let srt = this.socialLinkUrl;
			let urlPattern = new RegExp(
				'^(https?:\\/\\/)?' + // validate protocol
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
					'((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
					'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
					'(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
					'(\\#[-a-z\\d_]*)?$',
				'i'
			); // validate fragment locator
			return !!urlPattern.test(srt);
		},
		/**
		 * @vuese
		 * function emits back event to back to social link dialog
		 * @arg no arg
		 */
		back() {
			/* this event emitted to know the parent component that he clicked to to back button to close it and open social links dialog */
			this.$emit('back');
		},
		/**
		 * @vuese
		 * function for completion on input field and validate it
		 * @arg no arg
		 */
		socialLinkModeration() {
			this.validUrl = true;
			this.correctSpelling = true;
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
		/**
		 * @vuese
		 * function for completion on input field and validate it
		 * @arg no arg
		 */
		displayedModeration() {
			if (
				this.displayedTextField != '' &&
				this.data.type == 'username' &&
				this.data.text != 'Reddit' &&
				this.displayedTextField[0] != '@'
			) {
				this.displayedTextField = '@' + this.displayedTextField;
			}
			this.Validation();
		},
		/**
		 * @vuese
		 * function Social link input validate it
		 * @arg no arg
		 */
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
		/**
		 * @vuese
		 * function for saving the social link
		 * @arg no arg
		 */
		async SaveSocialLink() {
			if (this.data.type == 'link') {
				if (
					this.socialLinkUrl.includes(',') ||
					this.socialLinkUrl.includes(' ')
				) {
					this.correctSpelling = false;
					return;
				}
				this.correctSpelling = true;
				if (!this.validationOfUrl()) {
					this.validUrl = false;
					return;
				}
			}
			this.validUrl = true;
			if (this.activeSaveButton) {
				let newSocialLink = '';
				if (this.data.type == 'link') {
					newSocialLink = {
						type: this.data.text,
						displayText: this.displayedTextField,
						link: this.socialLinkUrl,
					};
				} else {
					newSocialLink = {
						type: this.data.text,
						displayText: this.displayedTextField.substring(1),
						link: `${this.data.baseUrl}${this.displayedTextField.substring(1)}`,
					};
				}
				/* this event emitted to know the parent component that he clicked to to save button to close it*/
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
		/**
		 * @vuese
		 * function for determination of place holder for differnt social links
		 * @arg no arg
		 */
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
	background-color: var(--main-white-color);
	color: var(--color-dark-3);
	width: 100%;
	border: 1px solid var(--color-grey-light-10);
	border-radius: 4px;
	margin: 12px 2px;
	outline: none;
}
.social-link-config-header-body input:focus {
	border-color: var(--color-blue-2);
}
/* .active-save-button {
	background-color: var(--color-blue-2);
	color: var(--main-white-color);
	filter: unset;
	cursor: unset;
} */
.social-link-config-header .active-save-button {
	background-color: var(--color-blue-2);
	color: var(--main-white-color);
	filter: unset;
	cursor: pointer;
}
.invalid-url {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #ff0000;
	margin: 6px 2px;
}
</style>
