<template>
	<div class="content">
		<div class="images-preview">
			<span class="one-image" v-for="(image, i) in images" :key="i">
				<span class="dot" @click="removeImage"> X </span>

				<img :src="image" alt="" />
			</span>
			<button class="add-more" v-if="images.length > 0">
				<svg class="svg" viewBox="0 0 20 20" version="1.1">
					<g stroke="none">
						<g transform="translate(-34.000000, -136.000000)" fill="inherit">
							<path
								d="M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
							></path>
						</g>
					</g>
				</svg>
			</button>
		</div>
		<h3 class="heading-3">Drag and drop images or</h3>
		<!-- <input type="file" class="blue-button" id="image-input" hidden /> -->

		<input
			id="image-input"
			type="file"
			accept="image/png,image/gif,image/jpeg,image/webp,video/mp4,video/quicktime"
			multiple
			hidden
			@change="fileChange"
		/>
		<label class="blue-button" for="image-input">Upload</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imageCaptions: [],
			imageLinks: [],
			images: [],
			videos: [],
			image: '',
		};
	},
	methods: {
		fileChange(e) {
			const file = e.target.files[0];
			this.images.push(URL.createObjectURL(file));
		},
		removeImage() {
			this.images.pop();
		},
	},
};
</script>

<style scoped>
.content {
	width: 95%;
	margin: auto;
	display: flex;
	flex-direction: row;

	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	height: 33rem;
	border: var(--line-dashed);
	margin-top: 1.5rem;
	border-radius: 5px;
}
.heading-3 {
	color: var(--color-blue);
}
.blue-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	box-sizing: border-box;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;
}
input button {
	position: relative;
	border: 1px solid #0079d3;
	color: #0079d3;
	fill: #0079d3;
}
.images-preview {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	max-height: 200px;
	overflow-y: auto;
	margin-top: 10px;
}
.one-image {
	padding: 5px;
	display: block;
	box-sizing: border-box;
	width: 100px;
	margin-left: 8px;
	margin-bottom: 8px;
	height: 100px;
	position: relative;

	border-radius: 4px;
	border: 1px solid black;
}
.images-preview .one-image img {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}

.one-image .dot .x-button {
	left: 95%;
	top: 10%;
	visibility: hidden;
}

.dot {
	text-align: center;
	padding: 1px;
	height: 20px;
	color: white;
	width: 20px;
	background-color: black;
	border-radius: 50%;
	display: inline-block;
	position: absolute;
	left: 70%;
	top: 5%;
	z-index: 1;
	cursor: pointer;
}
.add-more {
	align-items: center;
	border: 1px dashed #d6d6d6;
	border-radius: 4px;
	display: -ms-flexbox;
	display: flex;
	height: 100px;
	-ms-flex-pack: center;
	justify-content: center;
	width: 100px;
	background-color: white;
	margin-left: 8px;
}
.svg {
	fill: #d6d6d6;
	height: 36px;
	opacity: 0.8;
	width: 36px;
}
</style>
