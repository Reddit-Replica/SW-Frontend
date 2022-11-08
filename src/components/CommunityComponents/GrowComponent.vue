<template>
	<div class="grow-link" v-if="shownAlone">
		<svg
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			class="tri-1 tri"
			:style="styleFill"
		>
			<polygon points="0 0, 100 100, 0 100" />
		</svg>
		<svg
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			class="tri"
			:style="styleFill"
		>
			<polygon points="0 0, 100 100, 0 100" />
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-x-lg"
			viewBox="0 0 16 16"
			@click="hideAlone"
		>
			<path
				d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
			/>
		</svg>
		<div class="circle" :style="styleBack">
			<div class="icon-circle"><slot></slot></div>
		</div>
		<router-link to="link" class="grow-content">
			<h2>{{ title }}</h2>
			<p>
				{{ content }}
			</p>
			<base-button
				class="button"
				link
				:to="link"
				:button-text="button"
				:style="styleBack"
			></base-button>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
		button: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			shown: [true, true, true, true, true],
			shownAlone: true,
		};
	},
	computed: {
		styleBack() {
			return 'background-color:' + this.color;
		},
		styleFill() {
			return 'fill:' + this.color;
		},
	},
	methods: {
		hide(index) {
			this.shown[index] = !this.shown[index];
		},
		hideAlone() {
			this.shownAlone = !this.shownAlone;
		},
	},
};
</script>

<style scoped>
.tri-1 {
	/* width: 67px; */
	transform: rotate(90deg);
}
.tri {
	border-bottom-left-radius: 4px;
	border-top-left-radius: 4px;
	bottom: 0;
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	opacity: 0.2;
}
.grow-link {
	background-color: var(--color-white-1);
	border: var(--line-8);
	border-radius: 4px;
	cursor: pointer;
	display: block;
	margin-top: 12px;
	max-width: 640px;
	padding: 16px 16px 16px 72px;
	position: relative;
}
.delete {
	width: 100%;
	height: 150px;
}
.bi-x-lg {
	outline: none;
	margin-top: 12px;
	position: absolute;
	right: 0;
	text-decoration: none;
	top: 0;
	margin-right: 12px;
	color: var(--color-grey-light-5);
}
.grow-content {
	padding-right: 16px;
	width: 100%;
}
h2 {
	color: var(--color-dark-4);
	font-weight: 500;
	font-size: 22px;
	line-height: 26px;
}
p {
	color: var(--color-grey-light-5);
	font-size: 14px;
	line-height: 18px;
	margin-top: 8px;
}
.button {
	color: var(--color-white-1);
	margin-right: 4px;
	margin-top: 8px;
	padding: 6px 12px;
	font-size: 14px;
	border: none;
	margin-left: 50px;
}
.circle {
	fill: var(--color-white-1);
	border-radius: 50%;
	color: var(--color-white-1);
	height: 24px;
	left: 16px;
	padding: 10px;
	position: absolute;
	text-align: center;
	top: 12px;
	width: 24px;
	box-sizing: content-box;
}
.icon-circle {
	font-size: 24px;
	height: 24px;
	line-height: 24px;
	width: 24px;
}
</style>
