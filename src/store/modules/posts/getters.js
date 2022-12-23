export default {
	/**
	 * The module 'PostsStore' object.
	 * @name PostsGetters
	 * @type {object}
	 * @getter {object} getTitle=title getTitle Returns The title of the post.
	 * @getter {Boolean} getNsfw=Nsfw getNsfw Returns NSFW of post.
	 * @getter {Boolean} getSpoiler=Spoiler getSpoiler Returns Spoiler of post.
	 * @getter {object} getFlairId=FlairId getFlairId Returns FlairId of post.
	 * @getter {Boolean} getsendReplies=sendReplies getsendReplies Returns sendReplies of post.
	 * @getter {object} getContent=Content getContent Returns Content of post.
	 * @getter {Array} getallSubredditsReturns=allSubredditsReturns getallSubredditsReturns allSubreddits .
	 * @getter {object} getSubreddit=Subreddit getSubreddit Returns getSubreddit of post.
	 * @getter {Boolean} getinSubreddit=inSubreddit getinSubreddit Returns inSubreddit of post.
	 * @getter {Array} getImages=Images getImages Returns images of post.
	 * @getter {Array} getImageCaptions=ImageCaptions getImageCaptions Returns ImageCaptions of post.
	 * @getter {Array} getImageLinks=Links getImageLinks Returns Links of post.
	 * @getter {string} getVideo=Video getVideo Returns Video of post.
	 * @getter {string} getvideoOrimage=videoOrimage getvideoOrimage Returns videoOrimage of post.
	 * @getter {object} getpostData=postData getpostData Returns postData of post.
	 * @getter {object} getUser=User getUser Returns User of post.
	 */
	getTitle(state) {
		console.log('getters title');
		return state.title;
	},
	getNsfw(state) {
		console.log('getters nsfw');
		return state.nsfw;
	},
	getSpoiler(state) {
		console.log('getters spoiler');
		return state.spoiler;
	},
	getFlairId(state) {
		console.log('getters flair id');
		return state.flairId;
	},
	getsendReplies(state) {
		console.log('getters send replies');
		return state.sendReplies;
	},
	getContent(state) {
		console.log('getters content');
		return state.content;
	},
	getallSubreddits(state) {
		console.log('getters allsubreddits');
		return state.allSubreddits;
	},
	getSubreddit(state) {
		console.log('getters subreddit');
		return state.subreddit;
	},
	getinSubreddit(state) {
		console.log('getters in subreddit');
		return state.inSubreddit;
	},
	getImages(state) {
		console.log('getters images');
		return state.images;
	},
	getImageCaptions(state) {
		console.log('getters ImageCaptions');
		return state.imageCaptions;
	},
	getImageLinks(state) {
		console.log('getters ImageLinks');
		return state.imageLinks;
	},
	getVideo(state) {
		console.log('getters video');
		return state.video;
	},
	getvideoOrimage(state) {
		console.log('getters videoOrimage');
		return state.videoOrimage;
	},
	getpostData(state) {
		console.log('getters postData');
		console.log(state.postData);
		return state.postData;
	},
	getUser(state) {
		console.log('getters name');
		console.log(state.name);
		return state.name;
	},
};
