<template>
	<teleport to="body" :disabled="isMobile()">
		<div
			v-if="show"
			class="backdrop"
			:class="{ 'transparent-background': transparentBackground }"
		>
			<dialog open v-if="show" :class="dialogClass">
				<header>
					<slot name="header">
						<h2 :class="{ 'header-center': center }">{{ title }}</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-x"
							viewBox="0 0 16 16"
							@click="tryClose"
							id="exit-dialog"
						>
							<path
								d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</slot>
				</header>
				<section>
					<slot></slot>
				</section>
			</dialog>
		</div>
	</teleport>
</template>

<script>
export default {
	props: {
		//@vuese
		//Is dialog shown or not
		show: {
			type: Boolean,
			required: true,
		},
		//@vuese
		//Title in dialog header
		title: {
			type: String,
			required: false,
			default: '',
		},
		//@vuese
		//Is dialog title aligned to center or to left by default
		center: {
			type: Boolean,
			required: false,
			default: false,
		},
		//@vuese
		//Style dialog
		dialogClass: {
			type: String,
			required: false,
			default: '',
		},
		//@vuese
		//Is dialog background transparent or not
		transparentBackground: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['close'],
	methods: {
		//@vuese
		//Close dialog
		tryClose() {
			//@vuese
			//Fire exit event when clicking on exit icon
			this.$emit('close');
		},
		//@vuese
		//Check if screen is mobile
		isMobile() {
			return screen.width <= 780;
		},
	},
};
</script>

<style scoped>
.backdrop {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	height: 100%;
	overflow: auto;
	padding: 75px 30px 20px;
	/* pointer-events: none; */
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 55;
	background-color: rgba(28, 28, 28, 0.9);
}
dialog {
	background-color: var(--color-white-1);
	border: 1px solid var(--color-grey-light-1);
	border-radius: 4px;
	box-shadow: 0 2px 20px 0 rgb(0 0 0 / 30%);
	margin: auto;
	pointer-events: auto;
	z-index: 55;
	position: relative;
}
header {
	border-bottom: 1px solid var(--color-grey-light-2);
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	padding: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
header h2 {
	color: var(--color-dark-1);
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	margin: 0;
	flex: 1 1 100%;
	width: 100%;
}
section {
	padding: 16px;
}
.bi-x {
	color: var(--color-grey-dark-2);
	width: 20px;
	height: 20px;
	cursor: pointer;
}
.header-center {
	text-align: center;
}
.transparent-background {
	background-color: transparent;
}
@media only screen and (max-width: 780px) {
	.backdrop {
		padding: 0px;
	}
}
</style>
