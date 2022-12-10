<template>
	<div class="post-picture">
		<div class="picture-container">
			<span v-if="lastRightPic != 0" @click="rightClick" class="left-button"
				><i class="fa-solid fa-angle-left"></i
			></span>
			<span v-if="lastLeftPic != 0" @click="leftClick" class="right-button"
				><i class="fa-solid fa-angle-right"></i
			></span>
			<div class="picture-number-box">
				{{ lastRightPic + 1 }} / {{ images.length }}
			</div>
			<div class="pic-items">
				<ul class="images">
					<li
						v-for="(image, index) in images"
						:key="index"
						:style="{ left: image.left + '%' }"
					>
						<img src="../../../../assets/R.png" alt="" />
					</li>
				</ul>
			</div>
		</div>
		<div class="post-footer"></div>
	</div>
</template>
<script>
export default {
	created() {
		this.lastLeftPic = this.images.length - 1;
	},
	data() {
		return {
			images: [
				{
					imgUrl: '../../../../assets/R.png',
					left: '0',
				},
				{
					imgUrl: '../../../../assets/R.png',
					left: '100',
				},
				{
					imgUrl: '../../../../assets/R.png',
					left: '200',
				},
			],
			lastLeftPic: 0,
			lastRightPic: 0,
		};
	},
	methods: {
		leftClick() {
			this.lastLeftPic--;
			this.lastRightPic++;
			console.log('clicked');
			this.images.forEach((ele) => {
				console.log(Number(ele.left) - 100);
				ele.left = String(Number(ele.left) - 100);
			});
		},
		rightClick() {
			this.lastRightPic--;
			this.lastLeftPic++;
			console.log('clicked');
			this.images.forEach((ele) => {
				console.log(Number(ele.left) + 100);
				ele.left = String(Number(ele.left) + 100);
			});
		},
	},
};
</script>
<style scoped>
/* .post-picture {
	width: 100%;
}
.post-picture-container {
	width: 100%;
} */
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
