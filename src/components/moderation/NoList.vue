<template>
	<div class="no-list">
		<div class="white-content">
			<slot></slot>
			<!-- <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-slash-circle-fill icon"
				viewBox="0 0 16 16"
			>
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"
				/>
			</svg> -->
			<div class="text-white" v-if="title == 'Rules'">No {{ title }} yet</div>
			<div class="text-white" v-else>
				No {{ title }} in r/{{ subredditName }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		// @vuese
		//title bar name
		// @type string
		title: {
			type: String,
			default: '',
			required: true,
		},
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			return this.$store.state.subredditName;
		},
	},
};
</script>

<style scoped>
.no-list {
	padding-top: 1.4rem;
	border-radius: 0 0 4px 4px;
	overflow: hidden;
}
.text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.white-content {
	-ms-flex-align: center;
	align-items: center;
	background-color: var(--main-white-color);
	border-radius: 4px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	padding: 9rem 0;
}
.icon {
	color: var(--color-grey-dark-8);
	font-size: 3rem;
	height: 3rem;
	width: 3rem;
}
.text-white {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	padding-top: 3rem;
	color: var(--color-grey-dark-8) !important;
}
</style>
