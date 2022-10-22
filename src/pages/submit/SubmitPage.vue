<template>
	<div>submit page</div>
	<div class="submit-container">
		<nav id="submit-nav" class="submit-nav">
			<ul class="submit-list" @click="selectPostType">
				<li class="li-active">
					<div id="0" class="clicked-button"></div>
					<i class="fa-regular fa-bookmark icon"></i>Post
				</li>
				<li>
					<div id="1" class="clicked-button"></div>
					<i class="fa-regular fa-image icon"></i>Images & Video
				</li>
				<li>
					<div id="2" class="clicked-button"></div>
					<i class="fa-solid fa-link icon"></i>Link
				</li>
				<li>
					<div id="3" class="clicked-button"></div>
					<i class="fa-solid fa-list-check icon"></i>Poll
				</li>
				<li>
					<div id="4" class="clicked-button"></div>
					<i class="fa-solid fa-microphone icon"></i>Talk
				</li>
			</ul>
		</nav>
		<!-- todo here add the components 0->post 1->image 2->...... -->
		<div v-if="submitTypesActive[0]">kjbkj</div>
	</div>
</template>

<script>
export default {
	created() {
		document.title = 'Submit to Reddit';
	},
	data() {
		return {
			submitTypesActive: [1, 0, 0, 0, 0],
		};
	},
	methods: {
		selectPostType(e) {
			if (
				e.target.id &&
				+e.target.id != isNaN &&
				+e.target.id >= 0 &&
				+e.target.id <= 4
			) {
				const arr = document.querySelectorAll('nav ul li');
				for (let i = 0; i < arr.length; i++) {
					arr[i].classList.remove('li-active');
					this.submitTypesActive[i] = 0;
				}

				// if(e.target.tagName == 'LI'){
				// e.target.classList.add('li-active');
				// console.log(+e.target.id);
				// console.log(e.target.tagName);

				arr[+e.target.id].classList.add('li-active');
				this.submitTypesActive[+e.target.id] = 1;
			}
		},
	},
};
</script>

<style scoped>
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
	border: none;
}
.submit-container {
	margin: 50px 50px; /* delete this when making layout */
	background-color: #ffffff;
	margin-bottom: 15px;
	border-radius: 5px;
	width: 740px; /* you must delete this line when making layout */
}
nav {
	margin: 0 0 12px;
	overflow: auto;
	/* display: flex; */
}
ul {
	display: flex;
	align-items: stretch;
}
nav ul li {
	font-size: 14px;
	font-weight: 700;
	line-height: 18px;
	cursor: pointer;
	padding: 15px 17px;
	position: relative;
	color: #1c1c1c;
	flex: 1;
	border-color: #edeff1;
	border-style: solid;
	border-width: 0 1px 1px 0;
	justify-content: center;
	align-items: center;
	color: #878a8c;
	text-align: center;
	white-space: nowrap;
	position: relative;
}
nav ul li .icon {
	font-size: 20px;
	font-weight: 400;
	height: 20px;
	line-height: 20px;
	vertical-align: middle;
	width: 20px;
	margin-right: 8px;
}
.clicked-button {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: transparent;
}
nav ul li:hover {
	background-color: rgba(0, 121, 211, 0.05);
}
.li-active {
	border-bottom: 3px solid #0079d3;
	color: #0079d3;
}
</style>
