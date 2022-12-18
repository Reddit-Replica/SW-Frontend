<template>
	<div id="post-picture-components" class="post-picture">
		<div class="picture-container" id="post-picture-container">
			<span
				v-if="lastRightPic != 0"
				@click="rightClick"
				id="post-picture-components-left-button"
				class="left-button"
				><i class="fa-solid fa-angle-left"></i
			></span>
			<span
				v-if="lastLeftPic != 0"
				@click="leftClick"
				class="right-button"
				id="post-picture-components-right-button"
				><i class="fa-solid fa-angle-right"></i
			></span>
			<div
				class="picture-number-box"
				id="post-picture-components-picture-number-box"
			>
				{{ lastRightPic + 1 }} / {{ images.length }}
			</div>
			<div class="pic-items" id="post-picture-components-picture-number-box">
				<ul class="images" id="post-picture-components-images">
					<li
						v-for="(image, index) in imagesShown"
						:key="index"
						:style="{ left: image.left + '%' }"
					>
						<img
							:style="[nsfwFlag || spoilerFlag ? 'filter: blur(60px);' : '']"
							:src="image.imgUrl"
							:id="`image-id-${index}`"
							alt=""
						/>
					</li>
				</ul>
			</div>
		</div>
		<div class="post-footer" id="post-picture-components-post-footer">
			<router-link
				id="post-picture-components-post-footer-router-link"
				style="padding: 8px; color: #1c1c1c; font-size: 12px"
				:to="images[indexShown].link || ''"
				>{{ images[indexShown].caption }}</router-link
			>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		// @vuese
		// images array to show in the post slider
		images: {
			type: Array,
			required: true,
		},
		// @vuese
		// nsfw flag to blur the image
		nsfwFlag: {
			type: Boolean,
			required: false,
		},
		// @vuese
		// spoiler flag to blur image or not
		spoilerFlag: {
			type: Boolean,
			required: false,
		},
	},
	created() {
		this.lastLeftPic = this.images.length - 1;
		for (let i = 0; i < this.images.length; i++) {
			const obj = {
				left: i * 100,
				imgUrl: this.$baseurl + '/' + this.images[i].path,
				caption: this.images[i].caption || '',
				link: this.images[i].link || '',
			};
			// eslint-disable-next-line
			this.imagesShown.push(obj);
		}
	},
	data() {
		return {
			imagesShown: [],
			lastLeftPic: 0,
			lastRightPic: 0,
			indexShown: 0,
		};
	},
	methods: {
		// @vuese
		// left click page handler when we click on the left button to get the left following picture
		leftClick() {
			this.lastLeftPic--;
			this.lastRightPic++;
			console.log('clicked');
			this.indexShown++;
			this.imagesShown.forEach((ele) => {
				console.log(Number(ele.left) - 100);
				ele.left = String(Number(ele.left) - 100);
			});
		},
		// @vuese
		// right click page handler when we click on the right button to get the right following picture
		rightClick() {
			this.lastRightPic--;
			this.lastLeftPic++;
			this.indexShown--;
			console.log('clicked');
			this.imagesShown.forEach((ele) => {
				console.log(Number(ele.left) + 100);
				ele.left = String(Number(ele.left) + 100);
			});
		},
	},
	computed: {
		// @vuese
		// handel the showing of the image
		imageShowHandler() {
			for (let i = 0; i < this.images.length; i++) {
				const obj = {
					left: i * 100,
					imgUrl: this.$baseurl + this.images[i].path,
				};
				// eslint-disable-next-line
				this.imagesShown.push(obj);
			}
			return this.imagesShown;
		},
	},
};
</script>
<style scoped>
img {
	max-width: 100%;
	max-height: 255px;
}
.post-picture .picture-container {
	width: 100%;
	height: 256px;
	position: relative;
}
.post-picture .picture-container .left-button,
.post-picture .picture-container .right-button {
	position: absolute;
}
.post-picture .picture-container .left-button {
	left: 16px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 24px;
	z-index: 2;
	height: 44px;
	width: 44px;
	padding: 16px;
	cursor: pointer;
	background: #fff;
	border-radius: 40px;
	box-shadow: 0 4px 14px rgb(0 0 0 / 10%);
	display: flex;
	justify-content: center;
	align-items: center;
}
.post-picture .picture-container .right-button {
	right: 16px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 24px;
	z-index: 2;
	height: 44px;
	width: 44px;
	padding: 16px;
	cursor: pointer;
	background: #fff;
	border-radius: 40px;
	box-shadow: 0 4px 14px rgb(0 0 0 / 10%);
	display: flex;
	justify-content: center;
	align-items: center;
}
.picture-number-box {
	display: flex;
	align-items: center;
	backdrop-filter: blur(40px);
	background: rgba(0, 0, 0, 0.5);
	border-radius: 50px;
	color: #fff;
	font-size: 12px;
	padding: 4px 8px;
	position: absolute;
	right: 16px;
	top: 16px;
	z-index: 5;
}
.post-picture .picture-container .pic-items ul {
	width: 100%;
	height: 100%;
	position: relative;
	justify-content: center;
	/* overflow: hidden; */
}
.post-picture .picture-container .pic-items li {
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	transition: left 0.25s;
}
.post-picture .post-footer {
	height: 40px;
	background-color: #edeff1;
	color: #222222;
	display: flex;
	width: 100%;
	align-items: center;
}
</style>
