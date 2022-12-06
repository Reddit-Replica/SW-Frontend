<!-- 








<template>
	<div class="content">
		<div class="images-preview" v-for="(image, i) in images" :key="i">
			<span class="one-image">
				<span class="dot" @click="removeImage"> X </span>

				<img :src="image" alt="" />
			</span>
			<button class="add-more" v-if="images.length > 0">
				<input
					id="image2"
					type="file"
					accept="image/png,image/gif,image/jpeg,image/webp,video/mp4,video/quicktime"
					multiple
					hidden
					@change="fileChange"
				/>
				<label class="new" for="image2">
					<svg class="svg" viewBox="0 0 20 20" version="1.1">
						<g stroke="none">
							<g transform="translate(-34.000000, -136.000000)" fill="inherit">
								<path
									d="M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
								></path>
							</g>
						</g>
					</svg>
				</label>
			</button>
			<div class="bottom-preview">
				<img :src="selectedImage" class="big-image" alt="" />
				<textarea
					maxlength="180"
					placeholder="Add a caption..."
					class="image-caption"
					rows="1"
					style="overflow-x: hidden; overflow-wrap: break-word; height: 39px"
				></textarea>
				<textarea
					maxlength="180"
					placeholder="Add a Link ..."
					class="image-caption"
					rows="1"
					style="overflow-x: hidden; overflow-wrap: break-word; height: 39px"
				></textarea>
			</div>
		</div>

		<h3 class="heading-3" v-if="images.length === 0">
			Drag and drop images or
		</h3>
		<div v-if="images.length === 0">
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
			selectedImage: '',
			link: null,
			caption: null,
		};
	},
	methods: {
		fileChange(e) {
			const file = e.target.files[0];
			this.images.push(URL.createObjectURL(file));
			// console.log('hello');
			// console.log(file);
		},
		removeImage() {
			this.images.pop();
		},
		//formData.append('images[0]', file);
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
	position: relative;
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

.images-preview {
	position: absolute;
	top: 5%;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	max-height: 200px;
	overflow-y: auto;
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
.add-more:hover .svg {
	fill: black;
}
.big-image {
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 4px;
	display: -ms-flexbox;
	display: flex;
	height: 324px;
	-ms-flex-pack: center;
	justify-content: center;
	margin: 12px 12px 12px 0;
	width: 50%;
}
.bottom-preview {
	display: block;
}
.image-caption {
	resize: none;
	box-sizing: border-box;
	overflow: hidden;
	display: block;
	width: 100%;
	padding: 12px 8px;
	outline: none;
	border: 1px solid #edeff1;
	border-radius: 4px;
	color: #878a8c;
}

.image-link {
}
</style> -->
<template>
	<div class="content" @dragover.prevent @drop.prevent @drop="dragFile">
		<!-- <div class="out"> -->
		<div v-if="postType == 'video'">
			<video width="800" height="500" controls>
				<source :src="video" />
			</video>
		</div>
		<div class="images-preview" v-if="postType == 'image'">
			<span
				class="one-image"
				@click="setSelected(image)"
				v-for="(image, i) in images"
				:key="i"
			>
				<span class="dot" @click="removeImage"> X </span>

				<img :src="image" alt="" />
			</span>
			<button class="add-more" v-if="images.length > 0">
				<input
					id="image2"
					type="file"
					accept="image/png,image/gif,image/jpeg,image/webp,video/mp4,video/quicktime"
					multiple
					hidden
					@change="fileChange"
				/>
				<label class="new" for="image2">
					<svg class="svg" viewBox="0 0 20 20" version="1.1">
						<g stroke="none">
							<g transform="translate(-34.000000, -136.000000)" fill="inherit">
								<path
									d="M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
								></path>
							</g>
						</g>
					</svg>
				</label>
			</button>
		</div>
		<!-- </div> -->
		<div class="bottom-preview" v-if="images.length > 1 && postType == 'image'">
			<div class="big-image">
				<img :src="selectedImage" alt="" />
			</div>
			<div class="out-text">
				<div class="text-values">
					<div class="count">
						<textarea
							maxlength="180"
							placeholder="Add a caption..."
							class="image-caption"
							rows="1"
							v-model="caption"
							style="
								overflow-x: hidden;
								overflow-wrap: break-word;
								height: 39px;
							"
						>
						</textarea>
						<span class="char-count">{{ inputCharCount }}/180</span>
					</div>
					<textarea
						maxlength="180"
						placeholder="Add a Link ..."
						class="image-caption"
						rows="1"
						v-model="link"
						style="overflow-x: hidden; overflow-wrap: break-word; height: 39px"
					></textarea>
				</div>
			</div>
		</div>

		<h3 class="heading-3" v-if="images.length === 0 && postType == 'image'">
			Drag and drop images or
		</h3>
		<div v-if="images.length === 0 && postType == 'image'">
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			imageCaptions: [],
			imageLinks: [],
			images: [],
			video: null,
			imageFiles: [],
			videoFile: null,
			inputCharCount: 0,
			selectedImage: '',
			link: null,
			caption: null,
			postType: 'image',
			dropped: false,
			// image: '',
		};
	},
	methods: {
		fileChange(e) {
			const file = e.target.files[0];
			console.log(file.type);
			console.log(file.type == 'image/jpeg');
			//'video/mp4'
			if (file.type == 'video/mp4') {
				this.video = URL.createObjectURL(file);
				this.videoFile = file;
				this.postType = 'video';
			} else {
				this.postType = 'image';
				this.imageFiles.push(file);
				this.images.push(URL.createObjectURL(file));

				console.log(this.images.length);
				console.log('after push');
				if (this.images.length > 1)
					this.selectedImage = this.images[this.images.length - 1];
			}
		},
		removeImage() {
			this.images.pop();
			this.images.splice(this.images.length, 1);
			console.log(this.images);
			console.log(this.images.length);
			console.log('after pop');
			console.log(this.images.length);
			this.selectedImage = this.images[this.images.length - 2];
			console.log(this.images.length);
		},
		setSelected(img) {
			this.selectedImage = img;
		},
		dragFile(e) {
			const file = e.dataTransfer.files[0];
			console.log(file);
			this.imageFiles.push(file);
			this.images.push(URL.createObjectURL(file));
			this.dropped = true;
			if (this.images.length > 1)
				this.selectedImage = this.images[this.images.length - 1];
		},
	},
	watch: {
		caption(value) {
			this.inputCharCount = this.caption.length;
			this.caption = value;
			return this.inputCharCount;
		},
	},
};
</script>

<style scoped>
/* {
	overflow: auto;
}*/
.content {
	/*box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	border: 1px solid var(--newCommunityTheme-line);
	box-sizing: border-box;
	border-radius: 4px;
	padding: 12px;*/

	width: 100%;
	margin: auto;
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	/*display: flex;
	flex-direction: row;
   
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;*/
	overflow-x: auto;
	height: 50rem;
	border: var(--line-dashed);
	margin-top: 1.5rem;
	border-radius: 5px;
	position: relative;
}
.drop {
	border: 1px dashed var(--bs-link-color);
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

/*.bottom-preview.out {
	display: block;
	overflow: auto;
	box-sizing: border-box;
	width: 100%;
}*/
.images-preview {
	display: inline-flex;
	/*display: inline-flex;*/
	overflow: auto;
	width: 100%;

	position: absolute;
	top: 5%;
	/*display: inline-flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;*/
	max-height: 200px;
}
.out {
	overflow: auto;

	display: block;
	box-sizing: border-box;
	width: 100%;
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
	/*display: -ms-flexbox;
	display: flex;*/
	height: 100px;
	/*-ms-flex-pack: center;
	justify-content: center;*/
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
.add-more:hover .svg {
	fill: black;
}
.big-image {
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 4px;
	display: flex;
	height: 250px;
	justify-content: center;
	margin: 12px 12px 12px 0;
	width: 70%;
}
.bottom-preview .big-image img {
	width: 100%;
	height: 100%;
}
.bottom-preview {
	position: absolute;
	top: 40%;
	left: 0%;
	display: flex;
}
.image-caption {
	resize: none;
	box-sizing: border-box;
	overflow: hidden;
	/*display: block;*/
	outline: none;
	border: 1px solid #edeff1;
	border-radius: 4px;
	color: #878a8c;
	margin: 10px;
	display: flex;
	padding: 30px;
}

.image-link {
}
.char-count {
	transform: translateX(-1rem);
	font-size: 1rem;
	font-weight: bold;
	position: absolute;
	left: 68%;
	top: 70%;
}
.count {
	position: relative;
}
.text-values {
	/*position: absolute;
	left: 70%;
	top: 0%;
	display: block;
	-ms-flex: 1;
	flex: 1;
	margin: 12px 0;
	width: 50px;*/
	box-sizing: border-box;
	display: block;
	-ms-flex: 1;
	flex: 1;
	margin: auto;
	width: 120%;
}

/*.out-text {
	position: relative;
}*/
</style>
