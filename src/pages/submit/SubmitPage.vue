<template>
	<!-- header component -->
	<div>
		<the-header :header-title="'Create Post'"></the-header>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="left-col">
						<!-- <h3 class="heading-3">Create a post</h3> -->
						<submit-bar></submit-bar>
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
									<!-- <li>
										<div id="3" class="clicked-button"></div>
										<i class="fa-solid fa-list-check icon"></i>Poll
									</li>
									<li>
										<div id="4" class="clicked-button"></div>
										<i class="fa-solid fa-microphone icon"></i>Talk
									</li> -->
								</ul>
							</nav>
							<!-- todo here add the components 0->post 1->image 2->...... -->
							<title-input></title-input>

							<post-submit v-if="submitTypesActive[0]"></post-submit>
							<image-submit v-if="submitTypesActive[1]"></image-submit>
							<link-submit v-if="submitTypesActive[2]"></link-submit>

							<div class="box1">
								<footer-buttons></footer-buttons>
							</div>
							<div class="border-bottom"></div>
							<div class="down-row">
								<base-button
									@click="handleSubmit"
									class="post-button"
									button-text="Post"
									:disable-button="buttonDisabled"
								></base-button>
							</div>

							<submit-footer></submit-footer>
						</div>
					</div>
				</div>
				<div class="col-lg-4">right</div>
			</div>
		</div>
		<button @click="getTitle">check</button>
		{{ title }}
	</div>
</template>

<script>
import TitleInput from '../../components/SubmitComponents/TitleInput.vue';
import ImageSubmit from '../../components/SubmitComponents/ImageSubmit.vue';
import PostSubmit from '../../components/SubmitComponents/PostSubmit.vue';
import FooterButtons from '../../components/SubmitComponents/FooterButtons.vue';
import LinkSubmit from '../../components/SubmitComponents/LinkSubmit.vue';
import SubmitBar from '../../components/SubmitComponents/SubmitBar.vue';
import SubmitFooter from '../../components/SubmitComponents/SubmitFooter.vue';

export default {
	components: {
		TitleInput,
		ImageSubmit,
		FooterButtons,
		PostSubmit,
		LinkSubmit,
		SubmitBar,
		SubmitFooter,
	},
	props: {
		subredditName: {
			type: String,
			default: '',
		},
	},
	created() {
		document.title = 'Submit to Reddit';
	},
	mounted() {
		//this.getTitle();
	},
	data() {
		return {
			submitTypesActive: [1, 0, 0, 0, 0], // this an array -> decide which submit types is active 1-> active 0-> not active
			buttonDisabled: false,

			//post params
			kind: null,
			subreddit: null,
			inSubreddit: null,
			title: null,
			content: null,
			files: [{}],
			nsfw: null,
			spoiler: null,
			flairId: 123,
			imageCaptions: [],
			imageLinks: [],
			sendReplies: null,
		};
	},
	watch: {},
	methods: {
		getTitle() {
			this.title = this.$store.getters['posts/getTitle'];
		},
		getKind() {
			if (this.submitTypesActive[0]) this.kind = 'text';
			else if (this.submitTypesActive[1]) this.kind = 'image';
			else if (this.submitTypesActive[2]) this.kind = 'link';
			console.log(this.kind);
		},
		getNsfw() {
			this.nsfw = this.$store.getters['posts/getNsfw'];
		},
		getSpoiler() {
			this.spoiler = this.$store.getters['posts/getSpoiler'];
		},
		getFlairId() {
			//this.flairId = this.$store.getters['posts/getFlairId'];
		},
		getsendReplies() {
			this.sendReplies = this.$store.getters['posts/getsendReplies'];
		},
		getContent() {
			this.content = this.$store.getters['posts/getContent'];
		},
		getSubreddit() {
			this.subreddit = this.$store.getters['posts/getSubreddit'];
		},
		async handleSubmit() {
			this.getTitle();
			this.getKind();
			this.getNsfw();
			this.getSpoiler();
			//this.getFlairId();
			this.getsendReplies();
			this.getContent();
			this.getSubreddit();

			console.log('print values');
			console.log(this.title);
			console.log(this.kind);
			console.log(this.spoiler);
			console.log(this.nsfw);
			console.log(this.sendReplies);
			console.log(this.content);
			console.log(this.subreddit);

			if (
				this.title === null ||
				this.kind === null ||
				this.subreddit == null ||
				this.content === '' ||
				this.nsfw === null ||
				this.spoiler === null ||
				//this.flairId == null ||
				this.sendReplies === null
			) {
				return;
			}
			console.log('hello from hell');
			this.disableButton = false;
			const actionPayload = {
				kind: this.kind,
				subreddit: this.subreddit,
				title: this.title,
				content: this.content,
				files: this.files,
				nsfw: this.nsfw,
				spoiler: this.spoiler,
				flairId: this.flairId,
				imageCaptions: this.imageCaptions,
				imageLinks: this.imageLinks,
				sendReplies: this.sendReplies,
				baseurl: this.$baseurl,
			};

			try {
				await this.$store.dispatch('posts/createPost', actionPayload);
				const response = localStorage.getItem('response');

				if (response == 200) {
					console.log(response);
					this.success = true;
				}
			} catch (err) {
				this.error = err;
				console.log(this.error);
				this.success = false;
			}
		},
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
	/* margin: 50px 50px; delete this when making layout */
	background-color: #ffffff;

	margin-bottom: 15px;
	border-radius: 5px;
	position: relative;
	/* max-width: 740rem; you must delete this line when making layout */
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
.border-bottom {
	margin: auto;
	width: 95%;
	border-bottom: var(--line);
}
.post-button {
	filter: grayscale(1);
	background-color: #3293db;
	color: rgba(255, 255, 255, 0.5);
	fill: rgba(255, 255, 255, 0.5);
	width: 8%;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	position: absolute;
	left: 88%;
	top: 20%;
}
.down-row {
	height: 50px;
	position: relative;
	background-color: #ffffff;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	text-align: center;
}
.box1 {
	margin-top: 50px;
}
</style>
