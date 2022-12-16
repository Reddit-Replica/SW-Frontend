<template>
	<div class="box">
		<p style="text-align: right">
			<base-button
				button-text="Save Changes"
				:disable-button="buttonDisabled"
				class="save-button"
				@click="saveChanges"
			></base-button>
		</p>
		<h3 class="main-title">Post and Comment settings</h3>
		<h3 class="secondary-title">POSTS</h3>
		<h4 class="main-title">Enable spoiler tag</h4>
		<h6 class="description" style="margin-top: 10px">
			Media on posts with the spoiler tag are blurred
			<switch-button
				id="btn1"
				style="margin-left: 15px"
				@checked="getenableSpoiler"
				:value="enableSpoiler"
				v-if="create"
			></switch-button>
		</h6>

		<h3 class="secondary-title" style="margin-top: 20px">COMMENTS</h3>
		<h4 class="main-title">Suggested sort</h4>
		<h6 class="description">
			All comment feeds in community will default to this sort setting.
			<v-select
				class=""
				style="margin-left: 10px; height: 50px; width: max-content"
				:options="suggestedSortoptions"
				v-model="suggestedSort"
			></v-select>
		</h6>
		<h4 class="main-title">Images</h4>
		<h6 class="description" style="margin-top: 10px">
			Allow comments with uploaded images.

			<switch-button
				:val="allowImagesInComment"
				id="btn2"
				style="margin-left: 15px"
				@checked="getallowImagesInComment"
				v-if="create"
			></switch-button>
		</h6>
	</div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
export default {
	async created() {
		await this.getSettings();
		console.log('after creation');
		console.log(this.enableSpoiler);
		console.log(this.allowImagesInComment);
		this.create = true;
	},
	computed: {
		subredditName() {
			return this.$route.params.subredditName;
		},
	},
	components: {
		vSelect,
	},
	data() {
		return {
			create: false,
			enableSpoiler: null,
			allowImagesInComment: null,
			suggestedSort: 'none',
			suggestedSortoptions: ['none', 'best', 'top', 'new', 'old'],
			buttonDisabled: false,
		};
	},
	methods: {
		getenableSpoiler(value) {
			this.enableSpoiler = value;
			console.log('this.enableSpoiler');
			console.log(this.enableSpoiler);
		},
		getallowImagesInComment(value) {
			this.allowImagesInComment = value;
			console.log('this.allowImagesInComment');
			console.log(this.allowImagesInComment);
		},
		async saveChanges() {
			const actionPayload = {
				communityName: this.subredditName,
				enableSpoiler: this.enableSpoiler,
				allowImagesInComment: this.allowImagesInComment,
				suggestedSort: this.suggestedSort,
				baseurl: this.$baseurl,
			};
			console.log(actionPayload);
			try {
				const response = await this.$store.dispatch(
					'setting/postandcommentsSettings',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},

		async getSettings() {
			const actionPayload = {
				communityName: this.subredditName,
				baseurl: this.$baseurl,
			};
			console.log(actionPayload);
			try {
				const response = await this.$store.dispatch(
					'setting/fetcpostandcommentsSettings',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
			this.setting = await this.$store.getters[
				'setting/getpostandcommentsSettings'
			];
			console.log(this.setting);
			this.enableSpoiler = this.setting.enableSpoiler;
			this.allowImagesInComment = this.setting.allowImagesInComment;
			this.suggestedSort = this.setting.suggestedSort;
			console.log(this.enableSpoiler);
			console.log(this.allowImagesInComment);
		},
	},
};
</script>

<style scoped>
.box {
	background-color: #ffffff;
	border-radius: 4px;
	box-sizing: border-box;
	max-width: 856px;
	padding: 16px 24px;
	display: block;
	margin: 10px auto;
	height: 100vh;
	overflow-y: auto;
}
.main-title {
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: #1c1c1c;
	margin-bottom: 16px;
	/*margin: 10px auto;*/
}
.secondary-title {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase;
	border-bottom: 1px solid #edeff1;
	color: #7c7c7c;
	margin-bottom: 32px;
	padding-bottom: 6px;
}
.medium-font {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: #1c1c1c;
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 10px;
}
.save-button {
	width: max-content;
	height: 30px;
	background-color: #0079d3;
	color: white;
	padding: 10px;
	font-size: medium;
}
.description {
	display: flex;
	font-weight: 400;
	color: #7c7c7c;
}
@media only screen and (max-width: 768px) {
	.box {
		padding-top: 11.4rem;
	}
}
</style>
