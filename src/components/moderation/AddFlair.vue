<template>
	<div class="add-flair-box">
		<fieldset class="box-1">
			<legend class="legend">Flair appearance</legend>
			<div class="field">
				<label for="flair-text" class="full-width">
					<span class="flair-text-span">Flair text</span>
					<input type="text" name="" id="flair-text" class="input-field" />
					<div class="error" v-if="error">Error: text or emoji is required</div>
					<div class="grey-title" v-else>
						{{ charRemainingName }} characters remaining
					</div>
				</label>
			</div>

			<!-- <div class="field">
				<label for="css-class" class="full-width">
					<span class="flair-text-span">CSS class</span>
					<input
						type="text"
						name=""
						id="css-class"
						class="input-field-css"
						placeholder="none"
					/>
					<div class="grey-title">Optional</div>
				</label>
			</div> -->

			<div class="field">
				<label class="label-box">
					<span class="flair-text-span-2">Flair background color</span>
					<div class="small-box">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-chevron-down icon-display"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</div>
				</label>
			</div>
			<div class="field">
				<label class="label-box">
					<span class="flair-text-span-2">Flair text color</span>
					<button
						class="small-box-button"
						:class="textColor == 'white' ? 'white' : 'black'"
						@click="toggleTextColor(textColor)"
					>
						Aa
					</button>
				</label>
			</div>
		</fieldset>

		<!-- <fieldset class="box-1 box-2">
			<legend class="legend">Flair settings</legend>
		</fieldset> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			charRemainingName: 64,
			textColor: 'white',
		};
	},
	methods: {
		toggleTextColor(type) {
			console.log(type);
			if (type == 'white') {
				this.textColor = 'black';
			} else if (type == 'black') {
				this.textColor = 'white';
			}
		},
	},
};
</script>

<style scoped>
.add-flair-box {
	display: flex;
}
.box-1 {
	flex: 1;
	max-width: 28rem;
	min-width: 0;
}
.legend {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	color: var(--color-grey-light-5);
}
.full-width {
	width: 100%;
}
.field {
	margin-top: 1.6rem;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
}
.label-box {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.flair-text-span {
	display: block;
	margin-bottom: 0.8rem;
	flex: 1;
}
.flair-text-span-2 {
	flex: 1;
}
.input-field {
	background-color: var(--color-blue-light-4);
	border-radius: 4px;
	color: var(--color-dark-3);
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
	flex-grow: 1;
	-ms-flex-negative: 1;
	flex-shrink: 1;
	overflow: hidden;
	padding: 8px 30px 8px 8px;
	max-height: 4rem;
	width: 100%;
}
.input-field:focus {
	outline: navajowhite;
	border: 1px solid var(--color-blue-2);
}
.input-field:hover {
	outline: navajowhite;
	border: 1px solid var(--color-grey-dark-6);
}
.input-error {
	outline: navajowhite;
	border: 1px solid var(--color-red-dark-1);
}
.error {
	color: var(--color-red-dark-1);
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	margin: 0.6rem 0.4rem;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.grey-title {
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	color: var(--color-grey-dark-8);
	margin: 6px 4px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
}
.input-field-css {
	background-color: var(--color-blue-light-4);
	border-radius: 4px;
	border: none;
	color: var(--color-dark-3);
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
	flex-grow: 1;
	-ms-flex-negative: 1;
	flex-shrink: 1;
	overflow: hidden;
	padding: 8px 30px 8px 8px;
	max-height: 4rem;
	width: 100%;
}
.input-field-css:focus {
	outline: navajowhite;
	border: 1px solid var(--color-blue-2);
}
.small-box {
	background-color: rgb(218, 218, 218);
	fill: rgb(0, 0, 0);
	cursor: pointer;
	height: 2.4rem;
	width: 2.4rem;
	-ms-flex-align: center;
	align-items: center;
	border: 1px solid var(--color-grey-light-9);
	border-radius: 2px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-pack: center;
	justify-content: center;
}
.small-box:hover.icon-display {
	display: block;
}
.icon-display {
	height: 1.6rem;
	width: 1.6rem;
	/* display: none; */
}
.small-box-button {
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.6rem;
	-ms-flex-align: center;
	align-items: center;
	border-radius: 2px;
	border: 1px solid var(--color-grey-dark-8);
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	height: 2.4rem;
	-ms-flex-pack: center;
	justify-content: center;
	padding: 4px;
	width: 2.4rem;
	background-color: #f6f7f8;
	color: #1a1a1b;
}
.white {
	background-color: #f6f7f8;
	color: #1a1a1b;
}
.black {
	background-color: #878a8c;
	color: #fff;
}
.box-2 {
	margin-left: 4rem;
	-ms-flex: 1;
	flex: 1;
	max-width: 28rem;
	min-width: 0;
}
</style>
