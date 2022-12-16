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
									:class="buttonDisabled ? 'post-button' : 'success'"
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
		<!-- <button @click="getTitle">check</button>
		{{ title }} -->
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
			buttonDisabled: true,

			//post params
			kind: null,
			subreddit: null,
			inSubreddit: null,
			title: null,
			content: null,
			nsfw: null,
			spoiler: null,
			flairId: '',
			images: [],
			imageCaptions: [],
			imageLinks: [],
			video: null,
			sendReplies: null,
			choosen: null,
			userName: null,
			try: (this.getTitle && this.getSubreddit) || this.getUsername,
			postData: null,
		};
	},
	computed: {
		// enable() {
		// 	console.log(this.getTitle && (this.getSubreddit || this.getUsername));
		// 	return this.getTitle && (this.getSubreddit || this.getUsername);
		// },
		Title() {
			return this.$store.getters['posts/getTitle'];
		},
		community() {
			return this.$store.getters['posts/getSubreddit'];
		},
		incommunity() {
			return this.$store.getters['posts/getinSubreddit'];
		},
	},
	watch: {
		// enable(value) {
		// 	console.log(value);
		// 	// this.enable();
		// 	if (value) this.buttonDisabled = false;
		// },
		Title(value) {
			console.log(value);
			// this.enable();
			this.title = value;
			// if(value=='')
			//  this.title=null;
			if (this.inSubreddit && this.inSubreddit != '') {
				if (
					this.title &&
					this.title != '' &&
					this.subreddit &&
					this.subreddit != ''
				)
					this.buttonDisabled = false;
				else this.buttonDisabled = true;
			} else {
				if (this.title && this.title != '') this.buttonDisabled = false;
				else this.buttonDisabled = true;
			}
			// if (value) this.buttonDisabled = false;
		},
		community(value) {
			this.subreddit = value;
		},
		incommunity(value) {
			this.inSubreddit = value;
		},

		// try(value) {
		// 	console.log(value);
		// 	// this.enable();
		// 	if (value) this.buttonDisabled = false;
		// },
	},
	methods: {
		// @vuese
		// get the title of the post

		getTitle() {
			this.title = this.$store.getters['posts/getTitle'];
		},
		// @vuese
		// get the kind of the post

		getKind() {
			if (this.submitTypesActive[0]) this.kind = 'hybrid';
			else if (this.submitTypesActive[1])
				this.kind = this.$store.getters['posts/getvideoOrimage'];
			else if (this.submitTypesActive[2]) this.kind = 'link';
			console.log(this.kind);
		},
		// @vuese
		// get the NSFW of the post

		getNsfw() {
			this.nsfw = this.$store.getters['posts/getNsfw'];
		},
		// @vuese
		// get poiler of the post

		getSpoiler() {
			this.spoiler = this.$store.getters['posts/getSpoiler'];
		},
		// @vuese
		// get flair id of the post

		getFlairId() {
			this.flairId = this.$store.getters['posts/getFlairId'];
		},
		// @vuese
		// get send replies of the post

		getsendReplies() {
			this.sendReplies = this.$store.getters['posts/getsendReplies'];
		},
		// @vuese
		// get the content of the post

		getContent() {
			this.content = this.$store.getters['posts/getContent'];
		},
		// @vuese
		// get the subreddit of the post

		getSubreddit() {
			this.subreddit = this.$store.getters['posts/getSubreddit'];
		},
		// @vuese
		// get the video in the type of video post

		getVideo() {
			this.video = this.$store.getters['posts/getVideo'];
		},
		getImages() {
			this.images = this.$store.getters['posts/getImages'];
		},
		getImageCaptions() {
			this.imageCaptions = this.$store.getters['posts/getImageCaptions'];
		},
		getImageLinks() {
			this.imageLinks = this.$store.getters['posts/getImageLinks'];
		},
		getUsername() {
			this.userName = localStorage.getItem('userName');
		},
		getInSubreddit() {
			this.inSubreddit = this.$store.getters['posts/getinSubreddit'];
		},

		// @vuese
		// dispatch createpost from the store

		async handleSubmit() {
			this.getTitle();
			this.getKind();
			this.getNsfw();
			this.getSpoiler();
			this.getFlairId();
			this.getsendReplies();
			this.getContent();
			this.getVideo();
			this.getImages();
			this.getImageCaptions();
			this.getImageLinks();
			this.getUsername();
			this.getSubreddit();
			this.getInSubreddit();
			// this.inSubreddit = false;
			console.log('print values');
			console.log(this.title);
			console.log(this.kind);
			console.log(this.inSubreddit);
			console.log(JSON.stringify(this.images));
			console.log(JSON.stringify(this.imageCaptions));
			console.log(JSON.stringify(this.imageLinks));
			// console.log(this.video);
			console.log(this.spoiler);
			console.log(this.nsfw);
			console.log(this.sendReplies);
			console.log(this.subreddit);
			console.log(this.inSubreddit);
			console.log('flair id');
			console.log(this.flairId);

			if (
				this.title === null ||
				this.kind === null ||
				// this.subreddit == null ||
				// this.content === '' ||
				this.nsfw === null ||
				this.spoiler === null ||
				//this.flairId == null ||
				this.sendReplies === null
			) {
				return;
			}
			console.log('hello from hell');
			this.disableButton = false;
			if (this.kind == 'hybrid') {
				const actionPayload = {
					title: this.title,
					kind: this.kind,
					subreddit: this.subreddit,
					inSubreddit: this.inSubreddit,
					content: this.content,
					nsfw: this.nsfw,
					spoiler: this.spoiler,
					flairId: this.flairId,
					sendReplies: this.sendReplies,
					baseurl: this.$baseurl,
				};

				try {
					const response = await this.$store.dispatch(
						'posts/createpostHybrid',
						actionPayload
					);

					if (response == 201) {
						console.log(response);
						console.log('الحمد لله زى الفل');
						this.success = true;
						/////r/:subredditName/comments/:postId/:postName
						this.postData = await this.$store.getters['posts/getpostData'];
						console.log(this.postData);
						if (this.inSubreddit) {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.subreddit +
											'/comments/' +
											this.postData.id +
											'/' +
											this.title
									),
								1000
							);
						} else {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.userName +
											'/comments/' +
											this.postData.id +
											'/' +
											this.title
									),
								1000
							);
						}
					}
				} catch (err) {
					this.error = err;
					console.log(this.error);
					this.success = false;
				}
			} else if (this.kind == 'video') {
				const actionPayload = {
					title: this.title,
					kind: this.kind,
					subreddit: this.subreddit,
					inSubreddit: this.inSubreddit,
					video: this.video,
					nsfw: this.nsfw,
					spoiler: this.spoiler,
					flairId: this.flairId,
					sendReplies: this.sendReplies,
					baseurl: this.$baseurl,
				};

				try {
					const response = await this.$store.dispatch(
						'posts/createpostVideo',
						actionPayload
					);

					if (response == 201) {
						console.log(response);
						console.log('الحمد لله زى الفل');
						this.success = true;
						this.postData = await this.$store.getters['posts/getpostData'];
						console.log(this.postData);
						let str = this.postData.split(':')[1];
						str = str.slice(1, str.length - 2);
						console.log(str);

						if (this.inSubreddit) {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.subreddit +
											'/comments/' +
											str +
											'/' +
											this.title
									),
								1000
							);
						} else {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.userName +
											'/comments/' +
											str +
											'/' +
											this.title
									),
								1000
							);
						}
					}
				} catch (err) {
					this.error = err;
					console.log(this.error);
					this.success = false;
				}
			} else if (this.kind == 'link') {
				const actionPayload = {
					title: this.title,
					kind: this.kind,
					subreddit: this.subreddit,
					inSubreddit: this.inSubreddit,
					content: this.content,
					nsfw: this.nsfw,
					spoiler: this.spoiler,
					flairId: this.flairId,
					sendReplies: this.sendReplies,
					baseurl: this.$baseurl,
				};

				try {
					const response = await this.$store.dispatch(
						'posts/createpostLink',
						actionPayload
					);

					if (response == 201) {
						console.log(response);
						console.log('الحمد لله زى الفل');
						this.success = true;
						this.postData = await this.$store.getters['posts/getpostData'];
						console.log(this.postData);
						if (this.inSubreddit) {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.subreddit +
											'/comments/' +
											this.postData.id +
											'/' +
											this.title
									),
								1000
							);
						} else {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.userName +
											'/comments/' +
											this.postData.id +
											'/' +
											this.title
									),
								1000
							);
						}
					}
				} catch (err) {
					this.error = err;
					console.log(this.error);
					this.success = false;
				}
			} else if (this.kind == 'image') {
				const actionPayload = {
					title: this.title,
					kind: this.kind,
					subreddit: this.subreddit,
					inSubreddit: this.inSubreddit,
					images: this.images,
					imageCaptions: this.imageCaptions,
					imageLinks: this.imageLinks,
					nsfw: this.nsfw,
					spoiler: this.spoiler,
					flairId: this.flairId,
					sendReplies: this.sendReplies,
					baseurl: this.$baseurl,
				};

				try {
					const response = await this.$store.dispatch(
						'posts/createpostImage',
						actionPayload
					);

					if (response == 201) {
						console.log(response);
						console.log('الحمد لله زى الفل');
						this.success = true;
						this.postData = await this.$store.getters['posts/getpostData'];
						//const { id } = this.postData;
						console.log('id//////');
						console.log(this.postData);
						//console.log(this.postData.id);
						console.log(this.postData.split(':')[1]);
						let str = this.postData.split(':')[1];
						str = str.slice(1, str.length - 2);
						console.log(str);

						console.log(this.postData.id);
						if (this.inSubreddit) {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.subreddit +
											'/comments/' +
											str +
											'/' +
											this.title
									),
								1000
							);
						} else {
							setTimeout(
								() =>
									this.$router.replace(
										'/r/' +
											this.userName +
											'/comments/' +
											str +
											'/' +
											this.title
									),
								1000
							);
						}
					}
				} catch (err) {
					this.error = err;
					console.log(this.error);
					this.success = false;
				}
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
	display: flex;
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
.success {
	color: #ffffff;
	background-color: #0079d3;
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
	display: flex;
}
.box1 {
	margin-top: 50px;
}
@media (max-width: 1255px) {
	.post-button {
		width: max-content;
		display: flex;
		left: 70%;
	}
	.success {
		width: max-content;
		display: flex;
		left: 70%;
	}
}
@media (max-width: 221px) {
	.post-button {
		width: max-content;
		display: flex;
		left: 50%;
	}
	.success {
		width: max-content;
		display: flex;
		left: 50%;
	}
}
</style>
