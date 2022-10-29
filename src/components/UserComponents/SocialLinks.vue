<template>
	<base-dialog
		:show="show"
		center="true"
		title="Adding Social link"
		@close="tryClose"
	>
		<template #default>
			<div class="links-container">
				<div class="link-item">
					<img
						src="https://www.redditstatic.com/desktop2x/img/social-links/custom.png"
						alt=""
					/>
					Custom URL
				</div>
				<div class="links-container">
					<div class="link-item">
						<img
							src="https://www.redditstatic.com/desktop2x/img/social-links/reddit.png"
							alt=""
						/>
						Reddit
					</div>
				</div>
				<div class="links-container">
					<div class="link-item">
						<img
							src="https://www.redditstatic.com/desktop2x/img/social-links/instagram.png"
							alt=""
						/>
						Instagram
					</div>
				</div>
				<div class="links-container">
					<div class="link-item">
						<img
							src="https://www.redditstatic.com/desktop2x/img/social-links/twitter.png"
							alt=""
						/>
						Twitter
					</div>
				</div>
			</div>
		</template>
	</base-dialog>
</template>

<script>
import BaseDialog from '../BaseComponents/BaseDialog.vue';
export default {
	components: {
		BaseDialog,
	},
	props: {
		show: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	emits: ['close'],
	methods: {
		tryClose() {
			this.$emit('close');
		},
	},
};
</script>
<style scoped>
.links-container {
	display: flex;
	flex-wrap: wrap;
}
.link-item {
	margin: 6px 2px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	align-items: center;
	background-color: var(--color-grey-dark-5);
	border-radius: 9999px;
	color: var(--color-dark-3);
	cursor: pointer;
	display: flex;
	height: 40px;
	margin-right: 8px;
	padding: 10px 12px;
	white-space: nowrap;
	max-width: 344px;
}
.link-item img {
	margin-right: 8px;
}
</style>
