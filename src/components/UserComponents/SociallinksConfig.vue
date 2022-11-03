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
					disable-button="true"
					link="false"
					class="save-button"
					disabled="true"
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
				<input type="text" :placeholder="socialPlaceholder" />
				<input
					v-if="data.type == 'link'"
					type="text"
					placeholder="https://website.com"
					v-model="socialLinkUrl"
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
			socialLinkUrl: 'j',
		};
	},
	emits: ['back'],
	methods: {
		back() {
			this.$emit('back');
		},
	},
	computed: {
		socialPlaceholder() {
			if (this.data.text == 'Reddit') return 'r/community, u/user';
			if (this.data.type == 'link') return 'Display text';
			else if (this.data.type == 'username') return '@username';
			else return 'Display text';
		},
		socialLinkModeration() {
			console.log(this.socialLinkUrl);

			// if (this.socialLinkUrl[0] != 'h') {
			// 	console.log('ff');
			// 	// eslint-disable-next-line
			// 	this.socialLinkUrl = 'http://';
			// 	return 0;
			// }
			return 0;
		},
	},
};
</script>
<!--!!!!! Not scoped !!!!!! -->
<style>
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
</style>
